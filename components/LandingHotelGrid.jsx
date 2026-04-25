"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, Button } from "@heroui/react";
import { MapPin, Star, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { useToast } from "./Toast";

export default function LandingHotelGrid() {
  const [sections, setSections] = useState({
    entireHomes: [],
    rooms: []
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useAuthStore();
  const { addToast } = useToast();
  const [savedHotelIds, setSavedHotelIds] = useState(new Set());

  const toggleSave = (e, id) => {
    e.stopPropagation();
    if (!user) {
      addToast("Please login to add hotels to your wishlist", "info");
      router.push("/login");
      return;
    }
    setSavedHotelIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    fetch("/api/hotels/recommended")
      .then((res) => res.json())
      .then((data) => {
        // Filter and sort for Entire Homes
        const entireHomes = data
          .filter(h => h.type_of_place === "Entire home")
          .sort((a, b) => Number(b.rating) - Number(a.rating))
          .slice(0, 4);

        // Filter and sort for Rooms
        const rooms = data
          .filter(h => h.type_of_place === "Room")
          .sort((a, b) => Number(b.rating) - Number(a.rating))
          .slice(0, 4);

        setSections({ entireHomes, rooms });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch hotels:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-black min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse text-white/50 tracking-widest text-sm">LOADING HIDEAWAYS...</div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const renderSection = (title, subtitle, items) => (
    <div className="mb-24 last:mb-0">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-2">{title}</h2>
          <p className="text-white/50 text-sm tracking-widest uppercase">{subtitle}</p>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {items.map((hotel) => (
          <motion.div key={hotel.id} variants={itemVariants}>
            <Card className="relative h-[450px] w-full rounded-[32px] overflow-hidden group cursor-pointer border-0 bg-transparent">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${hotel.images?.[0]})` }}
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Top Rated Badge */}
              {Number(hotel.rating) >= 4.8 && (
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">Guest Favorite</span>
                </div>
              )}

               <button 
                className={`absolute top-6 right-6 z-10 p-2.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 active:scale-90 transition-all ${savedHotelIds.has(hotel.id) ? 'text-rose-500' : 'text-white/80 hover:text-rose-400 hover:scale-110'}`}
                onClick={(e) => toggleSave(e, hotel.id)}
              >
                <Heart size={18} className={savedHotelIds.has(hotel.id) ? "fill-current" : ""} />
              </button>

              {/* Content Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md max-w-[70%]">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-medium">{hotel.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-white/70 text-sm mb-4">
                  <MapPin size={14} />
                  <span>{hotel.city}</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg">
                      ₹{hotel.price?.amount?.toLocaleString()}
                    </span>
                    <span className="text-white/50 text-xs uppercase tracking-wider">
                      per {hotel.price?.period || "night"}
                    </span>
                  </div>
                  <Button 
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all"
                    size="sm"
                    onPress={() => {
                      if (!user) {
                        router.push("/login");
                      } else {
                        router.push(`/user/hotels/${hotel.id}`);
                      }
                    }}
                  >
                    View
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="w-full bg-[#0a0a0a] px-4 sm:px-8 md:px-12 lg:px-24 py-16 md:py-24 min-h-screen">
      {renderSection("Most Rated Entire Homes", "Experience privacy and comfort", sections.entireHomes)}
      {renderSection("Popular Rooms", "Perfect for solo travelers and couples", sections.rooms)}
    </div>
  );
}