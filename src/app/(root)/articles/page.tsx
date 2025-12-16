"use client";

import ArticleCard from "@/app/(root)/articles/_components/ArticleCard";
import { ArticleType, fetchArticles } from "@/lib/fetchArticles";
import { useArticlesStore } from "@/lib/useArticlesStore";
import {
  ArticleCategory,
  useArticleTypeStore,
} from "@/lib/useArticleTypeStore";
import { ChevronsDown, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/useAuth";

type SortBy = "newest" | "oldest";

const articleTypes = [
  { label: "Official", value: "official" },
  { label: "Community", value: "community" },
  { label: "My Articles", value: "mine" },
];

const Articles = () => {
  const { articleType, setArticleType } = useArticleTypeStore();
  const { articles, setArticles } = useArticlesStore();
  const { userId } = useAuth();
  const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("newest");

  useEffect(() => {
    if (articles.length !== 0) return;
    (async function () {
      const res = await fetchArticles();
      setArticles(res);
      setFilteredArticles(res);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let updatedArticles = [...articles];

    updatedArticles = articles?.filter((article) => {
      if (articleType === "official")
        return article.ownerId === process.env.NEXT_PUBLIC_SUPER_ADMIN_OWNER_ID;
      if (articleType === "community")
        return article.ownerId !== process.env.NEXT_PUBLIC_SUPER_ADMIN_OWNER_ID;
      if (articleType === "mine") return article.ownerId === userId;
    });

    updatedArticles.sort((a, b) => {
      const articleA = new Date(a.created).getTime();
      const articleB = new Date(b.created).getTime();
      if (sortBy === "newest") {
        return articleB - articleA;
      } else {
        return articleA - articleB;
      }
    });

    setFilteredArticles(updatedArticles);
  }, [articleType, articles, userId, sortBy]);

  return (
    <div className="flex flex-col gap-5 mt-10 mb-20">
      <div className="flex justify-center w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="justify-between cursor-pointer min-w-[150px]">
              Sort: {sortBy === "newest" ? "Newest" : "Oldest"}
              <ChevronsDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[150px]">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setSortBy("newest")}
            >
              Newest
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setSortBy("oldest")}
            >
              Oldest
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="md:hidden flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="min-w-[150px] justify-between">
              {articleTypes.find((t) => t.value === articleType)?.label}
              <ChevronsDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[150px]">
            {articleTypes.map((type) => (
              <DropdownMenuItem
                key={type.value}
                onClick={() => setArticleType(type.value as ArticleCategory)}
              >
                {type.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-4">
        {articleTypes.map((type) => (
          <button
            key={type.value}
            className={`w-[150px] py-2 rounded-full cursor-pointer border transition ${
              articleType === type.value
                ? "bg-primary text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => setArticleType(type.value as ArticleCategory)}
          >
            {type.label}
          </button>
        ))}
      </div>
      {filteredArticles?.length === 0 ? (
        articleType === "official" ? (
          <div className="mx-auto text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              No Official Articles Found
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Stay tuned — our team will publish new updates soon.
            </p>
          </div>
        ) : (
          <div className="mx-auto text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              {articleType === "community"
                ? "No Community Articles Yet"
                : "You haven't written any articles yet"}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {articleType === "community"
                ? "Be the first to share your thoughts and experiences."
                : "Start sharing your knowledge and insights with the community."}
            </p>
            <Link href="/create">Create an Article</Link>
          </div>
        )
      ) : (
        <div className="max-w-7xl mx-auto grid gap-8 px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[70vh] pb-4">
          {articleType === "mine" && (
            <div className="flex justify-center col-span-full">
              <Link
                href="/create"
                className="px-6 py-2  bg-primary text-white rounded-full shadow hover:bg-primary/90 transition"
              >
                <span className="md:hidden">
                  <Plus className="w-4 h-4" />
                </span>
                <span className="hidden md:block"> Create Article</span>
              </Link>
            </div>
          )}
          {filteredArticles?.map((article) => {
            const date = new Date(article.created);
            return (
              <ArticleCard
                key={article.author + article.created}
                author={article.author}
                content={article.content}
                created={date.toLocaleDateString()}
                title={article.title}
                id={article.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Articles;
