"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { Search, MapPin, Map, Loader2, Minus, Plus, ChevronLeft, ChevronRight, Info, X, Calendar as CalendarIcon, Users, SlidersHorizontal } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "./Toast";

export default function SearchBar({ className = "", isCompact = false, locationLabelOverride = "" }) {
  const router = useRouter();
  const searchParamsRef = useSearchParams();
  const { addToast } = useToast();

  const [location, setLocation] = useState("");
  const [lastValidLocation, setLastValidLocation] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locations, setLocations] = useState([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);

  // Guests State
  const [adults, setAdults] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const totalGuests = adults + childrenCount;

  // Real Calendar State
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [isDatesOpen, setIsDatesOpen] = useState(false);

  // Month navigation
  const [currentMonthRef, setCurrentMonthRef] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  // Mobile Search State
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onOpenChange = (open) => setIsOpen(open);
  const [mobileStep, setMobileStep] = useState("where"); // 'where', 'dates', 'guests'
  const searchInputRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  // Pre-fill state from URL if it exists
  useEffect(() => {
    if (searchParamsRef) {
      const loc = searchParamsRef.get("location");
      if (loc) {
        setLocation(loc);
        setLastValidLocation(loc);
      }
      if (searchParamsRef.get("checkin")) setCheckInDate(new Date(searchParamsRef.get("checkin")));
      if (searchParamsRef.get("checkout")) setCheckOutDate(new Date(searchParamsRef.get("checkout")));
      if (searchParamsRef.get("guests")) {
        if (searchParamsRef.has("adults") || searchParamsRef.has("children") || searchParamsRef.has("infants") || searchParamsRef.has("pets")) {
          if (searchParamsRef.get("adults")) setAdults(parseInt(searchParamsRef.get("adults")));
          if (searchParamsRef.get("children")) setChildrenCount(parseInt(searchParamsRef.get("children")));
          if (searchParamsRef.get("infants")) setInfants(parseInt(searchParamsRef.get("infants")));
          if (searchParamsRef.get("pets")) setPets(parseInt(searchParamsRef.get("pets")));
        } else {
          const guests = parseInt(searchParamsRef.get("guests") || "1");
          setAdults(guests);
        }
      }
    }
  }, [searchParamsRef]);

  useEffect(() => {
    if (locationLabelOverride) {
      setLocation(locationLabelOverride);
      setLastValidLocation(locationLabelOverride);
    } else if (searchParamsRef && searchParamsRef.get("location")) {
      // If override is cleared, fallback to URL location
      const loc = searchParamsRef.get("location");
      setLocation(loc);
      setLastValidLocation(loc);
    }
  }, [locationLabelOverride, searchParamsRef]);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/hotels/recommended")
      .then((response) => response.json())
      .then((hotels) => {
        if (!isMounted || !Array.isArray(hotels)) return;

        const cityOptions = Array.from(
          new Set(
            hotels
              .map((hotel) => hotel?.city?.trim())
              .filter(Boolean)
          )
        ).sort((a, b) => a.localeCompare(b));

        setLocations(["Nearby", ...cityOptions]);
        setIsLoadingLocations(false);
      })
      .catch((error) => {
        console.error("Failed to load destinations for search", error);
        setIsLoadingLocations(false);
      });

    setHasMounted(true);
    return () => {
      isMounted = false;
      setHasMounted(false);
    };
  }, []);

  const nextMonthRef = new Date(currentMonthRef.getFullYear(), currentMonthRef.getMonth() + 1, 1);

  const prevMonth = () => setCurrentMonthRef(new Date(currentMonthRef.getFullYear(), currentMonthRef.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonthRef(new Date(currentMonthRef.getFullYear(), currentMonthRef.getMonth() + 1, 1));

  const getMonthData = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const dObj = new Date(year, month, d);
      dObj.setHours(0, 0, 0, 0);
      days.push({ date: dObj, day: d, isPast: dObj < today });
    }
    return { name: dateObj.toLocaleString('default', { month: 'long' }), year, days };
  };

  const handleDateClick = (item) => {
    if (!item || item.isPast) return;
    const d = item.date;

    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(d);
      setCheckOutDate(null);
    } else if (checkInDate && !checkOutDate) {
      if (d > checkInDate) {
        setCheckOutDate(d);
        if (isOpen) {
          setTimeout(() => setMobileStep("guests"), 300);
        } else {
          setTimeout(() => setIsDatesOpen(false), 400); // auto-close UX
        }
      } else {
        setCheckInDate(d);
      }
    }
  };

  const isSelected = (d) => {
    if (!d) return false;
    const time = d.getTime();
    if (checkInDate && time === checkInDate.getTime()) return true;
    if (checkOutDate && time === checkOutDate.getTime()) return true;
    return false;
  };

  const isBetween = (d) => {
    if (!d || !checkInDate) return false;
    const t = d.getTime();
    if (checkOutDate && t > checkInDate.getTime() && t < checkOutDate.getTime()) return true;
    if (!checkOutDate && hoverDate && t > checkInDate.getTime() && t <= hoverDate.getTime()) return true;
    return false;
  };

  const formatDateLabel = (d) => {
    if (!d) return "";
    const isCurrentYear = d.getFullYear() === new Date().getFullYear();
    return d.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric",
      year: isCurrentYear ? undefined : "numeric"
    });
  };

  const renderCalendarMonth = (data) => {
    return (
      <div className="w-full max-w-[340px] mx-auto">
        <h4 className="text-center font-bold text-white mb-4 tracking-wide text-sm">
          {data.name} {data.year}
        </h4>
        <div className="grid grid-cols-7 text-center mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
            <span key={d} className="text-[10px] font-black text-zinc-500 uppercase">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {data.days.map((item, i) => {
            if (!item) return <div key={i} className="aspect-square" />;
            
            const sel = isSelected(item.date);
            const bet = isBetween(item.date);
            const past = item.isPast;

            const isCheckInSelected = checkInDate && item.date.getTime() === checkInDate.getTime();
            const isCheckOutSelected = checkOutDate && item.date.getTime() === checkOutDate.getTime();
            const hasRange = checkInDate && (checkOutDate || hoverDate);

            return (
              <div
                key={`day-${item.day}`}
                className="flex items-center justify-center aspect-square w-full relative"
                onMouseEnter={() => !item.isPast && setHoverDate(item.date)}
              >
                {bet && <div className="absolute inset-x-0 inset-y-1 bg-amber-500/10" />}
                {isCheckInSelected && hasRange && <div className="absolute left-1/2 right-0 inset-y-1 bg-amber-500/10" />}
                {(isCheckOutSelected || (hoverDate && item.date.getTime() === hoverDate.getTime() && item.date > checkInDate && !checkOutDate)) && isCheckInSelected === false && hasRange && <div className="absolute left-0 right-1/2 inset-y-1 bg-amber-500/10" />}

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleDateClick(item); }}
                  disabled={past}
                  className={`w-full h-full max-w-[40px] max-h-[40px] flex items-center justify-center rounded-full font-bold text-[13px] relative z-10 transition-colors 
                    ${past ? 'text-white/20 cursor-not-allowed line-through font-normal' :
                      sel ? 'bg-amber-500 text-black shadow-lg scale-105' :
                        'text-white hover:border border-white/40 hover:bg-white/5'}`
                  }
                >
                  {item.day}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const filteredLocations = useMemo(() => {
    if (!location.trim()) return locations;
    return locations.filter((loc) =>
      loc.toLowerCase().includes(location.toLowerCase())
    );
  }, [locations, location]);

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    const targetLocation = location || "Nearby";

    // Validate location exists in our data
    const isLocationValid = locations.some(
      (loc) => loc.toLowerCase() === targetLocation.toLowerCase()
    ) || (targetLocation.toLowerCase() === "stays in map area") || (targetLocation.toLowerCase() === "hotels in map area");

    if (!isLocationValid) {
      addToast("not found the place you specified", "info");
      setLocation(lastValidLocation || ""); // Show previous valid data in input
      return; // Do not navigate, keep current results (on search page) or stay on landing page
    }

    setLastValidLocation(targetLocation);

    searchParams.set("location", targetLocation);

    if (checkInDate) searchParams.set("checkin", checkInDate.toISOString().split("T")[0]);
    if (checkOutDate) searchParams.set("checkout", checkOutDate.toISOString().split("T")[0]);
    searchParams.set("guests", (totalGuests > 0 ? totalGuests : 1).toString());
    if (adults > 0) searchParams.set("adults", adults.toString());
    if (childrenCount > 0) searchParams.set("children", childrenCount.toString());
    if (infants > 0) searchParams.set("infants", infants.toString());
    if (pets > 0) searchParams.set("pets", pets.toString());

    if (targetLocation.toLowerCase() === "nearby" && navigator.geolocation) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          searchParams.set("lat", position.coords.latitude.toString());
          searchParams.set("lng", position.coords.longitude.toString());
          router.push(`/search?${searchParams.toString()}`);
          setIsLocating(false);
          onOpenChange(false);
        },
        (error) => {
          console.warn("Geolocation denied or failed.", error);
          router.push(`/search?${searchParams.toString()}`);
          setIsLocating(false);
          onOpenChange(false);
        },
        { timeout: 5000 }
      );
    } else {
      router.push(`/search?${searchParams.toString()}`);
      onOpenChange(false);
    }
  };

  return (
    <>
      {/* Desktop/Tablet Search Bar (Visible on large screens >= 1280px) */}
      <motion.div
        initial={!isCompact ? { opacity: 0, scale: 0.95 } : false}
        animate={!isCompact ? { opacity: 1, scale: 1 } : false}
        transition={{ duration: 0.8 }}
        className={`hidden xl:flex relative z-20 flex-col xl:flex-row items-center bg-black/40 backdrop-blur-3xl rounded-[1.5rem] sm:rounded-[2rem] xl:rounded-full border border-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.5)] p-1.5 sm:p-2 w-full max-w-4xl xl:gap-0 gap-1 sm:gap-2 ${className}`}
      >
        {/* Where - Extracted from Popover to allow perfect nested typing & focus management */}
        <div className="relative flex-1 min-w-0 w-full">
          <div
            onClick={() => setIsLocationOpen(true)}
            className={`flex flex-col px-4 sm:px-6 py-1.5 sm:py-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors w-full h-full ${isLocationOpen && 'bg-white/15'}`}
          >
            <span className="text-[9px] sm:text-[11px] text-white/90 font-bold tracking-wide whitespace-nowrap">Where</span>
            <input
              type="text"
              placeholder="Search destinations"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setIsLocationOpen(true);
              }}
              onFocus={() => setIsLocationOpen(true)}
              onBlur={() => setIsLocationOpen(false)}
              className="bg-transparent border-none outline-none text-white placeholder-white/50 text-[11px] sm:text-sm font-medium w-full truncate"
            />
          </div>

          {/* Manual Absolute Dropdown */}
          {isLocationOpen && (
            <div className="absolute top-[105%] xl:top-[120%] left-0 z-50 bg-black/90 backdrop-blur-3xl border border-white/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] w-full sm:w-[350px] max-w-[calc(100vw-2rem)]">
              <div className="flex flex-col w-full gap-1">
                <div className="flex items-center justify-between px-2 mb-2">
                  <h3 className="font-bold text-white text-[10px] sm:text-[11px] uppercase tracking-widest ">Destinations</h3>
                  {isLoadingLocations && <Loader2 size={12} className="text-white/30 animate-spin" />}
                </div>
                <div className="max-h-[250px] sm:max-h-[350px] overflow-y-auto custom-scrollbar flex flex-col gap-1 pr-1">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((loc) => (
                      <button
                        key={loc}
                        onPointerDown={(e) => {
                          e.preventDefault();
                          setLocation(loc);
                          setIsLocationOpen(false);
                        }}
                        className="flex items-center gap-3 sm:gap-4 text-white hover:bg-white/10 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 transition-colors text-left group"
                      >
                        <div className="bg-white/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-white/10 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all">
                          {loc === "Nearby" ? <Map size={16} className="text-amber-400 sm:w-5 sm:h-5" /> : <MapPin size={16} className="text-white/70 group-hover:text-amber-400 sm:w-5 sm:h-5" />}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm sm:text-base">{loc}</span>
                          <span className="text-[9px] sm:text-[10px] text-white/40 group-hover:text-white/60 transition-colors uppercase tracking-tight">Explore stays in {loc}</span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-white/50 text-xs sm:text-sm italic text-center">
                      No matching destinations found...
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 xl:h-10 w-[1px] bg-white/20 hidden xl:block" />

        {/* Check in & Check out Popover */}
        <Popover isOpen={isDatesOpen} onOpenChange={setIsDatesOpen} placement="bottom" offset={20}>
          <PopoverTrigger>
            <div className={`flex flex-1 min-w-0 w-full rounded-full cursor-pointer transition-colors ${isDatesOpen && 'bg-white/15'}`}>
              <div className="flex-1 min-w-0 flex flex-col px-4 sm:px-6 py-1.5 sm:py-3 hover:bg-white/10 rounded-full transition-colors relative">
                <span className="text-[9px] sm:text-[11px] text-white/90 font-bold tracking-wide whitespace-nowrap">Check in</span>
                <span className="text-white/50 text-[11px] sm:text-sm font-medium truncate">{formatDateLabel(checkInDate) || 'Add dates'}</span>
              </div>
              <div className="h-6 sm:h-10 w-[1px] bg-white/20 hidden sm:block self-center" />
              <div className="flex-1 min-w-0 flex flex-col px-4 sm:px-6 py-1.5 sm:py-3 hover:bg-white/10 rounded-full transition-colors relative">
                <span className="text-[9px] sm:text-[11px] text-white/90 font-bold tracking-wide whitespace-nowrap">Check out</span>
                <span className="text-white/50 text-[11px] sm:text-sm font-medium truncate">{formatDateLabel(checkOutDate) || 'Add dates'}</span>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent onMouseLeave={() => setHoverDate(null)} className="bg-black/95 backdrop-blur-3xl border border-white/10 p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.8)] max-w-[calc(100vw-2rem)] sm:max-w-none w-auto select-none overflow-x-auto no-scrollbar">
            <div className="flex flex-col items-center">

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative w-full items-start justify-center pt-4">
                <button onClick={prevMonth} className="absolute left-[-10px] sm:left-[-20px] top-4 text-white/40 hover:text-white transition-colors active:scale-95"><ChevronLeft size={24} /></button>
                <button onClick={nextMonth} className="absolute right-[-10px] sm:right-[-20px] top-4 text-white/40 hover:text-white transition-colors active:scale-95"><ChevronRight size={24} /></button>
                {renderCalendarMonth(getMonthData(currentMonthRef))}
                <div className="hidden md:block">
                  {renderCalendarMonth(getMonthData(nextMonthRef))}
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="h-8 xl:h-10 w-[1px] bg-white/20 hidden xl:block" />

        {/* Who (Guests) & Search Button */}
        <Popover isOpen={isGuestsOpen} onOpenChange={setIsGuestsOpen} placement="bottom-end" offset={10}>
          <div className={`flex-1 min-w-0 flex items-center justify-between pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1 sm:py-2 rounded-full transition-colors w-full ${isGuestsOpen && 'bg-white/15'}`}>
            <PopoverTrigger>
              <div className="flex flex-col flex-1 min-w-0 cursor-pointer hover:bg-white/10 rounded-full px-2 py-1 transition-colors">
                <span className="text-[9px] sm:text-[11px] text-white/90 font-bold tracking-wide whitespace-nowrap">Who</span>
                <span className="text-white/50 text-[11px] sm:text-sm font-medium truncate">
                  {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : "Add guests"}
                </span>
              </div>
            </PopoverTrigger>

            <button
              onClick={handleSearch}
              disabled={isLocating}
              className="bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center gap-2 rounded-full h-10 sm:h-12 px-4 sm:px-6 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all shrink-0 hover:scale-105 active:scale-95 disabled:opacity-75 disabled:scale-100 ml-1 sm:ml-2"
            >
              {isLocating ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} strokeWidth={3} className="sm:w-[18px] sm:h-[18px]" />}
              <span className="font-bold text-xs sm:text-sm hidden xs:block">
                {isLocating ? "Locating..." : "Search"}
              </span>
            </button>
          </div>

          {/* Guests Popover */}
          <PopoverContent className="bg-black/90 backdrop-blur-3xl border border-white/10 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.8)] w-[280px] sm:w-[380px] max-w-[calc(100vw-2rem)]">
            <div className="flex flex-col w-full gap-4 sm:gap-6 select-none">
              {/* Adults */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Adults</h3>
                  <p className="text-white/50 text-xs sm:text-sm">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button onClick={() => setAdults(Math.max(0, adults - 1))} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors ${adults === 0 ? 'border-white/10 text-white/20' : 'border-white/40 text-white hover:border-white'}`}><Minus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                  <span className="text-white font-medium w-3 sm:w-4 text-center text-sm sm:text-base">{adults}</span>
                  <button onClick={() => setAdults(adults + 1)} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:border-white transition-colors"><Plus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Children</h3>
                  <p className="text-white/50 text-xs sm:text-sm">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors ${childrenCount === 0 ? 'border-white/10 text-white/20' : 'border-white/40 text-white hover:border-white'}`}><Minus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                  <span className="text-white font-medium w-3 sm:w-4 text-center text-sm sm:text-base">{childrenCount}</span>
                  <button onClick={() => setChildrenCount(childrenCount + 1)} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:border-white transition-colors"><Plus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                </div>
              </div>

              {/* Infants */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Infants</h3>
                  <p className="text-white/50 text-xs sm:text-sm">Under 2</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button onClick={() => setInfants(Math.max(0, infants - 1))} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors ${infants === 0 ? 'border-white/10 text-white/20' : 'border-white/40 text-white hover:border-white'}`}><Minus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                  <span className="text-white font-medium w-3 sm:w-4 text-center text-sm sm:text-base">{infants}</span>
                  <button onClick={() => setInfants(infants + 1)} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:border-white transition-colors"><Plus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                </div>
              </div>

              {/* Pets */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">Pets</h3>
                  <a href="#" className="text-white/50 text-[10px] sm:text-sm underline hover:text-white transition-colors">Bringing a service animal?</a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button onClick={() => setPets(Math.max(0, pets - 1))} className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-colors ${pets === 0 ? 'border-white/10 text-white/20' : 'border-white/40 text-white hover:border-white'}`}><Minus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                  <span className="text-white font-medium w-3 sm:w-4 text-center text-sm sm:text-base">{pets}</span>
                  <button onClick={() => setPets(pets + 1)} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/40 text-white flex items-center justify-center hover:border-white transition-colors"><Plus size={12} className="sm:w-3.5 sm:h-3.5" /></button>
                </div>
              </div>

            </div>
          </PopoverContent>
        </Popover>
      </motion.div>

      {/* Mobile Search Button */}
      <div 
        className={`xl:hidden w-full max-w-[90vw] mx-auto bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full p-3.5 flex items-center gap-4 cursor-pointer shadow-2xl active:scale-[0.98] transition-transform ${className}`}
        onClick={onOpen}
      >
        <div className="bg-amber-500 p-2.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]">
          <Search size={18} className="text-black" strokeWidth={3} />
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-white font-extrabold text-sm tracking-tight">Start your search</span>
          <span className="text-white/40 text-[10px] font-semibold uppercase tracking-widest flex items-center gap-1.5">
            {location || "Anywhere"} <span className="w-1 h-1 bg-white/20 rounded-full" /> {checkInDate ? formatDateLabel(checkInDate) : "Any week"} <span className="w-1 h-1 bg-white/20 rounded-full" /> {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
          </span>
        </div>
        <div className="p-2 border border-white/10 rounded-full">
           <SlidersHorizontal size={14} className="text-white/50" />
        </div>
      </div>

      {/* Mobile Search Overlay - Portaled to avoid clipping/scaling issues */}
      {hasMounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] bg-black overflow-hidden flex flex-col"
            >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 shrink-0 bg-black">
              <Button 
                isIconOnly 
                variant="light" 
                onPress={() => onOpenChange(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={20} />
              </Button>
              <div className="flex gap-4">
                 <button 
                  onClick={() => setMobileStep("where")}
                  className={`text-[11px] font-black uppercase tracking-widest transition-colors ${mobileStep === "where" ? "text-amber-500 border-b-2 border-amber-500" : "text-white/40"}`}
                 >
                  Stays
                 </button>
                 <button className="text-[11px] font-black uppercase tracking-widest text-white/20 cursor-not-allowed">
                  Experiences
                 </button>
              </div>
              <div className="w-10" /> {/* Spacer */}
            </div>

            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
                
                {/* Step 1: Where */}
                <motion.div 
                  layout
                  className={`bg-zinc-900/50 border border-white/10 rounded-3xl p-5 transition-all ${mobileStep === "where" ? "ring-2 ring-amber-500/50" : "opacity-60"}`}
                  onClick={() => setMobileStep("where")}
                >
                  <div className="flex items-center justify-between mb-4">
                     <h2 className="text-xl font-black text-white">Where to?</h2>
                     {mobileStep !== "where" && location && <span className="text-amber-500 text-xs font-bold">{location}</span>}
                  </div>
                  
                  {mobileStep === "where" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div className="relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input 
                          ref={searchInputRef}
                          autoFocus
                          type="text"
                          placeholder="Search destinations"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/30 font-medium focus:outline-none focus:ring-2 ring-white/20"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 max-h-[40vh] overflow-y-auto pr-1">
                        {filteredLocations.map((loc) => (
                          <button
                            key={loc}
                            onClick={(e) => {
                              e.stopPropagation();
                              setLocation(loc);
                              setMobileStep("dates");
                            }}
                            className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                          >
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                              {loc === "Nearby" ? <Map size={24} className="text-amber-400" /> : <MapPin size={24} className="text-white/60" />}
                            </div>
                            <span className="text-xs font-bold text-center text-white">{loc}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Step 2: When */}
                <motion.div 
                  layout
                  className={`bg-zinc-900/50 border border-white/10 rounded-3xl p-5 transition-all ${mobileStep === "dates" ? "ring-2 ring-amber-500/50" : "opacity-60"}`}
                  onClick={() => location && setMobileStep("dates")}
                >
                  <div className="flex items-center justify-between mb-4">
                     <h2 className="text-xl font-black text-white">When?</h2>
                     {mobileStep !== "dates" && checkInDate && (
                       <span className="text-amber-500 text-xs font-bold">
                         {formatDateLabel(checkInDate)} {checkOutDate ? `- ${formatDateLabel(checkOutDate)}` : ""}
                       </span>
                     )}
                  </div>

                  {mobileStep === "dates" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                      <div className="flex gap-4 mb-4">
                         <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <span className="text-[10px] text-white/40 uppercase font-black block">Check-in</span>
                            <span className="text-sm font-bold text-white">{formatDateLabel(checkInDate) || "Add date"}</span>
                         </div>
                         <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <span className="text-[10px] text-white/40 uppercase font-black block">Check-out</span>
                            <span className="text-sm font-bold text-white">{formatDateLabel(checkOutDate) || "Add date"}</span>
                         </div>
                      </div>
                      <div className="w-full overflow-x-auto no-scrollbar pb-4">
                         <div className="flex flex-col gap-8">
                            {renderCalendarMonth(getMonthData(currentMonthRef))}
                            {renderCalendarMonth(getMonthData(nextMonthRef))}
                         </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Step 3: Who */}
                <motion.div 
                  layout
                  className={`bg-zinc-900/50 border border-white/10 rounded-3xl p-5 transition-all ${mobileStep === "guests" ? "ring-2 ring-amber-500/50" : "opacity-60"}`}
                  onClick={() => checkInDate && setMobileStep("guests")}
                >
                  <div className="flex items-center justify-between mb-4">
                     <h2 className="text-xl font-black text-white">Who?</h2>
                     {mobileStep !== "guests" && totalGuests > 0 && <span className="text-amber-500 text-xs font-bold">{totalGuests} guests</span>}
                  </div>

                  {mobileStep === "guests" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      {/* Mobile Guest Controls */}
                      {[
                        { label: "Adults", sub: "Ages 13+", val: adults, set: setAdults },
                        { label: "Children", sub: "Ages 2-12", val: childrenCount, set: setChildrenCount },
                        { label: "Infants", sub: "Under 2", val: infants, set: setInfants },
                        { label: "Pets", sub: "Service animal?", val: pets, set: setPets }
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-sm text-white">{item.label}</h3>
                            <p className="text-white/40 text-[10px] font-medium uppercase tracking-wider">{item.sub}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <button 
                              onClick={(e) => { e.stopPropagation(); item.set(Math.max(0, item.val - 1)); }} 
                              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-bold text-sm w-4 text-center text-white">{item.val}</span>
                            <button 
                              onClick={(e) => { e.stopPropagation(); item.set(item.val + 1); }} 
                              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/5 bg-zinc-900/80 backdrop-blur-xl flex items-center justify-between shrink-0">
              <button 
                onClick={() => {
                  setLocation("");
                  setCheckInDate(null);
                  setCheckOutDate(null);
                  setAdults(0);
                  setChildrenCount(0);
                  setInfants(0);
                  setPets(0);
                  setMobileStep("where");
                }}
                className="text-sm font-bold underline text-white/60"
              >
                Clear all
              </button>
              <Button
                color="warning"
                size="lg"
                radius="full"
                startContent={isLocating ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                className="bg-amber-500 text-black font-black px-8 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                onPress={handleSearch}
                disabled={isLocating}
              >
                {isLocating ? "Locating..." : "Search"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
