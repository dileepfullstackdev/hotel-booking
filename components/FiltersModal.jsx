"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Button,
  Slider
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Tent, Building, Minus, Plus, Wifi, Wind, Tv, Dumbbell, Utensils, Waves, X, WashingMachine, Shirt, Car, Bath } from "lucide-react";

export default function FiltersModal({ isOpen, onOpenChange, currentFilters, onApply, allHotels, baseHotels, queryCheckIn, queryCheckOut, totalGuestsNeeded, queryPets }) {
  const [localFilters, setLocalFilters] = useState(currentFilters);

  const availablePriceRange = useMemo(() => {
    if (!baseHotels || baseHotels.length === 0) return [0, 50000];
    const prices = baseHotels.map(h => h.price);
    const min = Math.floor(Math.min(...prices));
    const max = Math.ceil(Math.max(...prices));
    if (min === max) return [Math.max(0, min - 100), max + 100];
    return [min, max];
  }, [baseHotels]);

  useEffect(() => {
    if (isOpen) {
      setLocalFilters(prev => {
        // If current filters are at default, or we want to sync with map, update them
        const newFilters = { ...currentFilters };
        if (currentFilters.priceRange[0] === 0 && currentFilters.priceRange[1] === 50000) {
           newFilters.priceRange = availablePriceRange;
        }
        return newFilters;
      });
    }
  }, [isOpen, currentFilters, availablePriceRange]);

  const handleClearAll = () => {
    setLocalFilters({
      typeOfPlace: "any",
      priceRange: availablePriceRange,
      bedrooms: "any",
      beds: "any",
      bathrooms: "any",
      amenities: [],
      propertyTypes: []
    });
  };

  const previewCount = useMemo(() => {
    if (!allHotels) return 0;

    const applyFilters = (hotel) => {
      // 1. Guest Capacity (From SearchBar)
      if (totalGuestsNeeded > 0 && (hotel.max_guests || 0) < totalGuestsNeeded) return false;

      // 2. Pet Friendly (From SearchBar)
      if (queryPets > 0 && !hotel.pet_friendly) return false;

      // 3. Price
      if (hotel.price < localFilters.priceRange[0] || hotel.price > localFilters.priceRange[1]) return false;

      if (localFilters.propertyTypes.length > 0) {
        const typeStr = (hotel.type || '').toLowerCase();
        let matchesType = false;
        if (localFilters.propertyTypes.includes('house') && (typeStr.includes('house') || typeStr.includes('villa') || typeStr.includes('bungalow') || typeStr.includes('homestay') || typeStr.includes('heritage'))) matchesType = true;
        if (localFilters.propertyTypes.includes('flat') && (typeStr.includes('apartment') || typeStr.includes('loft') || typeStr.includes('suite'))) matchesType = true;
        if (localFilters.propertyTypes.includes('guesthouse') && (typeStr.includes('guesthouse') || typeStr.includes('inn') || typeStr.includes('tent') || typeStr.includes('camp') || typeStr.includes('cottage') || typeStr.includes('chalet') || typeStr.includes('residence') || typeStr.includes('treehouse'))) matchesType = true;
        if (localFilters.propertyTypes.includes('hotel') && (typeStr.includes('hotel') || typeStr.includes('resort') || typeStr.includes('retreat'))) matchesType = true;
        if (!matchesType) return false;
      }

      if (localFilters.amenities.length > 0) {
        const hotelAm = hotel.amenities ? hotel.amenities.map(a => a.id) : [];
        for (const am of localFilters.amenities) {
          if (!hotelAm.includes(am)) return false;
        }
      }

      if (localFilters.typeOfPlace !== "any") {
         const typeLabel = localFilters.typeOfPlace === "room" ? "Room" : "Entire home";
         if (hotel.type_of_place !== typeLabel) return false;
      }

      if (localFilters.bedrooms !== "any" && hotel.bedrooms < localFilters.bedrooms) return false;
      if (localFilters.beds !== "any" && hotel.beds < localFilters.beds) return false;
      if (localFilters.bathrooms !== "any" && hotel.bathrooms < localFilters.bathrooms) return false;

      // Check dates
      if (queryCheckIn && queryCheckOut && hotel.unavailableDates && hotel.unavailableDates.length > 0) {
        const checkInDate = new Date(queryCheckIn);
        const checkOutDate = new Date(queryCheckOut);
        
        for (const unavailStr of hotel.unavailableDates) {
          const unavailDate = new Date(unavailStr);
          if (unavailDate >= checkInDate && unavailDate < checkOutDate) {
            return false;
          }
        }
      }

      return true;
    };

    const strictFiltered = baseHotels.filter(applyFilters);

    if (strictFiltered.length === 0 && (localFilters.priceRange[0] > 0 || localFilters.priceRange[1] < 50000 || localFilters.propertyTypes.length > 0 || localFilters.amenities.length > 0)) {
      return allHotels.filter(applyFilters).length;
    }

    return strictFiltered.length;
  }, [baseHotels, allHotels, localFilters, queryCheckIn, queryCheckOut, totalGuestsNeeded, queryPets]);

  const updateFilter = (key, value) => {
    setLocalFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleMinChange = (e) => {
    let val = e.target.value;
    if (val === '') { updateFilter('priceRange', [0, localFilters.priceRange[1]]); return; }
    val = Number(val);
    if (val < 0) val = 0;
    updateFilter('priceRange', [val, localFilters.priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    let val = e.target.value;
    if (val === '') { updateFilter('priceRange', [localFilters.priceRange[0], 0]); return; }
    val = Number(val);
    if (val < 0) val = 0;
    updateFilter('priceRange', [localFilters.priceRange[0], val]);
  };

  const handleMinBlur = () => {
    let val = localFilters.priceRange[0];
    if (val > localFilters.priceRange[1]) val = localFilters.priceRange[1];
    updateFilter('priceRange', [val, localFilters.priceRange[1]]);
  };

  const handleMaxBlur = () => {
    let val = localFilters.priceRange[1];
    if (val < localFilters.priceRange[0]) val = localFilters.priceRange[0];
    if (val > availablePriceRange[1]) val = availablePriceRange[1];
    updateFilter('priceRange', [localFilters.priceRange[0], Math.max(val, localFilters.priceRange[0])]);
  };

  const amenitiesList = [
    { id: "wifi", label: "Wifi", icon: <Wifi size={20} /> },
    { id: "kitchen", label: "Kitchen", icon: <Utensils size={20} /> },
    { id: "bathroom", label: "Private attached bathroom", icon: <Bath size={20} /> },
    { id: "washer", label: "Washing machine", icon: <WashingMachine size={20} /> },
    { id: "tv", label: "TV", icon: <Tv size={20} /> },
    { id: "iron", label: "Iron", icon: <Shirt size={20} /> },
    { id: "hairdryer", label: "Hairdryer", icon: <Wind size={20} /> },
    { id: "pool", label: "Pool", icon: <Waves size={20} /> },
    { id: "parking", label: "Free Parking", icon: <Car size={20} /> },
    { id: "gym", label: "Gym", icon: <Dumbbell size={20} /> }
  ];

  const propertyTypeList = [
    { id: "house", label: "House", icon: <Home size={28} /> },
    { id: "flat", label: "Flat", icon: <Building size={28} /> },
    { id: "guesthouse", label: "Guest house", icon: <Tent size={28} /> },
    { id: "hotel", label: "Hotel", icon: <Building2 size={28} /> }
  ];

  const Stepper = ({ label, value, onChange }) => {
    const isAny = value === "any" || value === 0;
    const numValue = isAny ? 0 : parseInt(value);

    return (
      <div className="flex items-center justify-between py-4">
        <span className="text-lg text-white/90">{label}</span>
        <div className="flex items-center gap-4">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            className={`border bg-transparent ${numValue === 0 ? 'border-white/10 text-white/20' : 'border-white/30 text-white hover:border-white'}`}
            isDisabled={numValue === 0}
            onPress={() => onChange(numValue - 1 === 0 ? "any" : numValue - 1)}
          >
            <Minus size={16} />
          </Button>
          <span className="w-8 text-center">{isAny ? "Any" : `${numValue}${numValue >= 8 ? '+' : ''}`}</span>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            className="border border-white/30 bg-transparent text-white hover:border-white"
            onPress={() => onChange(numValue >= 8 ? 8 : numValue + 1)}
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 shadow-xl backdrop-blur-sm cursor-pointer"
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl bg-zinc-950 text-white border border-white/10 rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
          >
            <div className="flex items-center justify-center py-5 border-b border-white/10 relative shrink-0">
              <h2 className="font-bold text-lg">Filters</h2>
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-5 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
              <div className="pb-6 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Type of place</h3>
                <div className="flex w-full border border-white/20 rounded-xl overflow-hidden">
                  {['any', 'room', 'entire_home'].map((type) => {
                    const isSelected = localFilters.typeOfPlace === type;
                    const labels = { any: 'Any type', room: 'Room', entire_home: 'Entire home' };
                    return (
                      <div
                        key={type}
                        className={`flex-1 text-center py-3 sm:py-4 cursor-pointer transition-colors border-r border-white/10 last:border-0 text-sm sm:text-base ${isSelected ? 'bg-zinc-800 text-white font-semibold' : 'hover:bg-zinc-900 text-white/70'}`}
                        onClick={() => updateFilter('typeOfPlace', type)}
                      >
                        {labels[type]}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="py-6 sm:py-8 border-b border-white/10 relative">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Price range</h3>
                <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">Trip price, includes all fees</p>
                <div className="px-3">
                  <Slider
                    step={100}
                    minValue={availablePriceRange[0]}
                    maxValue={availablePriceRange[1]}
                    value={localFilters.priceRange}
                    onChange={(val) => updateFilter('priceRange', val)}
                    formatOptions={{ style: "currency", currency: "INR", maximumFractionDigits: 0 }}
                    className="max-w-md w-full"
                    classNames={{
                      track: "bg-white/10 h-1",
                      filler: "bg-white",
                      thumb: "bg-white border-2 border-black w-6 h-6 shadow-lg after:bg-white"
                    }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
                  <div className="flex flex-col gap-2 w-full sm:flex-1">
                    <span className="text-[10px] sm:text-xs text-white/50 ml-2">Minimum</span>
                    <div className="border border-white/20 rounded-full px-4 py-2 sm:py-3 flex items-center bg-transparent group focus-within:border-white focus-within:border-2 transition-all">
                      <span className="text-white/50 mr-1 text-sm sm:text-base">₹</span>
                      <input
                        type="number"
                        min={0}
                        value={localFilters.priceRange[0]}
                        onChange={handleMinChange}
                        onBlur={handleMinBlur}
                        className="bg-transparent text-white outline-none w-full text-sm sm:text-base appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </div>
                  </div>
                  <Minus className="text-white/30 hidden sm:block mt-6" />
                  <div className="flex flex-col gap-2 w-full sm:flex-1">
                    <span className="text-[10px] sm:text-xs text-white/50 ml-2">Maximum</span>
                    <div className="border border-white/20 rounded-full px-4 py-2 sm:py-3 flex items-center bg-transparent group focus-within:border-white focus-within:border-2 transition-all">
                      <span className="text-white/50 mr-1 text-sm sm:text-base">₹</span>
                      <input
                        type="number"
                        min={0}
                        value={localFilters.priceRange[1]}
                        onChange={handleMaxChange}
                        onBlur={handleMaxBlur}
                        className="bg-transparent text-white outline-none w-full text-sm sm:text-base appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6 sm:py-8 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Rooms and beds</h3>
                <Stepper label="Bedrooms" value={localFilters.bedrooms} onChange={(v) => updateFilter('bedrooms', v)} />
                <Stepper label="Beds" value={localFilters.beds} onChange={(v) => updateFilter('beds', v)} />
                <Stepper label="Bathrooms" value={localFilters.bathrooms} onChange={(v) => updateFilter('bathrooms', v)} />
              </div>

              <div className="py-6 sm:py-8 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Amenities</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {amenitiesList.map(a => (
                    <button
                      key={a.id}
                      className={`flex items-center gap-2 sm:gap-3 border font-medium cursor-pointer transition-all px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm ${localFilters.amenities.includes(a.id) ? 'border-white bg-zinc-800' : 'border-white/20 hover:border-white/50 bg-transparent'}`}
                      onClick={() => {
                        const newAm = localFilters.amenities.includes(a.id)
                          ? localFilters.amenities.filter(x => x !== a.id)
                          : [...localFilters.amenities, a.id];
                        updateFilter('amenities', newAm);
                      }}
                    >
                      <span className={localFilters.amenities.includes(a.id) ? 'text-white' : 'text-white/70'}>{a.icon}</span>
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 sm:pt-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Property type</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {propertyTypeList.map(p => {
                    const isSelected = localFilters.propertyTypes.includes(p.id);
                    return (
                      <div
                        key={p.id}
                        onClick={() => {
                          const newList = isSelected
                            ? localFilters.propertyTypes.filter(x => x !== p.id)
                            : [...localFilters.propertyTypes, p.id];
                          updateFilter('propertyTypes', newList);
                        }}
                        className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all h-28 sm:h-32 justify-between ${isSelected ? 'border-white bg-zinc-800 border-2' : 'border-white/20 hover:border-white/50 bg-transparent'}`}
                      >
                        <div className={`text-white p-1 rounded-xl ${isSelected ? '' : 'opacity-70'}`}>
                          {p.icon}
                        </div>
                        <span className={`font-semibold text-xs sm:text-base ${isSelected ? '' : 'text-white/80'}`}>{p.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 sm:p-6 border-t border-white/10 shrink-0">
              <span
                className="underline cursor-pointer font-semibold text-white hover:text-white/70 transition-colors text-sm sm:text-base"
                onClick={handleClearAll}
              >
                Clear all
              </span>
              <Button
                size="lg"
                className="bg-white text-black font-bold px-6 sm:px-8 rounded-lg text-sm sm:text-base"
                onPress={() => { onApply(localFilters); onOpenChange(false); }}
              >
                Show {previewCount || 0} places
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
