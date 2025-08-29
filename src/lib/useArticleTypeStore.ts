"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ArticleCategory = "official" | "community" | "mine";

type ArticleTypeState = {
  articleType: ArticleCategory;
  setArticleType: (type: ArticleCategory) => void;
};

export const useArticleTypeStore = create<ArticleTypeState>()(
  persist(
    (set) => ({
      articleType: "official",
      setArticleType: (type) => set({ articleType: type }),
    }),
    {
      name: "article-type-storage",
    }
  )
);
