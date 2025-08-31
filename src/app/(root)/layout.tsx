"use client";
import Footer from "@/components/Footer";
import { useAuthStore } from "@/lib/useAuthStore";
import { useWishlistModeStore } from "@/lib/useWishlistModeStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const { setWishlistMode, wishlistMode } = useWishlistModeStore();
  const { userId, setUserId } = useAuthStore();
  useEffect(() => {
    const userIdCookie = Cookies.get("user-auth-cookie");

    if (userIdCookie && !userId) {
      setUserId(userIdCookie);
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
