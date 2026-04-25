"use client";

import { useState } from "react";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { Card, Button } from "@heroui/react";

export default function OwnerRequests() {
  // 🔥 mock data (later from backend)
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      hotelName: "Sea View Resort",
      status: "pending",
    },
    {
      id: 2,
      name: "Anjali",
      email: "anjali@gmail.com",
      hotelName: "Hilltop Stay",
      status: "pending",
    },
  ]);

  // ✅ Approve
  const handleApprove = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "approved" } : req
      )
    );
  };

  // ❌ Reject
  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: "rejected" } : req
      )
    );
  };

  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-8">
        <h1 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">
          Owner <span className="text-white/40">Requests</span> 🏨
        </h1>

        <div className="flex flex-col gap-6 max-w-4xl">
          {requests.map((req) => (
            <div key={req.id} className="bg-white/5 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/10 shadow-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-6 transition-all hover:bg-white/10">
              
              {/* Info */}
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-white tracking-tight">
                  {req.hotelName}
                </h3>
                <p className="text-sm text-white/50 font-medium">
                  {req.name} • {req.email}
                </p>
                <div className="pt-2">
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                      req.status === "approved"
                        ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                        : req.status === "rejected"
                        ? "text-rose-400 border-rose-400/30 bg-rose-400/10"
                        : "text-amber-400 border-amber-400/30 bg-amber-400/10"
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>

              {/* Actions */}
              {req.status === "pending" && (
                <div className="flex gap-3">
                  <Button
                    className="bg-white text-black font-bold rounded-xl px-6 h-12 shadow-xl hover:scale-105 active:scale-95 transition-all flex-1 sm:flex-none"
                    onClick={() => handleApprove(req.id)}
                  >
                    Approve
                  </Button>

                  <Button
                    className="bg-white/10 text-white border border-white/20 font-bold rounded-xl px-6 h-12 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all flex-1 sm:flex-none"
                    onClick={() => handleReject(req.id)}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </RoleProtectedRoute>
  );
}