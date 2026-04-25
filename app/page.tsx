import { Suspense } from "react";
import LandingHero from "@/components/LandingHero";
import LandingHotelGrid from "@/components/LandingHotelGrid";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <main className="min-h-screen bg-black selection:bg-white/30 selection:text-white">
        <LandingHero />
        <LandingHotelGrid />
      </main>
    </Suspense>
  );
}