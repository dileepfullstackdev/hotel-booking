"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function RoleProtectedRoute({ children, allowedRoles }) {
  const router = useRouter();
  const { token, user, isHydrated } = useAuthStore();

  useEffect(() => {
    if (!isHydrated) return;

    // 🔐 Not logged in
    if (!token) {
      router.replace("/login");
      return;
    }

    // ❌ Role not allowed
    if (!allowedRoles.includes(user?.role)) {
      // redirect based on role
      if (user?.role === "admin") {
        router.replace("/admin/dashboard");
      } else if (user?.role === "owner") {
        router.replace("/owner/dashboard");
      } else {
        router.replace("/user/dashboard");
      }
      return;
    }

    // ⏳ Owner not approved
    if (user?.role === "owner" && user?.status !== "approved") {
      router.replace("/pending-approval");
    }

  }, [token, user, isHydrated, router, allowedRoles]);

  // ⛔ Wait for auth load
  if (!isHydrated) return null;

  // ⛔ Block rendering
  if (!token) return null;

  if (!allowedRoles.includes(user?.role)) return null;

  return <>{children}</>;
}