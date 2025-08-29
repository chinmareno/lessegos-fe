"use client";
import Footer from "@/components/Footer";
import { handleLogout } from "@/lib/handleLogout";
import { useAuthStore } from "@/lib/useAuthStore";
import { useEffect } from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { userId, clearUserId } = useAuthStore();
  useEffect(() => {
    const allCookies = document.cookie;

    const cookies = Object.fromEntries(
      allCookies.split("; ").map((c) => {
        const [key, value] = c.split("=");
        return [key, decodeURIComponent(value)];
      })
    );

    if (!cookies["user-auth-cookie"] || !userId) {
      clearUserId();
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-[121px] lg:pt-[192px]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
