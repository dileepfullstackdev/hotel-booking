"use client";

import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";
import { Users, FileKey2, Building, ShieldAlert, ListChecks } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-4 sm:px-12 md:px-24 bg-black z-0">
        {/* Background - System/Admin Style or Nature Theme */}
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
          <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" /> {/* Subtle admin tint */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Dashboard Content */}
        <div className="relative z-10 max-w-6xl w-full mx-auto text-white mt-20 sm:mt-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.2em] font-medium mb-4 uppercase drop-shadow-lg text-white/90 flex items-center gap-2"
          >
            <ShieldAlert size={18} className="text-white/70" /> SYSTEM ADMIN
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 sm:mb-10 drop-shadow-2xl uppercase"
          >
            COMMAND <br />
            <span className="text-white/80">CENTER</span>
          </motion.h1>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all cursor-default flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Total Users</h3>
                  <p className="text-4xl font-bold text-white">120</p>
                </div>
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                  <Users size={24} className="text-white/80" />
                </div>
              </div>
              <p className="text-sm text-white/50">Registered accounts</p>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all cursor-default flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Pending Requests</h3>
                  <p className="text-4xl font-bold text-white">8</p>
                </div>
                <div className="p-3 bg-red-400/20 rounded-2xl border border-red-400/30">
                  <FileKey2 size={24} className="text-red-300" />
                </div>
              </div>
              <p className="text-sm text-white/50 relative z-10">Owner applications pending</p>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all cursor-default flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Total Hotels</h3>
                  <p className="text-4xl font-bold text-white">45</p>
                </div>
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                  <Building size={24} className="text-white/80" />
                </div>
              </div>
              <p className="text-sm text-white/50">Properties registered</p>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 bg-white/10 backdrop-blur-2xl p-4 md:p-6 rounded-3xl border border-white/20 shadow-2xl"
          >
            <Button 
              size="lg"
              className="bg-white text-black font-bold rounded-2xl px-8 py-6 h-auto shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              onPress={() => router.push("/admin/owner-requests")}
              startContent={<ListChecks size={20} />}
            >
              Manage Owner Requests
            </Button>
            
            <Button 
               size="lg"
               className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-2xl px-8 py-6 h-auto shadow-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
               onPress={() => router.push("/admin/manage-hotels")}
               startContent={<Building size={18} />}
            >
              Manage Hotels
            </Button>
          </motion.div>
        </div>
      </div>
    </RoleProtectedRoute>
  );
}