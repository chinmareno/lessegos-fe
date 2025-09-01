"use client";

import { create } from "zustand";
import { ArticleType } from "./fetchArticles";

type ArticleState = {
  articles: ArticleType[];
  setArticles: (article: ArticleType[]) => void;
};

export const useArticlesStore = create<ArticleState>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));
