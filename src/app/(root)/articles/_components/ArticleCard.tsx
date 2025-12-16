import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  content: string;
  author: string;
  created: string;
  id: string;
};

export default function ArticleCard({
  author,
  content,
  created,
  title,
  id,
}: Props) {
  return (
    <div className="h-full min-w-72 rounded-xl bg-white shadow-sm overflow-hidden border hover:bg-gray-100 transition">
      <Link
        href={`/articles/${id}`}
        scroll={false}
        prefetch={false}
        className="flex flex-col h-full"
      >
        <h2 className="px-4 py-3 text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl line-clamp-2">
          {title}
        </h2>

        <div className="px-4 py-3 text-sm text-gray-600 sm:text-base flex-1">
          {content.slice(0, 100)}
          {content.length > 100 && "..."}
        </div>

        <div className="px-4 py-3 text-xs text-gray-500 border-t sm:text-sm flex justify-between">
          <span className="font-semibold mr-1">{author}</span>
          <span>{created}</span>
        </div>
      </Link>
    </div>
  );
}
