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
import { ArticleType, fetchArticles } from "@/lib/fetchArticles";
import { useArticlesStore } from "@/lib/useArticlesStore";
import Link from "next/link";
import { toast } from "sonner";
import { useAuth } from "@/lib/useAuth";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";

type Inputs = {
  author: string;
  title: string;
  content: string;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { setArticles } = useArticlesStore();
  const { userId, redirectToSignIn } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!userId) return redirectToSignIn();
    setIsSubmitting(true);
    const dataWithSlug = {
      ...data,
      ownerId: userId,
    };
    try {
      console.log(dataWithSlug);
      const res = await axiosInstance.post("/article", {
        ...dataWithSlug,
      });
      const article = res.data as ArticleType;
      const freshArticle = await fetchArticles();

      setArticles(freshArticle);
      router.push("/articles/" + article.id);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create article. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Create New Article
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-5">
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input
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
                id="content"
                rows={6}
                placeholder="Write your content here..."
                className="resize-y overflow-auto"
                {...register("content", { required: "Content is required" })}
              />
              {errors.content && (
                <p className="text-xs text-red-500">{errors.content.message}</p>
              )}
            </div>
          </CardContent>

          <CardFooter className="mt-6">
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full cursor-pointer"
            >
              Create Article
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="mt-6">
        <Link
          href="/articles"
          className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Back to Articles
        </Link>
      </div>
    </div>
  );
}
