"use client";

import { useState } from "react";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";


export default function ManageHotels() {
    const router = useRouter();
  // 🔥 Mock hotel data (later from backend)
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Sea View Resort",
      city: "Goa",
      price: 2500,
      owner: "Rahul",
      status: "pending",
    },
    {
      id: 2,
      name: "Hilltop Stay",
      city: "Ooty",
      price: 1800,
      owner: "Anjali",
      status: "approved",
    },
  ]);

  // ✅ Approve hotel
  const handleApprove = (id) => {
    setHotels((prev) =>
      prev.map((hotel) =>
        hotel.id === id
          ? { ...hotel, status: "approved" }
          : hotel
      )
    );
  };

  // ❌ Reject hotel
  const handleReject = (id) => {
    setHotels((prev) =>
      prev.map((hotel) =>
        hotel.id === id
          ? { ...hotel, status: "rejected" }
          : hotel
      )
    );
  };

  // 🗑️ Delete hotel
  const handleDelete = (id) => {
    const confirmDelete = confirm("Delete this hotel?");
    if (!confirmDelete) return;

    setHotels((prev) =>
      prev.filter((hotel) => hotel.id !== id)
    );
  };

  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-8">
        <h1 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">
          Manage <span className="text-white/40">Hotels</span> 🏨
        </h1>

        {hotels.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] p-12 border border-white/10 text-center">
            <p className="text-white/40 font-medium">No hotels available.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 max-w-5xl">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white/5 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-6 transition-all hover:bg-white/10"
              >
                {/* 📄 Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-white/50 font-medium">
                    {hotel.city} • Owner: <span className="text-white/70">{hotel.owner}</span>
                  </p>
                  <p className="font-black text-amber-500 text-lg pt-1">
                    ₹{hotel.price.toLocaleString()} <span className="text-[10px] uppercase text-white/40 tracking-widest font-bold">/ night</span>
                  </p>
                  <div className="pt-2">
                    <span
                      className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                        hotel.status === "approved"
                          ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                          : hotel.status === "rejected"
                          ? "text-rose-400 border-rose-400/30 bg-rose-400/10"
                          : "text-amber-400 border-amber-400/30 bg-amber-400/10"
                      }`}
                    >
                      {hotel.status}
                    </span>
                  </div>
                </div>

                {/* ⚡ Actions */}
                <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                    <Button
                      className="bg-white text-black font-bold rounded-xl px-4 h-11 shadow-xl hover:scale-105 active:scale-95 transition-all flex-1 sm:flex-none"
                      onClick={() => router.push(`/admin/manage-hotels/${hotel.id}`)}
                    >
                      View
                    </Button>
                  {hotel.status === "pending" && (
                    <>
                      <Button
                        className="bg-white/10 text-emerald-400 border border-emerald-400/30 font-bold rounded-xl px-4 h-11 hover:bg-emerald-400/20 transition-all flex-1 sm:flex-none"
                        onClick={() => handleApprove(hotel.id)}
                      >
                        Approve
                      </Button>

                      <Button
                        className="bg-white/10 text-amber-400 border border-amber-400/30 font-bold rounded-xl px-4 h-11 hover:bg-amber-400/20 transition-all flex-1 sm:flex-none"
                        onClick={() => handleReject(hotel.id)}
                      >
                        Reject
                      </Button>
                    </>
                  )}

                  <Button
                    className="bg-white/10 text-rose-400 border border-rose-400/30 font-bold rounded-xl px-4 h-11 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all flex-1 sm:flex-none"
                    onClick={() => handleDelete(hotel.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </RoleProtectedRoute>
  );
}