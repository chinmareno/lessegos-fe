import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lessegos.vercel.app"),
  title: "LESSEGOS – Kaos Unisex Oversized Indonesia | Nyaman & Stylish",
  description:
    "LESSEGOS menghadirkan kaos oversized unisex berkualitas untuk gaya kasual sehari-hari. Temukan desain simpel dan nyaman, serta belanja koleksi terbatas kami langsung melalui Shopee atau Tokopedia.",
  keywords: [
    // Primary brand & product
    "lessegos",
    "lesegos",
    "lessego",
    "kaos oversized indonesia",
    "streetwear indonesia",

    // Core products
    "kaos oversized",
    "oversized tee",
    "unisex clothing",

    // Market positioning
    "brand lokal",
    "streetwear lokal",
    "fashion indonesia",

    // Product qualities
    "kaos berkualitas",
    "kaos nyaman",
    "kaos katun",

    // Target audience
    "streetwear remaja",
    "fashion anak muda",
  ],
  authors: [{ name: "LESSEGOS" }],
  creator: "LESSEGOS",
  publisher: "LESSEGOS",
  themeColor: "#ffffff",
  openGraph: {
    title: "LESSEGOS – Kaos Unisex Oversized Indonesia | Nyaman & Stylish",
    description:
      "LESSEGOS menghadirkan kaos oversized unisex berkualitas untuk gaya kasual sehari-hari. Temukan desain simpel dan nyaman, serta belanja koleksi terbatas kami langsung melalui Shopee atau Tokopedia.",
    url: "https://lessegos.vercel.app",
    siteName: "LESSEGOS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "LESSEGOS - Kaos Unisex Oversized Indonesia",
      },
      {
        url: "/logo.jpg",
        width: 800,
        height: 418,
        alt: "LESSEGOS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LESSEGOS – Kaos Unisex Oversized Indonesia | Nyaman & Stylish",
    description:
      "LESSEGOS menghadirkan kaos oversized unisex berkualitas untuk gaya kasual sehari-hari. Temukan desain simpel dan nyaman, serta belanja koleksi terbatas kami langsung melalui Shopee atau Tokopedia.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${lora.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Toaster expand visibleToasts={2} richColors />
        <Analytics />
      </body>
    </html>
  );
}
