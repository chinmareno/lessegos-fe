import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  content: string;
  author: string;
  created: string;
  slug: string;
};

export default function ArticleCard({
  author,
  content,
  created,
  title,
  slug,
}: Props) {
  return (
    <div className="divide-y hover:bg-gray-100 max-w-3xl divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm">
      <Link href={`articles/${slug}`}>
        <h2 className="px-4 py-5 text-3xl sm:px-6">{title}</h2>
        <div className="px-4 py-5 sm:p-6">
          {content.slice(0, 20)}
          {content.length > 20 && "..."}
        </div>
        <div className="px-4 py-4 sm:px-6">
          {author}-{created}
        </div>
      </Link>
    </div>
  );
}
