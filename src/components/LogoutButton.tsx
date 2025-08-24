"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const LogoutButton = () => {
  const pathname = usePathname();
  const hideLogout = pathname === "/signin" || pathname === "/signup";
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
    if (!userId) {
      handleLogout();
    }
  }, []);

  return (
    <div>{!hideLogout && <button onClick={handleLogout}>Log Out</button>}</div>
  );
};
