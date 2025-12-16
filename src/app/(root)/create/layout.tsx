"use client";

import { useEffect } from "react";
import { useAuth } from "@/lib/useAuth";

const CreateArticleLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId, redirectToSignIn, isLoading } = useAuth();

  useEffect(() => {
    if (!userId && !isLoading) redirectToSignIn();
  }, [userId, isLoading, redirectToSignIn]);

  return <div>{children}</div>;
};

export default CreateArticleLayout;
