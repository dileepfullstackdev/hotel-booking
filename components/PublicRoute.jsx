"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function PublicRoute({ children }) {
  const router = useRouter();
  const { token, user, isHydrated } = useAuthStore();
  console.log(token,"token",user,"userData");
  useEffect(() => {
    if (isHydrated && token) {
      // 🔀 role-based redirect
      if (user?.role === "admin") {
        router.replace("/admin/dashboard");
      } else if (user?.role === "owner") {
        router.replace("/owner/dashboard");
      } else {
        router.replace("/user/dashboard");
      }
    }
  }, [token, user, isHydrated, router]);

  // ⛔ wait until auth loads
  if (!isHydrated) return null;

  return children;
}