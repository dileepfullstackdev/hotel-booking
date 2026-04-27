"use client";

import { useState } from "react";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Users, CreditCard, TicketCheck, X, Compass } from "lucide-react";
import { useToast } from "@/components/Toast";

export default function MyBookings() {
  const { addToast } = useToast();
  // 🔥 Mock bookings (later from backend)
  const [bookings, setBookings] = useState([
    {
      id: 1,
      hotelName: "Sea View Resort",
      city: "Goa",
      checkIn: "2026-04-20",
      checkOut: "2026-04-23",
      guests: 2,
      totalPrice: 7500,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      hotelName: "Hilltop Stay",
      city: "Ooty",
      checkIn: "2026-05-01",
      checkOut: "2026-05-03",
      guests: 1,
      totalPrice: 3600,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  // ❌ Cancel Booking
  const handleCancel = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    setBookings((prev) => prev.filter((b) => b.id !== id));
    addToast("Booking cancelled successfully", "success");
  };

  return (
    <RoleProtectedRoute allowedRoles={["user"]}>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black z-0 font-sans">
        
        {/* Fixed Background Image - Deep Nature Theme */}
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')" }}
        >
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/95" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-32 flex flex-col min-h-screen">
          
          {/* Header Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12 text-center md:text-left"
          >
            <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] font-medium mb-3 uppercase drop-shadow-lg text-white/70 flex items-center justify-center md:justify-start gap-2">
              <Compass size={18} /> YOUR ITINERARY
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tighter drop-shadow-2xl text-white uppercase">
              My <span className="text-white/60">Bookings</span>
            </h1>
          </motion.div>

          {/* ✈️ Booking List */}
          {bookings.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center p-16 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 text-center shadow-2xl"
            >
              <TicketCheck size={64} className="text-white/20 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">No upcoming trips</h3>
              <p className="text-white/50 max-w-sm">You haven't planned any getaways yet. Explore our properties and book your next adventure!</p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-6 pb-24">
              {bookings.map((booking, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  key={booking.id}
                  className="bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden hover:bg-white-[0.15] hover:border-white/40 transition-all group flex flex-col md:flex-row relative"
                >
                  
                  {/* Left Side: Image Banner */}
                  <div className="md:w-1/3 h-56 md:h-auto relative overflow-hidden shrink-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                      style={{ backgroundImage: `url('${booking.image || "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80"}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/80 md:bg-gradient-to-t md:from-black/80 md:to-transparent" />
                    <div className="absolute bottom-4 left-6 md:hidden">
                       <h3 className="text-2xl font-bold text-white drop-shadow-md">{booking.hotelName}</h3>
                       <p className="text-white/80 flex items-center gap-1 text-sm"><MapPin size={14}/>{booking.city}</p>
                    </div>
                  </div>

                  {/* Right Side: Details & Actions */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    
                    {/* Header (Desktop) & Cancel Button */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="hidden md:block">
                        <h3 className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:text-amber-200 transition-colors">
                          {booking.hotelName}
                        </h3>
                        <p className="flex items-center gap-1.5 text-white/60 text-sm font-medium">
                          <MapPin size={16} className="text-amber-400/80" /> {booking.city}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="group/btn flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 hover:border-red-500 transition-all rounded-full px-5 py-2.5 shadow-lg active:scale-95 absolute top-6 right-6 md:relative md:top-0 md:right-0 ml-auto"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider">Cancel</span>
                        <X size={16} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                      </button>
                    </div>

                    <div className="h-[1px] w-full bg-white/10 mb-6 hidden md:block" />

                    {/* Booking Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                      
                      {/* Check-in */}
                      <div className="flex flex-col bg-black/40 p-3 rounded-2xl border border-white/5">
                        <span className="text-white/40 uppercase text-[10px] font-bold tracking-widest mb-1 flex items-center gap-1">
                          <CalendarDays size={12} className="text-amber-400/80" /> Check-in
                        </span>
                        <span className="font-semibold text-sm md:text-base">{new Date(booking.checkIn).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>

                      {/* Check-out */}
                      <div className="flex flex-col bg-black/40 p-3 rounded-2xl border border-white/5">
                        <span className="text-white/40 uppercase text-[10px] font-bold tracking-widest mb-1 flex items-center gap-1">
                          <CalendarDays size={12} className="text-amber-400/80" /> Check-out
                        </span>
                        <span className="font-semibold text-sm md:text-base">{new Date(booking.checkOut).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>

                      {/* Guests */}
                      <div className="flex flex-col bg-black/40 p-3 rounded-2xl border border-white/5">
                        <span className="text-white/40 uppercase text-[10px] font-bold tracking-widest mb-1 flex items-center gap-1">
                          <Users size={12} className="text-amber-400/80" /> Guests
                        </span>
                        <span className="font-semibold text-sm md:text-base">{booking.guests} {booking.guests === 1 ? 'Person' : 'People'}</span>
                      </div>

                      {/* Price */}
                      <div className="flex flex-col bg-amber-500/10 p-3 rounded-2xl border border-amber-500/20">
                        <span className="text-amber-500/70 uppercase text-[10px] font-bold tracking-widest mb-1 flex items-center gap-1">
                          <CreditCard size={12} className="text-amber-400" /> Total Paid
                        </span>
                        <span className="font-bold text-amber-200 text-lg">₹{booking.totalPrice.toLocaleString()}</span>
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