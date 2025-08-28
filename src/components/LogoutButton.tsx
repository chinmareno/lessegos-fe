"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      localStorage.removeItem("user-id");

      document.cookie = `user-auth-cookie=; path=/; max-age=0; Secure; SameSite=Strict`;

      router.push("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("user-id");

    const allCookies = document.cookie;

    const cookies = Object.fromEntries(
      allCookies.split("; ").map((c) => {
        const [key, value] = c.split("=");
        return [key, decodeURIComponent(value)];
      })
    );

    if (!cookies["user-auth-cookie"] || !userId) {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <button onClick={handleLogout}>Log Out</button>;
};
