"use client";

import { Button, Link, Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import { motion } from "framer-motion";
import { User, LogOut, LayoutDashboard, CalendarCheck } from "lucide-react";

export default function LandingNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { token, user, logout, isHydrated } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  // Wait until auth loads
  if (!isHydrated) return null;

  // Role-based dashboard link
  const getDashboardLink = () => {
    if (user?.role === "admin") return "/admin/dashboard";
    if (user?.role === "owner") return "/owner/dashboard";
    return "/user/dashboard";
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 md:py-6"
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold tracking-[0.2em] text-white cursor-pointer drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        onClick={() => router.push("/")}
      >
        DISTAY
      </h1>

      {/* Right Side */}
      <div className="flex gap-4 items-center">
        {token && user ? (
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-1.5 py-1.5 pr-2 rounded-full border border-white/20 shadow-lg">

            {/* Dashboard Button */}
            <button
              className={`flex items-center gap-2 transition-all rounded-full px-4 py-2 text-sm font-medium ${
                pathname === getDashboardLink()
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              onClick={() => router.push(getDashboardLink())}
            >
              <LayoutDashboard size={14} /> <span className="hidden sm:inline">Dashboard</span>
            </button>

            {/* Bookings Button (User Only) */}
            {user?.role === "user" && (
              <button
                className={`flex items-center gap-2 transition-all rounded-full px-4 py-2 text-sm font-medium ${
                  pathname === "/user/bookings"
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
                onClick={() => router.push("/user/bookings")}
              >
                <CalendarCheck size={14} /> <span className="hidden sm:inline">Bookings</span>
              </button>
            )}

            {/* User Info Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pr-3 text-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-200 to-amber-700 flex items-center justify-center shadow-inner">
                <User size={16} className="text-black" />
              </div>
              <span className="text-sm font-semibold drop-shadow hidden sm:block">
                {user.name || "User"}
              </span>
            </div>

            {/* Logout Popover */}
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <button
                  className="flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-transparent hover:border-red-400 transition-all rounded-full w-9 h-9 active:scale-95 shadow-md"
                >
                  <LogOut size={14} />
                </button>
              </PopoverTrigger>

              <PopoverContent className="bg-black/90 backdrop-blur-3xl border border-white/10 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] min-w-[240px]">
                <div className="flex flex-col w-full">
                  <h3 className="font-bold text-white text-lg flex items-center gap-2 mb-1">
                    <LogOut size={16} className="text-red-400" /> Sign Out
                  </h3>
                  <p className="text-xs text-white/60 mb-5 leading-relaxed font-medium">
                    Are you sure you want to end your session and log out?
                  </p>
                  <div className="flex flex-col gap-2 w-full">
                    <Button
                      className="w-full bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-transform"
                      onPress={handleLogout}
                    >
                      Log Out
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-white hover:text-white/80 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-medium"
            >
              Login
            </Link>
            <Button
              className="bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all text-sm px-6"
              radius="full"
              onPress={() => router.push("/signup")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </motion.nav>
  );
}