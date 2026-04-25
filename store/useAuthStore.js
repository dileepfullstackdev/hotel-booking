import { create } from "zustand";
export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,

  // 🔐 LOGIN
  login: (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    set({ user: userData, token });
  },

  // 🚪 LOGOUT
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({ user: null, token: null });
  },

  // 🔄 INIT AUTH (on app load)
isHydrated: false,
initAuth: () => {
  try {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
        isHydrated: true,
      });
    } else {
      set({ token: null, user: null, isHydrated: true });
    }
  } catch {
    set({ token: null, user: null, isHydrated: true });
  }
},

  // 🎯 ROLE HELPERS
  isUser: () => get().user?.role === "user",
  isOwner: () => get().user?.role === "owner",
  isAdmin: () => get().user?.role === "admin",

  // ✅ STATUS HELPERS
  isApproved: () => get().user?.status === "approved",
}));
