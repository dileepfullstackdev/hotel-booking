"use client";

import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import { Heart, Star } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

// Component to dynamically alter map center based on search query
function ChangeView({ center, zoom, viewMode }) {
  const map = useMap();

  useEffect(() => {
    if (map && typeof map.getCenter === 'function') {
      try {
        map.invalidateSize();
      } catch (e) {
        console.warn("Initial invalidateSize failed:", e);
      }
    }
  }, [map, viewMode]);

  useEffect(() => {
    let isActive = true;
    const hasValidCenter =
      Array.isArray(center) &&
      center.length === 2 &&
      Number.isFinite(center[0]) &&
      Number.isFinite(center[1]);

    if (!hasValidCenter || !map) return;

    const performMove = () => {
      if (!isActive || !map) return;
      
      try {
        // Safety check for Leaflet internal state
        if (typeof map.getCenter !== 'function') return;
        
        const currentCenter = map.getCenter();
        if (!currentCenter) return;

        const [lat, lng] = center;
        const hasSameCenter =
          Math.abs(currentCenter.lat - lat) < 0.0001 &&
          Math.abs(currentCenter.lng - lng) < 0.0001 &&
          map.getZoom() === zoom;

        if (hasSameCenter) return;

        map._programmaticMove = true;
        map.invalidateSize();
        map.setView([lat, lng], zoom, { animate: false });
        
        setTimeout(() => {
          if (isActive && map) map._programmaticMove = false;
        }, 100);
      } catch (err) {
        console.warn("Map view change failed:", err);
      }
    };

    map.whenReady(performMove);

    return () => { isActive = false; };
  }, [center?.[0], center?.[1], map, zoom]);

  useEffect(() => {
    const handleResize = () => {
      if (map) map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [map]);

  return null;
}

// Map bounds dispatcher
function MapController({ onBoundsChange }) {
  const onBoundsChangeRef = useRef(onBoundsChange);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    onBoundsChangeRef.current = onBoundsChange;
  }, [onBoundsChange]);

  const map = useMapEvents({
    moveend: () => {
      if (onBoundsChangeRef.current) {
        onBoundsChangeRef.current(map.getBounds(), { userInteracted: !map._programmaticMove && hasInitializedRef.current });
      }
    },
    zoomend: () => {
      if (onBoundsChangeRef.current) {
        onBoundsChangeRef.current(map.getBounds(), { userInteracted: !map._programmaticMove && hasInitializedRef.current });
      }
    }
  });

  // trigger once on mount to set initial bounds filter
  useEffect(() => {
    if (map && onBoundsChangeRef.current && !hasInitializedRef.current) {
      // Delay slightly to ensure map is stable
      const timer = setTimeout(() => {
        onBoundsChangeRef.current(map.getBounds(), { userInteracted: false });
        hasInitializedRef.current = true;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [map]);

  return null;
}

export default function InteractiveMap({ hotels, center, zoom, userLocation, hoveredHotelId, selectedHotelId, queryString = "", setHoveredHotelId, onBoundsChange, numNights = 1, viewMode = "map" }) {
  const [mounted, setMounted] = useState(false);
  const markerRefs = useRef({});

  useEffect(() => {
    if (selectedHotelId && markerRefs.current[selectedHotelId]) {
      markerRefs.current[selectedHotelId].openPopup();
    }
  }, [selectedHotelId]);
  const visibleHotels = hotels.filter(
    (hotel) => Number.isFinite(hotel?.lat) && Number.isFinite(hotel?.lng)
  );
  const hasUserLocation =
    Array.isArray(userLocation) &&
    userLocation.length === 2 &&
    Number.isFinite(userLocation[0]) &&
    Number.isFinite(userLocation[1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-black/50" />;

  const createIcon = (hotel) => {
    const isHovered = hoveredHotelId === hotel.id;
    const displayPrice = numNights > 1 ? hotel.price * numNights : hotel.price;
    const iconHtml = renderToStaticMarkup(
      <div 
        className={`relative flex items-center justify-center font-bold text-sm px-3 py-1.5 rounded-full shadow-2xl transition-all ${
          isHovered ? 'bg-amber-500 text-black scale-110 z-50' : 'bg-white text-black hover:scale-105'
        }`}
      >
        ₹{displayPrice}
        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] ${
          isHovered ? 'border-t-amber-500' : 'border-t-white'
        }`} />
      </div>
    );

    return L.divIcon({
      html: iconHtml,
      className: "custom-leaflet-marker",
      iconSize: [60, 30],
      iconAnchor: [30, 35],
      popupAnchor: [0, -35]
    });
  };

  return (
    <div className="w-full h-full relative" style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.7) contrast(120%)" }}>
      <MapContainer 
        center={center} 
        zoom={zoom}
        minZoom={4}
        maxBounds={[[6.0, 68.0], [38.0, 98.0]]}
        maxBoundsViscosity={1.0}
        style={{ height: "100%", width: "100%", background: "#1a1a1a" }}
        zoomControl={false}
      >
        <ChangeView center={center} zoom={zoom} viewMode={viewMode} />
        <MapController onBoundsChange={onBoundsChange} />
        
        {/* Standard OSM Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hasUserLocation && (
          <CircleMarker
            center={userLocation}
            radius={10}
            pathOptions={{
              color: "#ffffff",
              weight: 3,
              fillColor: "#2563eb",
              fillOpacity: 1
            }}
          >
            <Tooltip
              permanent
              direction="top"
              offset={[0, -12]}
              opacity={1}
              className="current-location-tooltip"
            >
              You are here
            </Tooltip>
            <Popup className="custom-popup" closeButton={false}>
              <div className="px-4 py-3 bg-black text-white rounded-xl" style={{ filter: "invert(1) hue-rotate(180deg)" }}>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">Current Location</p>
                <p className="text-sm font-semibold">You are here</p>
              </div>
            </Popup>
          </CircleMarker>
        )}

        {visibleHotels.map((hotel) => (
          <Marker 
            key={hotel.id} 
            position={[hotel.lat, hotel.lng]} 
            icon={createIcon(hotel)}
            zIndexOffset={hoveredHotelId === hotel.id ? 1000 : 0}
            ref={(el) => { if (el) markerRefs.current[hotel.id] = el; }}
            eventHandlers={{
              mouseover: () => setHoveredHotelId(hotel.id),
              mouseout: () => setHoveredHotelId(null)
            }}
          >
            <Popup className="custom-popup" closeButton={false}>
               <div className="w-[200px] flex flex-col bg-black overflow-hidden border-0 m-0 p-0" style={{ filter: "invert(1) hue-rotate(180deg)" }}>
                 {/* Re-invert image to look normal inside inverted map */}
                 <img src={hotel.image} className="w-full h-[120px] object-cover" />
                 <div className="p-3 text-white">
                   <div className="flex items-center gap-1 mb-1">
                      <Star size={10} className="text-amber-400 fill-amber-400"/>
                      <span className="text-xs font-bold text-white">{hotel.rating}</span>
                   </div>
                    <h4 className="text-white font-bold text-sm truncate">{hotel.name}</h4>
                    <p className="text-white/50 text-[10px] uppercase truncate">{hotel.type}</p>
                    <a 
                      href={`/user/hotels/${hotel.id}?${queryString}`}
                      className="mt-3 block w-full bg-white text-black text-center py-2 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Stay
                    </a>
                  </div>
               </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Global CSS for markers mapping specifically to our dark mode logic */}
      <style jsx global>{`
        .custom-leaflet-marker {
          background: transparent;
          border: none;
        }
        .custom-leaflet-marker > div {
          /* Need to re-invert marker so it looks correct over the dark inverted map */
          filter: invert(1) hue-rotate(180deg); 
        }
        .leaflet-popup-content-wrapper {
          background-color: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          background-color: black;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          /* re-invert the popup box */
        }
        .leaflet-popup-tip {
          background-color: black !important;
          /* wait, the entire map is inverted. so background black becomes white visually before popup inversion.
             Leaflet popup tip is tricky. Let's hide it. */
          display: none;
        }
        .current-location-tooltip {
          background: rgba(0, 0, 0, 0.88);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 9999px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          filter: invert(1) hue-rotate(180deg);
        }
        .current-location-tooltip::before {
          display: none;
        }
      `}</style>
    </div>
  );
}
