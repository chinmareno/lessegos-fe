"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthCookie } from "@/lib/useAuthCookie";

const CreateArticleLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authCookie } = useAuthCookie();
  useEffect(() => {
    if (!authCookie) {
      router.push("/signin");
    }
  }, [authCookie]);

  return <div>{children}</div>;
};

export default CreateArticleLayout;
