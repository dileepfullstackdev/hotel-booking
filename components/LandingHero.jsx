"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import SearchBar from "./SearchBar";

export default function LandingHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-start items-center pt-24 sm:pt-32 px-4 md:px-8 bg-black">
      {/* Background Image - High Quality Nature Theme */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 🔍 Reusable Airbnb-Style Centered Glassmorphic Search Bar */}
      <Suspense fallback={<div className="h-20 w-full max-w-4xl bg-white/5 animate-pulse rounded-full" />}>
        <SearchBar className="mt-2" />
      </Suspense>

      {/* Hero Center Heading added below Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center text-center mt-20 sm:mt-32 md:mt-48 w-full px-4"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-2xl mb-4 leading-none">
          Discover your<br className="sm:hidden"/> perfect stay.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium drop-shadow-lg max-w-2xl">
          Unforgettable experiences await anywhere in the world.
        </p>
      </motion.div>
    </div>
  );
}