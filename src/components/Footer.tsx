"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SiShopee } from "react-icons/si";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { toast } from "sonner";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    toast.success("Subscribed!", {
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-100 mt-auto pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-semibold">Our Social</h2>
          <div className="flex gap-9 mt-8 items-center">
            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <Link target="_blank" href="https://www.tiktok.com/@lessegos">
                  <FaTiktok className="w-8 h-8 p-1 rounded-md" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="mb-3.5">
                <p>Tiktok</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/_lessegos_/"
                >
                  <FaInstagram className="w-8 h-8 p-0.5 bg-pink-500 text-white rounded-md" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="mb-3.5">
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-semibold">Our Stores</h2>
          <div className="flex gap-6 mt-4 items-center">
            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <Link target="_blank" href="https://shopee.co.id/lessegos">
                  <SiShopee className="w-8 h-8 bg-orange-500 p-1 rounded-md" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="mb-3.5">
                <p>Shopee</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <Link
                  target="_blank"
                  href="https://www.tokopedia.com/lessegosapparel"
                >
                  <div className="w-14 h-14 relative">
                    <Image
                      src="/tokopedialogo.png"
                      alt="Tokopedia"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tokopedia</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Other Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Others</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-gray-300 transition">
                Articles
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Get the latest updates and promotions</p>
          <form
            className="flex w-full max-w-xs gap-2"
            onSubmit={handleSubscribe}
          >
            <Input
              placeholder="Your email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-black hover:bg-primary/90 cursor-pointer"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LESSEGOS. All rights reserved.
      </div>
    </footer>
  );
}
