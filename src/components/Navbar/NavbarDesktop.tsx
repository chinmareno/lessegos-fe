"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navItems = ["home", "products", "about", "articles"];
const promotions = [
  "🎉 Promo: Free shipping for orders above 200k!",
  "🔥 Limited Edition Oversized Tees – Shop Now!",
  "💳 Secure checkout via Shopee & TikTok Shop!",
  "🚀 Fast delivery across Indonesia!",
];

export default function NavbarDesktop() {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [fade, setFade] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > navbarHeight) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, navbarHeight]);

  return (
    <div
      ref={navbarRef}
      className={`hidden lg:block h-[129px] fixed top-0 left-0 w-full bg-white shadow z-20 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
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
        <Link
          href="/"
          className="flex w-fit flex-col mt-2 lg:my-[15] mx-auto items-center"
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

        <hr className="bg-black py-1 mt-4 lg:mt-0" />

        <div className="flex uppercase bg-white relative items-center py-4 justify-center gap-20">
          <span className="w-full absolute z-0 bottom-0 left-0 border-b-2 border-b-gray-400" />
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : "/" + item}
              className="place-self-center z-10 relative group"
            >
              {item}
              <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 scale-x-0 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
