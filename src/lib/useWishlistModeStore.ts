"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistModeState = {
  wishlistMode: boolean;
  setWishlistMode: (mode: boolean) => void;
};

export const useWishlistModeStore = create<WishlistModeState>()(
  persist(
    (set) => ({
      wishlistMode: false,
      setWishlistMode: (wishlistMode: boolean) => set({ wishlistMode }),
    }),
    {
      name: "wishlist-mode-storage",
    }
  )
);
