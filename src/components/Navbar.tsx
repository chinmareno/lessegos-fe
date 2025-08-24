"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const navItems = ["home", "products", "about", "articles"];

  // Multiple promotions
  const promotions = [
    "🎉 Promo: Free shipping for orders above 200k!",
    "🔥 Limited Edition Oversized Tees – Shop Now!",
    "💳 Secure checkout via Shopee & TikTok Shop!",
    "🚀 Fast delivery across Indonesia!",
  ];

  const [currentPromo, setCurrentPromo] = useState(0);
  const [fade, setFade] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ref to measure navbar height
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
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
        // scrolling down & past navbar height → hide
        setShowNavbar(false);
      } else {
        // scrolling up or before navbar height → show
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
      className={`fixed top-0 left-0 w-full h-[126px] bg-white shadow z-50 transform transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Promo bar */}
      <div className="w-full bg-slate-100 text-black text-center py-1 text-sm">
        <span
          className={`transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {promotions[currentPromo]}
        </span>
      </div>

      {/* Logo */}
      <Link
        href="/"
        className="flex flex-col w-fit my-[15] mx-auto items-center"
      >
        <Image
          src="/logo.jpg"
          alt="brand logo"
          width={160}
          height={60}
          className="h-[auto] object-cover w-[120px] sm:w-[160px]"
          priority
        />
        <h2 className="font-">Wear Less. Live More</h2>
      </Link>
      <hr className="bg-black py-1" />

      {/* Nav Items */}
      <div className="uppercase bg-white relative flex items-center py-4 justify-center gap-20">
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
  );
};

export default Navbar;
