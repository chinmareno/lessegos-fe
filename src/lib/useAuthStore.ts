"use client";

import { create } from "zustand";
import Cookies from "js-cookie";
import { persist } from "zustand/middleware";

type AuthState = {
  userId: string | null;
  setUserId: (id: string) => void;
  clearUserId: () => void;
};

const isProduction = process.env.NODE_ENV === "production";

const initialUserId = Cookies.get("user-auth-cookie") || null;

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userId: initialUserId,
      setUserId: (id) => {
        Cookies.set("user-auth-cookie", id, {
          expires: 7,
          sameSite: "Lax",
          secure: isProduction,
        });
        set({ userId: id });
      },
      clearUserId: () => {
        Cookies.remove("user-auth-cookie");
        set({ userId: null });
      },
    }),
    { name: "user-auth-storage" }
  )
);
