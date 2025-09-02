"use client";
import Footer from "@/components/Footer";
import { useWishlistModeStore } from "@/lib/useWishlistModeStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuthCookie } from "@/lib/useAuthCookie";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const { setWishlistMode, wishlistMode } = useWishlistModeStore();
  const { authCookie } = useAuthCookie();

  useEffect(() => {
    if ((wishlistMode && pathname !== "/products") || !authCookie)
      setWishlistMode(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, authCookie]);

  return (
    <div className="pt-[121px] lg:pt-[192px]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
