"use client";

import ArticleCard from "@/components/ArticleCard";
import { useEffect, useState } from "react";

type ArticleType = {
  title: string;
  content: string;
  slug: string;
  author: string;
  created: string;
  objectId: string;
};

const Articles = () => {
  const token = localStorage.getItem("user-token");
  const ownerId = localStorage.getItem("user-id");
  const [data, setData] = useState<ArticleType[] | null>(null);

  useEffect(() => {
    const initialFetch = async () => {
      console.log(ownerId);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/data/articles?where=ownerId%20%3D%20'${ownerId}'`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = (await res.json()) as ArticleType[];

      console.log(data);
      const reversedOrderData = data.sort(
        (a, b) => Number(b.created) - Number(a.created)
      );
      setData(reversedOrderData);
    };
    initialFetch();
  }, []);

  if (data?.length === 0) return <p>No articles found. try create one</p>;

  return (
    <div className="flex gap-5 flex-col">
      {data?.map((article) => {
        const date = new Date(article.created);
        return (
          <ArticleCard
            key={article.slug}
            author={article.author}
            content={article.content}
            created={date.toLocaleTimeString()}
            title={article.title}
            slug={article.objectId}
          />
        );
      })}
    </div>
  );
};

export default Articles;
