"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { motion } from "framer-motion";
import { MapPin, Search, Wifi, Car, Fan, Compass } from "lucide-react";

export default function HotelsPage() {
  // 🔥 Mock data (later from backend)
  const [hotels] = useState([
    {
      id: 1,
      name: "Sea View Resort",
      city: "Goa",
      price: 2500,
      amenities: { ac: true, wifi: true, parking: false },
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Hilltop Stay",
      city: "Ooty",
      price: 1800,
      amenities: { ac: false, wifi: true, parking: true },
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "City Comfort",
      city: "Bangalore",
      price: 2200,
      amenities: { ac: true, wifi: false, parking: true },
      image: "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=800&q=80"
    },
  ]);
  const router = useRouter();
  const [filters, setFilters] = useState({
    ac: false,
    wifi: false,
    parking: false,
  });

  const [search, setSearch] = useState("");

  // 🔍 Filter Logic
  const filteredHotels = hotels.filter((hotel) => {
    const matchCity = hotel.city
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchAmenities =
      (!filters.ac || hotel.amenities.ac) &&
      (!filters.wifi || hotel.amenities.wifi) &&
      (!filters.parking || hotel.amenities.parking);

    return matchCity && matchAmenities;
  });

  return (
    <RoleProtectedRoute allowedRoles={["user"]}>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black z-0 font-sans">
        
        {/* Fixed Background Image - High Quality Nature Theme */}
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/95" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col min-h-screen">
          
          {/* Header Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center md:text-left"
          >
            <p className="text-sm md:text-base tracking-[0.2em] font-medium mb-3 uppercase drop-shadow-lg text-white/70 flex items-center justify-center md:justify-start gap-2">
              <Compass size={18} /> FIND YOUR GETAWAY
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter drop-shadow-2xl text-white uppercase">
              Explore <span className="text-white/60">Stays</span>
            </h1>
          </motion.div>

          {/* 🔍 Glassmorphic Search + Filters Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-4 bg-white/10 backdrop-blur-2xl p-4 md:p-6 rounded-3xl border border-white/20 shadow-2xl mb-12"
          >
            {/* Search Input */}
            <div className="relative w-full lg:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="Where do you want to stay? (e.g. Goa, Ooty)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/40 border border-white/10 hover:border-white/30 focus:border-white/50 focus:bg-white/10 transition-all text-white placeholder:text-white/40 rounded-2xl h-14 pl-12 pr-4 outline-none font-medium"
              />
            </div>

            <div className="h-[1px] w-full lg:h-10 lg:w-[1px] bg-white/10 my-2 lg:my-0 lg:mx-2" />

            {/* Pill Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-widest mr-2 hidden md:block">Filters:</span>
              
              <button 
                onClick={() => setFilters({ ...filters, ac: !filters.ac })}
                className={`px-5 py-3 rounded-2xl flex items-center gap-2 border text-sm font-semibold transition-all active:scale-95 ${
                  filters.ac 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-black/40 text-white/70 border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <Fan size={16} className={filters.ac ? "text-black" : "text-white/50"} /> AC
              </button>

              <button 
                onClick={() => setFilters({ ...filters, wifi: !filters.wifi })}
                className={`px-5 py-3 rounded-2xl flex items-center gap-2 border text-sm font-semibold transition-all active:scale-95 ${
                  filters.wifi 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-black/40 text-white/70 border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <Wifi size={16} className={filters.wifi ? "text-black" : "text-white/50"} /> WiFi
              </button>

              <button 
                onClick={() => setFilters({ ...filters, parking: !filters.parking })}
                className={`px-5 py-3 rounded-2xl flex items-center gap-2 border text-sm font-semibold transition-all active:scale-95 ${
                  filters.parking 
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-black/40 text-white/70 border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <Car size={16} className={filters.parking ? "text-black" : "text-white/50"} /> Parking
              </button>
            </div>
          </motion.div>

          {/* 🏨 Hotel List */}
          {filteredHotels.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center"
            >
              <Search size={48} className="text-white/20 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No properties found</h3>
              <p className="text-white/50 max-w-sm">Try adjusting your search criteria or removing some filters to find available hideaways.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
              {filteredHotels.map((hotel, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  key={hotel.id}
                  className="bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden hover:bg-white/20 hover:border-white/40 transition-all cursor-pointer group flex flex-col"
                  onClick={() => router.push(`/user/hotels/${hotel.id}`)}
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative h-56 w-full bg-gray-900 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 ease-out" 
                      style={{ backgroundImage: `url('${hotel.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
                      <p className="text-white font-bold tracking-wider">
                        ₹{hotel.price} <span className="text-xs font-normal text-white/70">/ night</span>
                      </p>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="flex items-center gap-2 text-white/60 text-sm mb-6 font-medium">
                      <MapPin size={16} className="text-blue-400" /> {hotel.city}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="h-[1px] w-full bg-white/10 mb-4" />
                      {/* Amenities Icons */}
                      <div className="flex flex-wrap gap-4 text-white/80">
                        {hotel.amenities.ac && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                            <Fan size={14} className="text-white/50" /> AC
                          </div>
                        )}
                        {hotel.amenities.wifi && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                            <Wifi size={14} className="text-white/50" /> WiFi
                          </div>
                        )}
                        {hotel.amenities.parking && (
                          <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                            <Car size={14} className="text-white/50" /> Parking
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </RoleProtectedRoute>
  );
}