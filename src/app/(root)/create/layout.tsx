"use client";

import { useAuthStore } from "@/lib/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const CreateArticleLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { userId } = useAuthStore();
  const userAuthCookie = Cookies.get("user-auth-cookie");
  useEffect(() => {
    if (!userId || !userAuthCookie) {
      router.push("/signin");
    }
  }, [userId, userAuthCookie]);

  return <div>{children}</div>;
};

export default CreateArticleLayout;
