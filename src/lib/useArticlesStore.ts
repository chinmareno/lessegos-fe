// store/articleStore.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ArticleType } from "./fetchArticles";

type ArticleState = {
  articles: ArticleType[];
  setArticles: (article: ArticleType[]) => void;
};

export const useArticlesStore = create<ArticleState>()(
  persist(
    (set) => ({
      articles: [],
      setArticles: (articles) => set({ articles }),
    }),
    {
      name: "articles-storage",
    }
  )
);
