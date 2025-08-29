"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { LogOut, Menu, Star, UserRound } from "lucide-react";
import { useAuthStore } from "@/lib/useAuthStore";
import { handleLogout } from "@/lib/handleLogout";
import { useRouter } from "next/navigation";
import { useWishlistModeStore } from "@/lib/useWishlistModeStore";

const Navbar = () => {
  const navItems = ["home", "products", "about", "articles"] as const;

  const promotions = [
    "🎉 Promo: Free shipping for orders above 200k!",
    "🔥 Limited Edition Oversized Tees – Shop Now!",
    "💳 Secure checkout via Shopee & TikTok Shop!",
    "🚀 Fast delivery across Indonesia!",
  ];

  const router = useRouter();

  const [currentPromo, setCurrentPromo] = useState(0);
  const [fade, setFade] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userId, clearUserId } = useAuthStore();
  const { setWishlistMode, wishlistMode } = useWishlistModeStore();

  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentPromo((prev) => (prev + 1) % promotions.length);
        setFade(true);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > navbarHeight) {
        setShowNavbar(false);
        setIsMobileMenuOpen(false);
      } else setShowNavbar(true);

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, navbarHeight]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full md:h-[129px] bg-white shadow z-20 transform transition-transform duration-300 ${
          showNavbar ? "lg:translate-y-0" : "lg:-translate-y-full"
        }`}
      >
        <div className="w-full bg-slate-200 text-black text-center py-1 text-sm">
          <span
            className={`transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {promotions[currentPromo]}
          </span>
        </div>

        <div className="relative">
          {userId ? (
            <button
              className="lg:hidden absolute flex items-center gap-2 bg-amber-200 top-4 left-4 z-20"
              onClick={async () => {
                await handleLogout();
                clearUserId();
                router.push("/signin");
              }}
            >
              <LogOut className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          ) : (
            <Link
              href="/signin"
              className="lg:hidden absolute flex items-center gap-2 top-4 left-4 z-20"
            >
              <UserRound className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          )}
          <Link
            href="/"
            className="flex w-fit flex-col mt-2 lg:my-[15] mx-auto items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.jpg"
              alt="brand logo"
              width={160}
              height={60}
              className="object-cover w-[120px] sm:w-[160px]"
              priority
            />
            <h2 className="text-center text-gray-700 text-sm sm:text-base font-thin">
              Wear Less.{" "}
              <span className="font-bold text-primary text-base sm:text-lg">
                Live More.
              </span>
            </h2>
          </Link>
          <div className="lg:hidden absolute flex items-center top-4 right-1 sm:right-4 z-20">
            <button
              onClick={() => {
                setWishlistMode(true);
                router.push("/products");
              }}
              className="mr-2.5 md:mr-7"
            >
              <Star className="w-5 h-5 md:w-6 md:h-6 text-black " />
            </button>
            <button
              onClick={toggleMobileMenu}
              className=" p-2"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </div>
          <hr className="bg-black py-1 mt-4 lg:mt-0" />
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto bg-black/10 backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "home" ? "/" : "/" + item}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 capitalize font-medium"
                    onClick={() => {
                      if (item === "products" && wishlistMode === true)
                        setWishlistMode(false);
                      closeMobileMenu();
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Wear Less.{" "}
              <span className="font-bold text-primary">Live More.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
