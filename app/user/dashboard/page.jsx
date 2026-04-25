"use client";

import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import LandingHero from "@/components/LandingHero";
import LandingHotelGrid from "@/components/LandingHotelGrid";

export default function UserDashboard() {
  return (
    <RoleProtectedRoute allowedRoles={["user"]}>
      <div className="bg-black min-h-screen">
        <LandingHero />
        <div className="mt-[-10vh]"> {/* Slight overlap or spacing adjustment if needed */}
          <LandingHotelGrid />
        </div>
      </div>
    </RoleProtectedRoute>
  );
}