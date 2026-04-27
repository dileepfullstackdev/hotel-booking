"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { Input, Button, Avatar, Card } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Star, Share, Heart, ChevronRight, 
  Wifi, Car, Utensils, Tv, Dumbbell, Waves, 
  Wind, ShieldCheck, DoorOpen, Medal, User,
  CalendarDays, Info, Loader2, ArrowLeft,
  ChevronLeft, X, ChevronDown, CheckCircle2, Plus, Minus
} from "lucide-react";
import { useForm } from "react-hook-form";
import { 
  RangeCalendar, 
  Popover, 
  PopoverTrigger, 
  PopoverContent,
  Calendar
} from "@heroui/react";
import {today, getLocalTimeZone, parseDate, isSameDay} from "@internationalized/date";
import { useToast } from "@/components/Toast";

const amenityIcons = {
  wifi: <Wifi size={20} />,
  parking: <Car size={20} />,
  kitchen: <Utensils size={20} />,
  tv: <Tv size={20} />,
  gym: <Dumbbell size={20} />,
  pool: <Waves size={20} />,
  ac: <Wind size={20} />,
  washer: <Wind size={20} />, // Fallback icon
  iron: <Wind size={20} />, // Fallback icon
  hairdryer: <Wind size={20} />, // Fallback icon
  bathroom: <DoorOpen size={20} />,
};

export default function HotelDetails() {
  const { addToast } = useToast();
  const { id } = useParams();
  const router = useRouter();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedRange, setSelectedRange] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // 🔄 Fetch hotel data
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/hotels/recommended");
        const data = await response.json();
        const foundHotel = data.find((h) => h.id === id);
        
        if (foundHotel) {
          setHotel({
            ...foundHotel,
            priceAmount: typeof foundHotel.price === 'object' ? foundHotel.price.amount : foundHotel.price,
            mainImage: foundHotel.images?.[0] || foundHotel.image,
            gallery: foundHotel.gallery || { "Photos": foundHotel.images || [foundHotel.image] },
            displayImages: foundHotel.images?.length > 1 ? foundHotel.images : [
              foundHotel.images?.[0] || foundHotel.image,
              "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
              "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200",
              "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200"
            ]
          });
        }
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchHotelData();
  }, [id]);

  // 🔄 Scroll Spy for Photo Tour
  useEffect(() => {
    if (!isPhotoTourOpen || !hotel) return;

    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.id.split('-').pop());
          if (!isNaN(index)) {
            setActivePhotoIndex(index);
          }
        }
      });
    }, options);

    const groups = document.querySelectorAll('[id^="gallery-group-"]');
    groups.forEach((group) => observer.observe(group));

    return () => observer.disconnect();
  }, [isPhotoTourOpen, hotel]);

  // 🧠 Form Setup
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: { guests: 1, checkIn: "", checkOut: "" }
  });

  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [guestCounts, setGuestCounts] = useState({ adults: 1, children: 0, infants: 0, pets: 0 });

  const updateGuests = (type, change) => {
    setGuestCounts(prev => {
      const newVal = Math.max(0, prev[type] + change);
      const newCounts = { ...prev, [type]: newVal };
      
      // Update the react-hook-form value for total guests (usually adults + children)
      setValue("guests", newCounts.adults + newCounts.children);
      
      return newCounts;
    });
  };

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDayClick = (date) => {
    if (isDateBooked(date)) return;
    
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    
    if (!checkIn || (checkIn && checkOut)) {
      setValue("checkIn", dateStr);
      setValue("checkOut", "");
    } else {
      const start = new Date(checkIn);
      if (date < start) {
        setValue("checkIn", dateStr);
        setValue("checkOut", "");
      } else {
        // 🔒 Range Validation: Check if any date between start and end is booked
        let temp = new Date(start);
        let rangeHasBlockedDate = false;
        
        while (temp <= date) {
          const tempStr = `${temp.getFullYear()}-${String(temp.getMonth() + 1).padStart(2, '0')}-${String(temp.getDate()).padStart(2, '0')}`;
          if (hotel?.unavailableDates?.includes(tempStr)) {
            rangeHasBlockedDate = true;
            break;
          }
          temp.setDate(temp.getDate() + 1);
        }

        if (rangeHasBlockedDate) {
          addToast("Your selection includes already booked dates. Please select a different range.", "error");
          return;
        }

        setValue("checkOut", dateStr);
      }
    }
  };

  const isDateBooked = (date) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    if (date < today) return true;
    
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    if (hotel?.unavailableDates?.includes(dateStr)) return true;
    
    return false;
  };

  const isSelected = (date) => {
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return dateStr === checkIn || dateStr === checkOut;
  };

  const isInRange = (date) => {
    if (!checkIn || !checkOut) return false;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return date > start && date < end;
  };

  const renderCalendarMonth = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
    
    return (
      <div className="w-[280px]">
        <h4 className="text-center font-bold text-white mb-4 tracking-wide text-sm">
          {monthNames[month]} {year}
        </h4>
        <div className="grid grid-cols-7 text-center mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
            <span key={d} className="text-[10px] font-black text-zinc-600 uppercase">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {days.map((day, i) => {
            if (!day) return <div key={i} />;
            
            const dateStr = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
            const booked = isDateBooked(day);
            const isStart = dateStr === checkIn;
            const isEnd = dateStr === checkOut;
            const selected = isStart || isEnd;
            const inRange = isInRange(day);
            
            return (
              <div key={i} className={`relative h-10 flex items-center justify-center`}>
                <button
                  type="button"
                  onClick={() => handleDayClick(day)}
                  disabled={booked}
                  className={`
                    h-8 w-8 relative flex items-center justify-center text-[12px] transition-all z-10
                    ${booked ? "text-zinc-800 cursor-not-allowed line-through font-normal" : "text-white hover:bg-white/10 font-bold"}
                    ${selected ? "bg-white !text-black rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" : ""}
                    ${!selected && inRange ? "text-white" : ""}
                  `}
                >
                  {day.getDate()}
                </button>
                {/* Visual Connector for range */}
                {inRange && (
                   <div className="absolute inset-0 bg-zinc-800 border-y border-white/5 -z-0" />
                )}
                {isStart && checkOut && (
                   <div className="absolute right-0 top-0 bottom-0 left-1/2 bg-zinc-800 border-y border-white/5 -z-0" />
                )}
                {isEnd && (
                   <div className="absolute left-0 top-0 bottom-0 right-1/2 bg-zinc-800 border-y border-white/5 -z-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");

  const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? Math.round(diff) : 0;
  };

  const nights = getNights();
  const totalPrice = nights * (hotel?.priceAmount || 0);

  const onSubmit = (data) => {
    const params = new URLSearchParams({
      hotelId: hotel.id,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      adults: guestCounts.adults,
      children: guestCounts.children,
      infants: guestCounts.infants,
      pets: guestCounts.pets
    });
    router.push(`/user/checkout?${params.toString()}`);
  };

  return (
    <RoleProtectedRoute allowedRoles={["user", "admin", "owner"]}>
      {loading ? (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center">
          <Loader2 className="animate-spin text-zinc-800 mb-4" size={48} />
          <p className="text-zinc-500 font-medium tracking-tight">Loading property details...</p>
        </div>
      ) : !hotel ? (
        <div className="p-24 text-center text-white bg-[#050505] min-h-screen">Hotel not found</div>
      ) : (
        <div className="bg-[#050505] min-h-screen pt-24 pb-12 font-sans text-white">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Header Actions */}
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={() => router.push("/search")}
                className="flex items-center gap-1 text-zinc-400 hover:bg-white/10 p-2 rounded-lg transition-colors text-sm font-semibold"
              >
                <ChevronLeft size={18} /> Back to Search
              </button>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors text-sm font-semibold underline underline-offset-4">
                  <Share size={16} /> Share
                </button>
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors text-sm font-semibold underline underline-offset-4"
                >
                  <Heart size={16} className={isSaved ? "fill-rose-500 text-rose-500" : ""} /> {isSaved ? "Saved" : "Save"}
                </button>
              </div>
            </div>

          <h1 className="text-2xl sm:text-[1.75rem] font-bold text-white mb-6 leading-tight tracking-tight">
            {hotel.name}
          </h1>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[300px] sm:h-[450px] rounded-2xl overflow-hidden mb-8 sm:mb-12 relative cursor-pointer group border border-white/5">
            <div 
              onClick={() => { setActivePhotoIndex(0); setIsPhotoTourOpen(true); }}
              className="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden"
            >
              <img src={hotel.displayImages[0]} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75" alt="Main" />
            </div>
            {hotel.displayImages.slice(1, 5).map((img, i) => (
              <div 
                key={i} 
                onClick={() => { setActivePhotoIndex(i + 1); setIsPhotoTourOpen(true); }}
                className={`hidden sm:block relative overflow-hidden ${i === 1 ? 'border-l border-white/5' : ''} ${i >= 2 ? 'border-t border-white/5' : ''}`}
              >
                <img src={img} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75" alt={`Img ${i + 1}`} />
              </div>
            ))}
            <button 
              onClick={() => setIsPhotoTourOpen(true)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-black/80 shadow-2xl transition-all z-10"
            >
              Show all photos
            </button>
          </div>

          <AnimatePresence>
            {isPhotoTourOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] bg-[#050505] overflow-y-auto"
              >
                {/* Header & Main Layout */}
                <div className="flex flex-col h-full uppercase tracking-tighter">
                  
                  {/* Global Toolbar (Top) */}
                  <div className="sticky top-0 bg-[#050505] z-[220] px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center border-b border-white/5">
                    <button 
                      onClick={() => setIsPhotoTourOpen(false)}
                      className="p-2 sm:p-3 hover:bg-white/10 rounded-full transition-all border border-white/10 flex items-center gap-2 group"
                    >
                      <ChevronLeft size={20} className="sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-[10px] sm:text-xs font-black">Exit Tour</span>
                    </button>
                    <h2 className="text-xs font-black opacity-40">Property Walkthrough</h2>
                  </div>

                  <div className="flex flex-1 relative overflow-hidden">
                    
                    {/* 🧭 Vertical Left Navigation (Master) - Hidden on Mobile */}
                    <div className="hidden lg:block w-[350px] sticky top-[80px] h-[calc(100vh-80px)] border-r border-white/5 bg-[#050505] p-10 overflow-y-auto no-scrollbar">
                      <div className="space-y-4">
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-8">Room categories</p>
                        {Object.entries(hotel.gallery).map(([category, imgs], idx) => (
                          <button 
                            key={category} 
                            onClick={() => {
                              setActivePhotoIndex(idx);
                              document.getElementById(`gallery-group-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full text-left p-5 rounded-2xl transition-all flex items-center gap-4 group ${activePhotoIndex === idx ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'}`}
                          >
                            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                               <img src={imgs[0]} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                               <p className={`text-sm font-black transition-colors ${activePhotoIndex === idx ? 'text-white' : 'text-zinc-500'}`}>
                                 {category}
                               </p>
                               <p className="text-[10px] opacity-40 font-bold">{imgs.length} photos</p>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Secured Brand Footer */}
                      <div className="mt-12 pt-8 border-t border-white/5 opacity-20">
                         <div className="flex items-center gap-2">
                           <ShieldCheck size={14} />
                           <span className="text-[10px] font-black uppercase">Standard Verified</span>
                         </div>
                      </div>
                    </div>

                    {/* 🖼️ Right Content (Detail Feed) */}
                    <div className="flex-1 overflow-y-auto bg-[#050505] p-6 sm:p-16 pb-32">
                      <div className="max-w-4xl mx-auto space-y-24 sm:space-y-40">
                        {Object.entries(hotel.gallery).map(([category, imgs], groupIdx) => (
                          <div key={category} id={`gallery-group-${groupIdx}`} className="space-y-8 sm:space-y-12">
                            <div className="space-y-2 sm:space-y-4">
                               <p className="text-xs font-black text-white/40 uppercase tracking-widest">{groupIdx + 1} / {Object.keys(hotel.gallery).length}</p>
                               <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tighter">
                                 {category}
                               </h3>
                            </div>
                            <div className="space-y-12 sm:space-y-20">
                              {imgs.map((img, imgIdx) => (
                                <motion.div 
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, margin: "-100px" }}
                                  key={imgIdx} 
                                  className="w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-white/[0.02] p-2 sm:p-4 group"
                                >
                                  <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem]">
                                    <img 
                                      src={img} 
                                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" 
                                      alt={`${category} perspective ${imgIdx + 1}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 sm:p-10 flex items-end">
                                       <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">{category} — Detail view {imgIdx + 1}</span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
            
            {/* 📝 Left Content (70%) */}
            <div className="flex-1 w-full lg:max-w-[60%]">
              
              <div className="flex justify-between items-start mb-2 group cursor-pointer hover:bg-white/5 -mx-4 px-4 py-2 rounded-xl transition-colors">
                <div className="flex gap-4 items-center">
                  <Avatar 
                    src={hotel.host.avatar} 
                    className="w-14 h-14 ring-2 ring-white/10 shadow-xl shrink-0" 
                    name={hotel.host.name}
                  />
                  <div>
                    <h2 className="text-[17px] font-bold text-white">
                      Hosted by {hotel.host.name}
                    </h2>
                    <p className="text-zinc-500 text-sm">
                      {(() => {
                        const months = Math.floor((new Date() - new Date(hotel.host.joinedDate)) / (1000 * 60 * 60 * 24 * 30));
                        if (months >= 12) {
                          const years = Math.floor(months / 12);
                          return `${years} year${years > 1 ? 's' : ''} hosting`;
                        }
                        return `${months} month${months > 1 ? 's' : ''} hosting`;
                      })()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/10 my-8" />

              {/* Highlights Section (Mirroring Screenshot) */}
              <div className="flex flex-col gap-8 mb-8">
                <div className="flex gap-5">
                  <DoorOpen size={28} className="text-white mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-[16px]">Self check-in</h4>
                    <p className="text-zinc-500 text-[15px] mt-0.5 leading-snug font-medium">You can check in with the building staff.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-7 h-7 border-2 border-white rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[14px] font-black leading-none">P</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[16px]">Park for free</h4>
                    <p className="text-zinc-500 text-[15px] mt-0.5 leading-snug font-medium">This is one of the few places in the area with free parking.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0 mt-1">
                     <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[16px]">Exceptional host communication</h4>
                    <p className="text-zinc-500 text-[15px] mt-0.5 leading-snug font-medium">Recent guests gave {hotel.host.name} a 5-star rating for communication.</p>
                  </div>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/10 my-8" />

              {/* Description */}
              <div className="mb-8">
                <p className="text-zinc-300 leading-relaxed text-[16px] whitespace-pre-line font-light">
                  {hotel.description}
                </p>
                <button className="flex items-center gap-1 font-bold mt-6 underline underline-offset-4 text-white hover:text-zinc-300 transition-colors">
                  Show more <ChevronRight size={18} />
                </button>
              </div>

              <div className="h-[1px] w-full bg-white/10 my-8" />

              {/* Amenities */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-white">What this place offers</h3>
                <div className="grid grid-cols-2 gap-y-4">
                  {hotel.amenities.map(amenity => (
                    <div key={amenity.id} className="flex items-center gap-4 text-zinc-400 py-1">
                      <span className="text-zinc-300">{amenityIcons[amenity.id] || <Info size={20} />}</span>
                      <span className="text-[15px] font-medium">{amenity.name}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-sm tracking-wide">
                  Show all {hotel.amenities.length} amenities
                </button>
              </div>

            </div>

            {/* 💰 Right Column: Sticky Booking Widget (30%) */}
            <div className="lg:w-[380px] shrink-0">
              <div className="sticky top-28 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 shadow-2xl w-full">
                
                {/* Conditional Header */}
                <div className="mb-8">
                  {nights > 0 ? (
                    <div className="flex justify-between items-baseline">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-white">₹{hotel.priceAmount.toLocaleString()}</span>
                        <span className="text-zinc-500 text-sm font-medium">night</span>
                      </div>
                      <div className="flex items-center gap-1 text-[13px] font-bold text-zinc-300">
                        <Star size={14} className="fill-amber-400 text-amber-400" /> {hotel.rating} · <span className="text-zinc-500 font-medium">{hotel.reviewCount} reviews</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Add dates for prices</h2>
                      <div className="flex items-center gap-1 text-[13px] font-bold text-zinc-300 mt-2">
                        <Star size={14} className="fill-amber-400 text-amber-400" /> {hotel.rating} · <span className="text-zinc-500 font-medium">{hotel.reviewCount} reviews</span>
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Advanced Date Range Picker - Custom Component for guaranteed visibility */}
                  <div 
                    onClick={() => setIsCalendarOpen(true)}
                    className="w-full border border-white/20 bg-white/5 rounded-2xl overflow-hidden shadow-inner cursor-pointer hover:border-white/40 transition-all"
                  >
                    <div className="grid grid-cols-2 border-b border-white/10">
                      <div className="p-4 border-r border-white/10 transition-colors group">
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-widest group-hover:text-white transition-colors">Check-in</label>
                        <div className={`text-[15px] mt-1 ${checkIn ? 'text-white' : 'text-zinc-500 font-medium'}`}>
                          {checkIn || "Add date"}
                        </div>
                      </div>
                      <div className="p-4 transition-colors group">
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-widest group-hover:text-white transition-colors">Checkout</label>
                        <div className={`text-[15px] mt-1 ${checkOut ? 'text-white' : 'text-zinc-500 font-medium'}`}>
                          {checkOut || "Add date"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Modal */}
                  <AnimatePresence>
                    {isCalendarOpen && (
                      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setIsCalendarOpen(false)}
                          className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />
                          <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#111111] p-8 rounded-[2.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative z-50 w-full max-w-[760px] flex flex-col"
                          >
                            <div className="flex justify-between items-start mb-8">
                              <div>
                                <h3 className="text-2xl font-black text-white mb-1 tracking-tighter">Select dates</h3>
                                <p className="text-zinc-500 text-sm font-medium">Add your travel dates for exact pricing</p>
                              </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 flex flex-col min-w-[120px]">
                                  <span className="text-[10px] uppercase font-black text-zinc-500 tracking-tighter mb-0.5">Check-in</span>
                                  <span className="text-white font-mono text-sm font-bold">{checkIn || "----/--/--"}</span>
                                </div>
                                <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 flex flex-col min-w-[120px]">
                                  <span className="text-[10px] uppercase font-black text-zinc-500 tracking-tighter mb-0.5">Checkout</span>
                                  <span className="text-white font-mono text-sm font-bold">{checkOut || "----/--/--"}</span>
                                </div>
                               <button 
                                  onClick={() => setIsCalendarOpen(false)}
                                  className="ml-4 p-3 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-all bg-white/5"
                               >
                                 <X size={24} />
                               </button>
                            </div>
                          </div>
                          
                          <div className="flex-1 flex flex-col relative py-4">
                             {/* Top Navigation Arrows */}
                             <div className="absolute top-0 left-0 right-0 flex justify-between items-center z-10 pointer-events-none">
                                <button 
                                  type="button" 
                                  disabled={currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear()}
                                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all pointer-events-auto shadow-sm"
                                >
                                  <ChevronLeft size={20} className="text-white" />
                                </button>
                                <button 
                                  type="button" 
                                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all pointer-events-auto shadow-sm"
                                >
                                  <ChevronRight size={20} className="text-white" />
                                </button>
                             </div>

                             <div className="flex justify-between gap-12">
                                {renderCalendarMonth(currentMonth)}
                                {renderCalendarMonth(nextMonth)}
                             </div>
                                            <div className="flex justify-between items-center mt-8 border-t border-white/10 pt-8">
                             <button 
                               type="button"
                               className="text-white text-sm font-bold underline underline-offset-8 hover:text-zinc-300 transition-colors"
                               onClick={() => {
                                 setValue("checkIn", "");
                                 setValue("checkOut", "");
                               }}
                             >
                               Clear dates
                             </button>
                             
                             <button 
                               type="button"
                               className="bg-white text-black font-black px-12 py-3.5 rounded-xl text-md transition-all hover:scale-[1.03] active:scale-95 shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
                               onClick={() => setIsCalendarOpen(false)}
                             >
                               Close
                             </button>
                           </div>             </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Sophisticated Guest Picker */}
                  <div className="relative">
                    <div 
                      onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
                      className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden shadow-inner p-4 hover:bg-white/10 cursor-pointer transition-all group"
                    >
                      <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-widest group-hover:text-white transition-colors">Guests</label>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-[15px] font-bold text-white">
                          {guestCounts.adults + guestCounts.children} guest{guestCounts.adults + guestCounts.children > 1 ? 's' : ''}
                          {guestCounts.infants > 0 && `, ${guestCounts.infants} infant${guestCounts.infants > 1 ? 's' : ''}`}
                          {guestCounts.pets > 0 && `, ${guestCounts.pets} pet${guestCounts.pets > 1 ? 's' : ''}`}
                        </div>
                        <ChevronDown size={18} className={`text-zinc-500 transition-transform ${isGuestPickerOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isGuestPickerOpen && (
                        <>
                          <div className="fixed inset-0 z-[40]" onClick={() => setIsGuestPickerOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 text-white"
                          >
                            <div className="space-y-6">
                              {/* Adults */}
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-bold">Adults</div>
                                  <div className="text-zinc-500 text-xs">Age 13+</div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('adults', -1)} 
                                    disabled={guestCounts.adults <= 1}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="w-4 text-center font-bold">{guestCounts.adults}</span>
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('adults', 1)} 
                                    disabled={guestCounts.adults + guestCounts.children >= hotel.max_guests}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>
                              </div>

                              {/* Children */}
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-bold">Children</div>
                                  <div className="text-zinc-500 text-xs">Ages 2–12</div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('children', -1)} 
                                    disabled={guestCounts.children <= 0}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="w-4 text-center font-bold">{guestCounts.children}</span>
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('children', 1)} 
                                    disabled={guestCounts.adults + guestCounts.children >= hotel.max_guests}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>
                              </div>

                              {/* Infants */}
                              <div className="flex justify-between items-center text-white">
                                <div>
                                  <div className="font-bold">Infants</div>
                                  <div className="text-zinc-500 text-xs text-zinc-500">Under 2</div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('infants', -1)} 
                                    disabled={guestCounts.infants <= 0}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="w-4 text-center font-bold">{guestCounts.infants}</span>
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('infants', 1)} 
                                    disabled={guestCounts.infants >= 5}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>
                              </div>

                              {/* Pets */}
                              <div className="flex justify-between items-center text-white">
                                <div>
                                  <div className="font-bold">Pets</div>
                                  <div className="text-zinc-500 text-xs underline underline-offset-2">Bringing a service animal?</div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('pets', -1)} 
                                    disabled={guestCounts.pets <= 0}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="w-4 text-center font-bold">{guestCounts.pets}</span>
                                  <button 
                                    type="button"
                                    onClick={() => updateGuests('pets', 1)} 
                                    disabled={!hotel.pet_friendly || guestCounts.pets >= 2}
                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 hover:bg-white/5"
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                              <p className="text-[13px] text-zinc-400 leading-relaxed">
                                This place has a maximum of {hotel.max_guests} guests, not including infants. {hotel.pet_friendly ? 'Pets are welcome!' : "Pets aren't allowed."}
                              </p>
                              <div className="flex justify-end mt-4">
                                <button 
                                  type="button" 
                                  onClick={() => setIsGuestPickerOpen(false)}
                                  className="text-white font-bold text-sm underline underline-offset-4 hover:text-zinc-300"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    type="submit"
                    className={`w-full font-black py-7 h-auto rounded-2xl text-lg transition-all active:scale-95 shadow-lg ${
                      nights > 0 
                      ? "bg-white text-black hover:scale-[1.02]" 
                      : "bg-[#E51D4F] text-white hover:bg-[#D1113F]"
                    }`}
                  >
                    {nights > 0 ? "Reserve" : "Check availability"}
                  </Button>
                </form>

                <p className="text-center text-zinc-500 text-xs mt-5 font-medium uppercase tracking-widest">You won't be charged yet</p>

                {nights > 0 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-4">
                    <div className="flex justify-between text-zinc-400 font-medium">
                      <span className="underline underline-offset-4 decoration-zinc-700">₹{hotel.priceAmount.toLocaleString()} x {nights} nights</span>
                      <span className="text-white">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="h-[1px] w-full bg-white/10 my-4" />
                    <div className="flex justify-between font-black text-xl text-white">
                      <span>Total</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

          </div>

          <div className="h-[1px] w-full bg-white/10 my-16" />

          {/* Location Section */}
          <div className="mb-20">
             <h3 className="text-2xl font-bold mb-2 text-white tracking-tight">Where you'll be</h3>
             <p className="text-zinc-500 font-medium mb-10">{hotel.city}, {hotel.address}</p>
             
             <div className="w-full h-[480px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }} 
                  loading="lazy" 
                  allowFullScreen 
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${hotel.coordinates.lat},${hotel.coordinates.lng}&z=14&output=embed`}
                />
                
                {/* Map Overlay for brand consistency */}
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[3rem]" />
             </div>
             
             <div className="mt-8 flex flex-col gap-6">
                <div className="flex justify-between items-start gap-8">
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg">{hotel.city}, India</h4>
                    <p className="text-zinc-500 text-[15px] max-w-2xl leading-relaxed mt-2">
                      Located in the heart of {hotel.city}, this property offers the perfect balance of serenity and accessibility. 
                      Explore local attractions, hidden cafes, and the vibrant culture of the neighborhood just minutes away.
                    </p>
                  </div>
                  <Button 
                    onClick={() => {
                      if ("geolocation" in navigator) {
                        navigator.geolocation.getCurrentPosition((position) => {
                          const { latitude, longitude } = position.coords;
                          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${hotel.coordinates.lat},${hotel.coordinates.lng}&travelmode=driving`;
                          window.open(url, '_blank');
                        }, (error) => {
                          const url = `https://www.google.com/maps/dir/?api=1&destination=${hotel.coordinates.lat},${hotel.coordinates.lng}&travelmode=driving`;
                          window.open(url, '_blank');
                        });
                      } else {
                        const url = `https://www.google.com/maps/dir/?api=1&destination=${hotel.coordinates.lat},${hotel.coordinates.lng}&travelmode=driving`;
                        window.open(url, '_blank');
                      }
                    }}
                    className="bg-white text-black font-black px-8 py-6 h-auto rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-xl shrink-0"
                  >
                    <MapPin size={20} />
                    Get directions
                  </Button>
                </div>
                
                <button className="flex items-center gap-1 font-bold underline underline-offset-4 text-white hover:text-zinc-300 transition-colors bg-white/5 w-fit px-4 py-2 rounded-xl text-sm">
                   Show more <ChevronRight size={18} />
                </button>
             </div>
          </div>

          <div className="h-[1px] w-full bg-white/10 my-16" />

          {/* Reviews Section Preview */}
          <div className="mb-20">
             <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
               <Star size={24} className="fill-amber-400 text-amber-400" /> {hotel.rating} · {hotel.reviewCount} reviews
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {[
                  { name: "Ayan Shabbir", date: "April 2024", text: "This place is such a dream cozy place. You can see the lake from the window. The area is very peaceful and well maintained. Highly recommended for long stays.", avatar: "A" },
                  { name: "Roshedh", date: "March 2024", text: "The stay was quiet, peaceful, and had a very pleasant overall environment—perfect for a relaxing weekend. The room was clean and exactly as pictured. Host was very responsive.", avatar: "R" }
                ].map((review, i) => (
                  <div key={i} className="flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                      <Avatar name={review.avatar} className="bg-white/10 text-white ring-1 ring-white/20" />
                      <div>
                        <h5 className="font-bold text-[16px] text-white">{review.name}</h5>
                        <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-[1.7] font-light">
                      {review.text}
                    </p>
                  </div>
                ))}
             </div>
             <button className="mt-10 border border-zinc-900 text-zinc-900 font-bold px-6 py-3 rounded-lg hover:bg-zinc-50 transition-colors">
                Show all {hotel.reviewCount} reviews
              </button>
           </div>
 
         </div>
       </div>
       )}
     </RoleProtectedRoute>
   );
 }