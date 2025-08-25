import type { Metadata } from "next";
import { Lora, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LESSEGOS – Kaos Unisex Oversized Indonesia | Nyaman & Stylish",
  description:
    "LESSEGOS menghadirkan kaos oversized unisex berkualitas untuk gaya kasual sehari-hari. Temukan desain simpel dan nyaman, serta belanja koleksi terbatas kami langsung melalui Shopee atau TikTok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
