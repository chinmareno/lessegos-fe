"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useArticlesStore } from "@/lib/useArticlesStore";
import { use, useEffect } from "react";
import { fetchArticles } from "@/lib/fetchArticles";
import Link from "next/link";
import { useAuth } from "@/lib/useAuth";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";

type Inputs = {
  author: string;
  title: string;
  content: string;
};

export default function Edit({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { userId, redirectToSignIn } = useAuth();
  const router = useRouter();
  const { slug } = use(params);
  const { articles, setArticles } = useArticlesStore();
  const selectedArticle = articles.find((article) => article.id === slug);

  useEffect(() => {
    if (selectedArticle && selectedArticle.ownerId !== userId) {
      router.push("/articles/" + slug);
    }
  }, [selectedArticle, userId, router, slug]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: selectedArticle?.title,
      author: selectedArticle?.author,
      content: selectedArticle?.content,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!userId) return redirectToSignIn();

    const dataWithCreated = {
      ...data,
      objectId: slug,
      ownerId: userId,
    };

    try {
      await axiosInstance.patch("/article/" + slug, {
        ...dataWithCreated,
      });

      const freshArticles = await fetchArticles();
      setArticles(freshArticles);
      router.push("/articles/" + slug);
    } catch (error) {
      toast.error("Fail to edit");
    }
  };

  useEffect(() => {
    if (articles.length !== 0) return;
    (async function () {
      const res = await fetchArticles();
      setArticles(res);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {selectedArticle ? "Edit Article" : "Article Not Found"}
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-5">
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input
                disabled={!selectedArticle}
                id="title"
                placeholder="Enter article title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-xs text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="author">Author</Label>
              <Input
                disabled={!selectedArticle}
                id="author"
                placeholder="Enter author name"
                {...register("author", { required: "Author is required" })}
              />
              {errors.author && (
                <p className="text-xs text-red-500">{errors.author.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="content">Content</Label>
              <Textarea
                disabled={!selectedArticle}
                id="content"
                rows={6}
                placeholder="Write your content here..."
                className="resize-y overflow-auto"
                {...register("content", { required: "Content is required" })}
              />
            </div>
          </CardContent>
          <CardFooter className="mt-6 gap-2">
            <Link
              href={`/articles/${slug}`}
              className="px-5 py-2 w-1/2 text-center rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Back
            </Link>
            <Button
              disabled={!selectedArticle}
              type="submit"
              className="w-1/2 cursor-pointer"
            >
              Save Article
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
