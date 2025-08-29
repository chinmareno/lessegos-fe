"use client";
import Footer from "@/components/Footer";
import { handleLogout } from "@/lib/handleLogout";
import { useAuthStore } from "@/lib/useAuthStore";
import { useWishlistModeStore } from "@/lib/useWishlistModeStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const { setWishlistMode, wishlistMode } = useWishlistModeStore();
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

  useEffect(() => {
    if ((wishlistMode && pathname !== "/products") || !userId)
      setWishlistMode(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, userId]);

  return (
    <div className="pt-[121px] lg:pt-[192px]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
