"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useMemo, Suspense, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Heart, ArrowLeft, SlidersHorizontal, Loader2, ChevronLeft, ChevronRight, Map } from "lucide-react";
import { Card, Button } from "@heroui/react";
import SearchBar from "@/components/SearchBar";
import FiltersModal from "@/components/FiltersModal";
import dynamic from "next/dynamic";

// Dynamically import InteractiveMap to avoid SSR 'window is not defined' errors
const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/50 flex items-center justify-center"><Loader2 className="animate-spin text-white/50" /></div>,
});

const LOCATION_COORDS = {
  "goa": { center: [15.2993, 74.1240], zoom: 11 },
  "ooty": { center: [11.4118, 76.6976], zoom: 12 },
  "bangalore": { center: [12.9716, 77.5946], zoom: 12 },
  "mumbai": { center: [19.0760, 72.8777], zoom: 11 },
  "delhi": { center: [28.7041, 77.1025], zoom: 11 },
  "manali": { center: [32.2475, 77.1892], zoom: 12 },
  "nearby": { center: [20.5937, 78.9629], zoom: 5 } // Centered on India
};

function SearchParamsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryLocation = searchParams?.get("location") || "Nearby";
  const queryCheckIn = searchParams?.get("checkin");
  const queryCheckOut = searchParams?.get("checkout");
  const queryAdults = Number(searchParams?.get("adults") || 0);
  const queryChildren = Number(searchParams?.get("children") || 0);
  const queryInfants = Number(searchParams?.get("infants") || 0);
  const queryPets = Number(searchParams?.get("pets") || 0);
  const queryGuests = searchParams?.get("guests") || "1";
  const queryLat = searchParams?.get("lat");
  const queryLng = searchParams?.get("lng");
  
  const totalGuestsNeeded = queryAdults + queryChildren;

  const numNights = useMemo(() => {
    if (queryCheckIn && queryCheckOut) {
      const start = new Date(queryCheckIn);
      const end = new Date(queryCheckOut);
      if (!isNaN(start) && !isNaN(end)) {
        const diffDays = Math.round((end - start) / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 1;
      }
    }
    return 1;
  }, [queryCheckIn, queryCheckOut]);

  const [hoveredHotelId, setHoveredHotelId] = useState(null);
  const [mapBounds, setMapBounds] = useState(null);
  const [isMapAreaMode, setIsMapAreaMode] = useState(false);
  const [allHotels, setAllHotels] = useState([]);
  const [isLoadingHotels, setIsLoadingHotels] = useState(true);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [userLocation, setUserLocation] = useState(() => {
    const lat = Number(queryLat);
    const lng = Number(queryLng);

    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      return [lat, lng];
    }

    return null;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [viewMode, setViewMode] = useState("list"); // 'list' or 'map'

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    typeOfPlace: "any",
    priceRange: [0, 50000],
    bedrooms: "any",
    beds: "any",
    bathrooms: "any",
    amenities: [],
    propertyTypes: []
  });

  const handleBoundsChange = useCallback((bounds, meta) => {
    setMapBounds(prev => {
      if (!bounds) return prev;
      // Leaflet bounds check
      if (prev && typeof prev.equals === 'function' && prev.equals(bounds)) {
        return prev;
      }
      // Fallback for simple objects
      if (prev && prev._southWest?.lat === bounds._southWest?.lat && prev._northEast?.lat === bounds._northEast?.lat) {
        return prev;
      }
      return bounds;
    });
    
    if (meta?.userInteracted) {
      setIsMapAreaMode(true);
    }
  }, []);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.typeOfPlace !== "any") count++;
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 50000) count++;
    if (filters.bedrooms !== "any") count++;
    if (filters.beds !== "any") count++;
    if (filters.bathrooms !== "any") count++;
    count += filters.amenities.length;
    count += filters.propertyTypes.length;
    
    return count;
  }, [filters]);

  const [savedHotelIds, setSavedHotelIds] = useState(new Set());
  const toggleSave = (e, id) => {
    e.stopPropagation();
    setSavedHotelIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    fetch('/api/hotels/recommended')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(h => ({
          id: h.id,
          name: h.name,
          type: h.type || 'Stay',
          city: h.city,
          price: h.price?.amount || 0,
          rating: h.rating || 4.5,
          reviews: h.reviewCount || 0,
          image: h.images?.[0] || '',
          lat: h.coordinates?.lat,
          lng: h.coordinates?.lng,
          isSuperhost: h.host?.isSuperhost || false,
          amenities: h.amenities || [],
          bedrooms: h.bedrooms || 1,
          beds: h.beds || 1,
          bathrooms: h.bathrooms || 1,
          max_guests: h.max_guests || (h.bedrooms * 2 + 1), 
          pet_friendly: h.pet_friendly ?? (h.amenities?.some(a => a.id === 'pets') || false),
          type_of_place: h.type_of_place || 'Entire home',
          unavailableDates: h.unavailableDates || []
        }));
        setAllHotels(formatted);
        setIsLoadingHotels(false);
      })
      .catch(err => {
        console.error("Failed to load hotels", err);
        setIsLoadingHotels(false);
      });
  }, []);

  useEffect(() => {
    const lat = Number(queryLat);
    const lng = Number(queryLng);

    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      setUserLocation([lat, lng]);
      return;
    }

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([
          position.coords.latitude,
          position.coords.longitude
        ]);
      },
      () => { },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 }
    );
  }, [queryLat, queryLng]);

  const locationFiltered = useMemo(() => {
    const applyFilters = (hotel) => {
      // 1. Guest Capacity (Airbnb: Adults + Children)
      if (totalGuestsNeeded > 0 && (hotel.max_guests || 0) < totalGuestsNeeded) return false;

      // 2. Pet Friendly
      if (queryPets > 0 && !hotel.pet_friendly) return false;

      // 3. Price
      if (hotel.price < filters.priceRange[0] || hotel.price > filters.priceRange[1]) return false;

      // 2. Property Type
      if (filters.propertyTypes.length > 0) {
        const typeStr = (hotel.type || '').toLowerCase();
        let matchesType = false;
        if (filters.propertyTypes.includes('house') && (typeStr.includes('house') || typeStr.includes('villa') || typeStr.includes('bungalow') || typeStr.includes('homestay') || typeStr.includes('heritage'))) matchesType = true;
        if (filters.propertyTypes.includes('flat') && (typeStr.includes('apartment') || typeStr.includes('loft') || typeStr.includes('suite'))) matchesType = true;
        if (filters.propertyTypes.includes('guesthouse') && (typeStr.includes('guesthouse') || typeStr.includes('inn') || typeStr.includes('tent') || typeStr.includes('camp') || typeStr.includes('cottage') || typeStr.includes('chalet') || typeStr.includes('residence') || typeStr.includes('treehouse'))) matchesType = true;
        if (filters.propertyTypes.includes('hotel') && (typeStr.includes('hotel') || typeStr.includes('resort') || typeStr.includes('retreat'))) matchesType = true;

        if (!matchesType) return false;
      }

      // 3. Amenities
      if (filters.amenities.length > 0) {
        const hotelAm = hotel.amenities ? hotel.amenities.map(a => a.id) : [];
        for (const am of filters.amenities) {
          if (!hotelAm.includes(am)) return false;
        }
      }

      // 4. Type of place
      if (filters.typeOfPlace !== "any") {
         const typeLabel = filters.typeOfPlace === "room" ? "Room" : "Entire home";
         if (hotel.type_of_place !== typeLabel) return false;
      }

      // 5. Rooms and beds
      if (filters.bedrooms !== "any" && hotel.bedrooms < filters.bedrooms) return false;
      if (filters.beds !== "any" && hotel.beds < filters.beds) return false;
      if (filters.bathrooms !== "any" && hotel.bathrooms < filters.bathrooms) return false;

      // 6. Date Availability
      if (queryCheckIn && queryCheckOut && hotel.unavailableDates && hotel.unavailableDates.length > 0) {
        const checkInDate = new Date(queryCheckIn);
        const checkOutDate = new Date(queryCheckOut);
        
        for (const unavailStr of hotel.unavailableDates) {
          const unavailDate = new Date(unavailStr);
          // If the hotel is unavailable on a night that falls within the user's stay
          if (unavailDate >= checkInDate && unavailDate < checkOutDate) {
            return false;
          }
        }
      }

      return true;
    };

    let baseHotels = allHotels;
    const isNearby = queryLocation.toLowerCase() === "nearby";
    const isMapSearch = queryLocation.toLowerCase() === "hotels in map area" || queryLocation.toLowerCase() === "stays in map area";

    // If the user has moved the map manually (isMapAreaMode), we want to search the ENTIRE database
    // within the current viewport. So we don't apply city or radius filters.
    if (!isMapAreaMode) {
      if (!isNearby && !isMapSearch) {
        baseHotels = allHotels.filter((h) => h.city.toLowerCase() === queryLocation.toLowerCase());
      } else if (isNearby && userLocation) {
        // Only apply the 55km radius if we haven't manually moved the map
        baseHotels = allHotels.filter(h => {
          const dist = Math.sqrt(Math.pow(h.lat - userLocation[0], 2) + Math.pow(h.lng - userLocation[1], 2));
          return dist < 0.5; // Roughly 55km radius
        }).sort((a, b) => {
          const distA = Math.sqrt(Math.pow(a.lat - userLocation[0], 2) + Math.pow(a.lng - userLocation[1], 2));
          const distB = Math.sqrt(Math.pow(b.lat - userLocation[0], 2) + Math.pow(b.lng - userLocation[1], 2));
          return distA - distB;
        });
      }
    }

    const cityMatched = baseHotels;

    // Apply strict filters first on the city
    let strictFiltered = cityMatched.filter(applyFilters);

    // If zero matches, expand to all states!
    if (strictFiltered.length === 0 && (filters.priceRange[0] > 0 || filters.priceRange[1] < 50000 || filters.amenities.length > 0 || filters.propertyTypes.length > 0)) {
      const allStatesFiltered = allHotels.filter(applyFilters);
      if (allStatesFiltered.length > 0) {
        return allStatesFiltered;
      }
    }

    return strictFiltered;
  }, [allHotels, queryLocation, filters, queryCheckIn, queryCheckOut, totalGuestsNeeded, queryPets, isMapAreaMode]);

  const [mapCenter, setMapCenter] = useState(LOCATION_COORDS["nearby"].center);
  const [mapZoom, setMapZoom] = useState(LOCATION_COORDS["nearby"].zoom);

  useEffect(() => {
    if (isMapAreaMode || queryLocation.toLowerCase() === "hotels in map area") {
      return; // Do not forcefully change map center if we are roaming the map
    }

    let nextCenter;
    let nextZoom = 12;

    const locKey = queryLocation.toLowerCase();
    const isSpecialLocation = LOCATION_COORDS[locKey];

    if (locKey === "nearby" && userLocation) {
      nextCenter = userLocation;
      nextZoom = 12;
    } else if (isSpecialLocation) {
      nextCenter = isSpecialLocation.center;
      nextZoom = isSpecialLocation.zoom;
    } else if (locationFiltered.length > 0 && locKey !== "nearby" && locKey !== "stays in map area" && locKey !== "hotels in map area") {
      nextCenter = [locationFiltered[0].lat, locationFiltered[0].lng];
      nextZoom = 12;
    } else {
      nextCenter = LOCATION_COORDS["nearby"].center;
      nextZoom = LOCATION_COORDS["nearby"].zoom;
    }

    setMapCenter(prev => {
      if (prev && prev[0] === nextCenter[0] && prev[1] === nextCenter[1]) return prev;
      return nextCenter;
    });
    setMapZoom(nextZoom);
  }, [locationFiltered, queryLocation, userLocation]);

  const handleHotelClick = useCallback((hotel) => {
    // On mobile, we don't want clicking the card to move the map background
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSelectedHotelId(hotel.id);
      return;
    }
    
    setMapCenter([hotel.lat, hotel.lng]);
    setMapZoom(16);
    setSelectedHotelId(hotel.id);
  }, []);

  const getHotelUrl = useCallback((hotelId) => {
    const params = new URLSearchParams(searchParams.toString());
    return `/user/hotels/${hotelId}?${params.toString()}`;
  }, [searchParams]);

  // Use the searched city before the map initializes, then switch to viewport-driven results.
  const searchResults = useMemo(() => {
    // If we have map bounds, we should prioritize map-based filtering for the best UX.
    const hasValidBounds = mapBounds && typeof mapBounds.getNorthEast === 'function';
    
    // On desktop, we always sync. On mobile, we sync whenever we have valid bounds.
    // This ensures consistency between List and Map views.
    if (hasValidBounds && (isMapAreaMode || queryLocation.toLowerCase() === "nearby" || queryLocation.toLowerCase() === "hotels in map area" || queryLocation.toLowerCase() === "stays in map area")) {
      return locationFiltered.filter(hotel => {
        try {
          return mapBounds.contains([hotel.lat, hotel.lng]);
        } catch {
          return true;
        }
      });
    }
    return locationFiltered;
  }, [locationFiltered, mapBounds, isMapAreaMode, queryLocation]);

  useEffect(() => {
    setIsMapAreaMode(false);
    setCurrentPage(1); // Reset to page 1 on location change
  }, [queryLocation]);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [filters]);

  const paginatedResults = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return searchResults.slice(startIndex, startIndex + itemsPerPage);
  }, [searchResults, currentPage]);

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const formatDisplayDate = useCallback((dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    const isCurrentYear = date.getFullYear() === new Date().getFullYear();
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: isCurrentYear ? undefined : "numeric",
    });
  }, []);

  const baseHotelsForFilters = useMemo(() => {
    let matched = allHotels;
    if (!isMapAreaMode && queryLocation.toLowerCase() !== "nearby" && queryLocation.toLowerCase() !== "hotels in map area" && queryLocation.toLowerCase() !== "stays in map area") {
      matched = allHotels.filter(h => h.city.toLowerCase() === queryLocation.toLowerCase());
    }
    if (mapBounds && (isMapAreaMode || queryLocation.toLowerCase() === "nearby" || queryLocation.toLowerCase() === "hotels in map area" || queryLocation.toLowerCase() === "stays in map area")) {
      matched = matched.filter(hotel => {
        try { return mapBounds.contains([hotel.lat, hotel.lng]); }
        catch { return true; }
      });
    }
    return matched;
  }, [allHotels, queryLocation, mapBounds, isMapAreaMode]);

    const whereLabel = isMapAreaMode || queryLocation.toLowerCase() === "stays in map area" || queryLocation.toLowerCase() === "hotels in map area" ? "Stays in map area" : "";
  const headingLabel = isMapAreaMode || queryLocation.toLowerCase() === "stays in map area" || queryLocation.toLowerCase() === "hotels in map area" ? "map area" : queryLocation;

  return (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden relative font-sans">
      
      {/* 📱 MOBILE TOGGLE BUTTON (Airbnb Style) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] lg:hidden">
        <Button
          onPress={() => setViewMode(prev => prev === "list" ? "map" : "list")}
          className="bg-zinc-900 text-white border border-white/20 rounded-full px-6 py-3 font-bold shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          {viewMode === "list" ? (
            <>
              <Map size={18} />
              <span>Map</span>
            </>
          ) : (
            <>
              <SlidersHorizontal size={18} />
              <span>List</span>
            </>
          )}
        </Button>
      </div>

      {/* 🟢 TOP FIXED HEADER: Navbar & Shared Search Bar */}
      <div className="fixed top-0 inset-x-0 z-[100] h-[75px] sm:h-[85px] bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-md">
        <div className="flex h-full w-full items-center px-4 sm:px-6 relative max-w-[1920px] mx-auto gap-4">

          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group z-[110] shrink-0"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase tracking-wider hidden md:block">Home</span>
          </button>

          {/* Search Bar & Filters */}
          <div className="flex-1 flex justify-center px-2 sm:px-4 overflow-hidden">
            {/* On Mobile/Tablet (up to XL), we use the mobile-optimized search trigger */}
            <div className="xl:hidden flex items-center gap-2 w-full max-w-[600px]">
               <div className="flex-1">
                 <SearchBar 
                   isCompact={true} 
                   className="!bg-transparent !border-none !p-0 !shadow-none"
                 />
               </div>
               <button
                 onClick={() => setIsFiltersOpen(true)}
                 className="flex items-center justify-center p-3 rounded-full border border-white/20 bg-zinc-900/80 hover:bg-zinc-800 transition-colors text-white backdrop-blur-md shadow-lg shrink-0"
               >
                 <SlidersHorizontal size={16} />
                 {activeFilterCount > 0 && (
                   <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-black text-[10px] font-bold leading-none">
                     {activeFilterCount}
                   </div>
                 )}
               </button>
            </div>

            {/* On Desktop (XL+), we show the full compact search bar */}
            <div className="hidden xl:flex scale-85 xl:scale-95 origin-center items-center justify-center gap-3 w-full max-w-[900px]">
              <SearchBar
                isCompact={true}
                className="xl:min-w-[700px] flex-1"
                location={queryLocation}
                checkInDate={queryCheckIn}
                checkOutDate={queryCheckOut}
                totalGuests={totalGuestsNeeded}
              />
              <button
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 h-[44px] sm:h-[52px] rounded-full border border-white/20 bg-zinc-900/80 hover:bg-zinc-800 transition-colors text-white text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg shrink-0"
              >
                <SlidersHorizontal size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:block">Filters</span>
                {activeFilterCount > 0 && (
                  <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white text-black text-[10px] sm:text-xs font-bold leading-none">
                    {activeFilterCount}
                  </div>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="flex w-full h-full pt-[75px] sm:pt-[85px]">
        {/* 🟢 LEFT PANEL: Search Results & List */}
        <div className={`w-full lg:w-[55%] xl:w-[60%] h-full flex flex-col px-4 sm:px-8 lg:px-12 pt-4 relative z-10 bg-black ${viewMode === "map" ? "hidden lg:flex" : "flex"}`}>

          {/* Statistics & Filters Block */}
          <div className="flex flex-col gap-1 mb-4 pb-2 border-b border-white/10 mt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
              <h1 className="text-xl sm:text-2xl font-black capitalize tracking-tight flex items-center gap-3 flex-wrap">
                Stays in {headingLabel}
                {mapBounds && <span className="text-[10px] font-normal text-white/40 uppercase tracking-widest border border-white/10 px-2 py-1 rounded-full">Map Filtered</span>}
              </h1>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-sm self-start sm:self-center">
                <span className="text-base sm:text-lg font-black text-amber-500">{searchResults.length}</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Available</span>
              </div>
            </div>
            <p className="text-white/50 text-[10px] sm:text-xs font-medium tracking-wide">
               {queryCheckIn ? `${formatDisplayDate(queryCheckIn)} to ${formatDisplayDate(queryCheckOut)}` : 'Any dates'} • {queryGuests} Guests
            </p>
          </div>

          <FiltersModal
            isOpen={isFiltersOpen}
            onOpenChange={setIsFiltersOpen}
            currentFilters={filters}
            onApply={(newFilters) => setFilters(newFilters)}
            allHotels={allHotels}
            baseHotels={baseHotelsForFilters}
            queryCheckIn={queryCheckIn}
            queryCheckOut={queryCheckOut}
            totalGuestsNeeded={totalGuestsNeeded}
            queryPets={queryPets}
          />

          {/* 🟢 TOP PAGINATION: Fixed at the top of the list */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between gap-4 py-2 mb-2 border-b border-white/10 shrink-0 bg-black/50 backdrop-blur-sm z-20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Page</span>
                <span className="text-white font-bold">{currentPage}</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50 font-medium">{totalPages}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  isDisabled={currentPage === 1}
                  onPress={() => setCurrentPage(prev => prev - 1)}
                  variant="flat"
                  size="sm"
                  className="bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 h-9"
                >
                  <ChevronLeft size={14} />
                </Button>
                <Button
                  isDisabled={currentPage === totalPages}
                  onPress={() => setCurrentPage(prev => prev + 1)}
                  variant="flat"
                  size="sm"
                  className="bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 h-9"
                >
                  <ChevronRight size={14} />
                </Button>
              </div>
            </div>
          )}

          {/* 🏨 Hotel List - SCROLLABLE PORTION */}
          <div className="flex-1 overflow-y-auto custom-scrollbar grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 w-full pr-4 pb-12 pt-1">
            {isLoadingHotels ? (
              <div className="flex flex-col items-center justify-center p-12 text-center bg-white/5 rounded-3xl border border-white/10 xl:col-span-2 min-h-[400px]">
                <Loader2 size={48} className="text-white/20 mb-4 animate-spin" />
                <h3 className="text-xl font-bold mb-2">Finding Stays...</h3>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 text-center bg-white/5 rounded-3xl border border-white/10 xl:col-span-2 min-h-[400px]">
                <MapPin size={48} className="text-white/20 mb-4" />
                <h3 className="text-xl font-bold mb-2">No exact matches found</h3>
                <p className="text-white/50 text-sm">Pan or Zoom out the map to see more hotels in this area.</p>
              </div>
            ) : (
              paginatedResults.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredHotelId(hotel.id)}
                  onMouseLeave={() => setHoveredHotelId(null)}
                  onClick={() => handleHotelClick(hotel)}
                >
                  <Card className="flex flex-col bg-transparent border-0 overflow-hidden cursor-pointer group rounded-3xl h-full shadow-none hover:shadow-none transition-all">
                    {/* Image */}
                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-[2.5rem] shrink-0 shadow-lg">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${hotel.image})` }}
                      />
                      <button 
                        onClick={(e) => toggleSave(e, hotel.id)}
                        className={`absolute top-5 right-5 active:scale-90 transition-all z-10 drop-shadow-md ${savedHotelIds.has(hotel.id) ? 'text-rose-500' : 'text-white/80 hover:text-rose-400'}`}
                      >
                        <Heart size={22} className={savedHotelIds.has(hotel.id) ? "fill-current" : ""} />
                      </button>
                      {hotel.isSuperhost && (
                        <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                          <span className="text-white text-[10px] font-extrabold uppercase tracking-[0.1em]">Superhost</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col p-2 pt-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest">{hotel.type} in {hotel.city}</span>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-amber-500 fill-amber-500" />
                          <span className="text-xs font-black text-white">{hotel.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-amber-400 transition-colors mb-1">
                        {hotel.name}
                      </h3>
                      <p className="text-white/40 text-[13px] font-medium mb-4">
                        {hotel.bedrooms} BR · {hotel.beds} Bed · {hotel.bathrooms} Bath
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-white">
                            ₹{numNights > 1 ? (hotel.price * numNights).toLocaleString() : hotel.price.toLocaleString()}
                          </span>
                          <span className="text-sm font-medium text-white/40">
                            {numNights > 1 ? 'total' : '/ night'}
                          </span>
                        </div>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(getHotelUrl(hotel.id));
                          }}
                          size="sm"
                          className="bg-white/10 hover:bg-white text-white hover:text-black font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-xl transition-all"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}

          </div>
        </div>

        {/* 🗺️ RIGHT PANEL: Exact Interactive Leaflet Map */}
        <div className={`w-full lg:w-[45%] xl:w-[40%] h-full lg:flex ${viewMode === "list" ? "invisible absolute lg:visible lg:relative" : "flex relative"} p-4 sm:p-6 lg:pl-2 lg:pb-6 lg:pr-6 z-0`}>
          <div className="w-full h-full relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_10px_60px_rgba(0,0,0,0.5)]">
            {/* The Interactive React-Leaflet Map component */}
            <InteractiveMap
              hotels={locationFiltered}
              center={mapCenter}
              zoom={mapZoom}
              userLocation={userLocation}
              hoveredHotelId={hoveredHotelId}
              selectedHotelId={selectedHotelId}
              setHoveredHotelId={setHoveredHotelId}
              queryString={searchParams?.toString() || ""}
              onBoundsChange={handleBoundsChange}
              numNights={numNights}
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  const FallbackUI = (
    <div className="flex h-screen w-full bg-black text-white overflow-hidden relative">
      <div className="fixed top-0 inset-x-0 z-[100] h-[90px] xl:h-[100px] bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-md">
        <div className="flex h-full w-full items-center px-6 relative max-w-[1920px] mx-auto">
          <div className="flex items-center gap-2 text-white/50 z-[110]">
            <ArrowLeft size={16} />
            <span className="text-sm font-semibold uppercase tracking-wider hidden sm:block">Home</span>
          </div>
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <div className="scale-[0.8] xl:scale-95 origin-center flex items-center justify-center animate-pulse">
              <div className="h-16 w-full max-w-4xl xl:min-w-[850px] bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full pt-[90px] xl:pt-[100px] items-center justify-center">
        <span className="tracking-widest text-white/50 uppercase text-sm animate-pulse flex items-center gap-2"><Loader2 size={16} className="animate-spin" /> Loading map...</span>
      </div>
    </div>
  );

  return (
    <Suspense fallback={FallbackUI}>
      <SearchParamsContent />
    </Suspense>
  );
}
