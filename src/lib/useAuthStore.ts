"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  userId: string | null;
  setUserId: (id: string) => void;
  clearUserId: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userId: null,
      setUserId: (id) => set({ userId: id }),
      clearUserId: () => set({ userId: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
