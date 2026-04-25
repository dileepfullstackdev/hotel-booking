"use client";

import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";
import { Building2, Plus, List, ShieldCheck } from "lucide-react";

export default function OwnerDashboard() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  return (
    <RoleProtectedRoute allowedRoles={["owner"]}>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-4 sm:px-12 md:px-24 bg-black z-0">
        {/* Background Image - High Quality Nature Theme matching Landing Page */}
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=2000&q=80')"
          }}
        >
          {/* Adjusted Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Dashboard Content */}
        <div className="relative z-10 max-w-5xl w-full mx-auto text-white mt-20 sm:mt-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.2em] font-medium mb-4 uppercase drop-shadow-lg text-white/90 flex items-center gap-2"
          >
            <ShieldCheck size={18} className="text-white/70" /> OWNER DASHBOARD
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 sm:mb-10 drop-shadow-2xl uppercase"
          >
            HELLO, <br />
            <span className="text-white/80">{user?.name || "PARTNER"}</span>
          </motion.h1>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all cursor-default flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Total Hotels</h3>
                  <p className="text-4xl font-bold text-white">5</p>
                </div>
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                  <Building2 size={24} className="text-white/80" />
                </div>
              </div>
              <p className="text-sm text-white/50">Properties currently managed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all cursor-default flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Active Listings</h3>
                  <p className="text-4xl font-bold text-white">3</p>
                </div>
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10">
                  <List size={24} className="text-white/80" />
                </div>
              </div>
              <p className="text-sm text-white/50">Properties visible to users</p>
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
              onPress={() => router.push("/owner/add-hotel")}
              startContent={<Plus size={20} />}
            >
              Add New Hotel
            </Button>
            
            <Button 
               size="lg"
               className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-2xl px-8 py-6 h-auto shadow-2xl hover:bg-white/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
               onPress={() => router.push("/owner/my-hotels")}
               startContent={<List size={18} />}
            >
              Manage Properties
            </Button>
          </motion.div>
        </div>
      </div>
    </RoleProtectedRoute>
  );
}