import LandingHero from "@/components/LandingHero";
import LandingHotelGrid from "@/components/LandingHotelGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-white/30 selection:text-white">
      <LandingHero />
      <LandingHotelGrid />
    </main>
  );
}