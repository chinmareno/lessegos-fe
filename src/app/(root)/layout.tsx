"use client";
import Footer from "@/components/Footer";
import { useWishlistModeStore } from "@/lib/useWishlistModeStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/lib/useAuth";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const { setWishlistMode, wishlistMode } = useWishlistModeStore();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if ((wishlistMode && pathname !== "/products") || !isAuthenticated)
      setWishlistMode(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isAuthenticated]);

  return (
    <div className="pt-[121px] lg:pt-[192px]">
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
