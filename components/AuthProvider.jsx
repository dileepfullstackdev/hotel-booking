"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

export default function AuthProvider({ children }) {
  const loadUser = useAuthStore((state) => state.loadUser);

  useEffect(() => {
    loadUser();
  }, []);

  return children;
}