"use client";
import { ArticleType, fetchArticles } from "@/lib/fetchArticles";
import { useArticlesStore } from "@/lib/useArticlesStore";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthCookie } from "@/lib/useAuthCookie";

export default function Slug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { articles, setArticles } = useArticlesStore();
  const [selectedArticle, setSelectedArticle] = useState<
    ArticleType | undefined | null
  >(null);

  const { authCookie } = useAuthCookie();
  const router = useRouter();

  useEffect(() => {
    if (articles.length !== 0) {
      const currArticle = articles.find((article) => article.objectId === slug);
      return setSelectedArticle(currArticle);
    }
    (async function () {
      const res = await fetchArticles();
      setArticles(res);
      const currArticle = res.find((article) => article.objectId === slug);
      setSelectedArticle(currArticle);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedArticle) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-white shadow-md rounded-2xl p-8 border text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn’t find the article you’re looking for. It may have
            been deleted or the link is invalid.
          </p>
          <Link
            href="/articles"
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const date = new Date(selectedArticle.created);

  const handleDeleteArticle = async () => {
    const data = {
      objectId: slug,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/articles`,
      {
        method: "DELETE",
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      const freshArticles = await fetchArticles();
      setArticles(freshArticles);
      router.push("/articles");
    } else {
      toast.error("Failed to delete the article. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white shadow-md rounded-2xl p-6 border">
        {selectedArticle.ownerId === authCookie && (
          <div className="flex justify-end gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <button className="cursor-pointer">
                  <Trash2 color="#f50000" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Article</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this article? This action
                    cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-end gap-2">
                  <DialogClose className="cursor-pointer" asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    className="cursor-pointer"
                    variant="destructive"
                    onClick={handleDeleteArticle}
                  >
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Link href={`/create/${slug}`} className="text-sm">
              <SquarePen />
            </Link>
          </div>
        )}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedArticle.title}
          </h1>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-6 border-b pb-3">
          <div className="flex ">
            <span className="font-medium">{selectedArticle.author}</span>
          </div>
          <span>{date.toLocaleDateString()}</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-8">
          {selectedArticle.content}
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="/articles"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Back to Articles
        </Link>
      </div>
    </div>
  );
}
