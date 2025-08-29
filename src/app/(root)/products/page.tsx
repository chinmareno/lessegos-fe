"use client";

import { useEffect, useState } from "react";
import ProductCard from "./_components/ProductCard";
import ProductFilterDesktop from "./_components/ProductFilterDesktop";
import SortDropdown from "./_components/SortDropDown";
import ProductFilterMobile from "./_components/ProductFilterMobile";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  ArrowUpFromDot,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { useAuthStore } from "@/lib/useAuthStore";
import { useWishlistModeStore } from "../../../lib/useWishlistModeStore";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 36;

export type SortOption =
  | "Price Low to High"
  | "Price High to Low"
  | "Recommended";

export type Wishlist = {
  productName: string;
  ownerId: string;
  objectId: string;
};

const ProductsPage = () => {
  const [category, setCategory] = useState("All");
  const [selectedTopsSize, setSelectedTopsSize] = useState<string[]>([]);
  const [selectedBottomsSize, setSelectedBottomsSize] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("Recommended");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(0);
  const { wishlistMode } = useWishlistModeStore();
  const [wishlist, setWishlist] = useState<Wishlist[]>([]);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPage = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const router = useRouter();
  const { userId } = useAuthStore();

  useEffect(() => {
    (async function fetchWishlist() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/data/wishlist?where=ownerId%3D'${userId}'`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        setWishlist(await res.json());
      } else {
        toast.error("Failed to fetch wishlist");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (category === "") return;
    setCurrentPage(0);
    window.scrollTo({ top: 0, behavior: "auto" });

    let updatedProducts = products;

    if (category && category !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );

      if (selectedTopsSize.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          product.sizes.some((size) => selectedTopsSize.includes(size))
        );
      }

      if (selectedBottomsSize.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          product.sizes.some((size) => selectedBottomsSize.includes(size))
        );
      }
    }

    if (sortOption === "Price Low to High") {
      updatedProducts = [...updatedProducts].sort((a, b) => {
        const aPrice = a.discountPrice ?? a.price;
        const bPrice = b.discountPrice ?? b.price;

        return aPrice - bPrice;
      });
    }

    if (sortOption === "Price High to Low") {
      updatedProducts = [...updatedProducts].sort((a, b) => {
        const aPrice = a.discountPrice ?? a.price;
        const bPrice = b.discountPrice ?? b.price;

        return bPrice - aPrice;
      });
    }

    if (wishlistMode) {
      const wishlistProducts = updatedProducts.filter((item) => {
        const wishlistProductName = wishlist.map((w) => w.productName);
        return wishlistProductName.includes(item.name);
      });
      setFilteredProducts(wishlistProducts);
    } else {
      setFilteredProducts(updatedProducts);
    }
  }, [
    category,
    selectedTopsSize,
    selectedBottomsSize,
    sortOption,
    wishlistMode,
    wishlist,
  ]);

  const handleWishlistClick = async (productName: string) => {
    if (!userId) return router.push("/signin");

    const data = { productName, ownerId: userId };

    const foundedWishlist = wishlist.find(
      (item) => item.productName === productName
    );

    const isAdding = !foundedWishlist;

    if (isAdding) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Added to wishlist");
    } else {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/wishlist`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objectId: foundedWishlist.objectId }),
      });
      toast.success("Removed from wishlist");
    }
    (async function fetchWishlist() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/data/wishlist?where=ownerId%3D'${userId}'`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        setWishlist(await res.json());
      } else {
        toast.error("Failed to fetch wishlist");
      }
    })();
  };

  return (
    <div className="mt-7 mb-12 mx-[calc(100vw*1/20)] lg:mx-[calc(100vw*1/10)]">
      <h2 className="pb-6 uppercase font-thin font-sans text-red-500 text-2xl">
        <span>{wishlistMode ? "Wishlist" : "Product"}</span>
        <span
          className={`text-black transition-opacity ml-2 duration-500 ${
            category ? "opacity-100" : "opacity-0"
          }`}
        >
          {category === "All" ? "" : category}
        </span>
      </h2>
      <hr className="bg-gray-300 py-[0.5px] mb-8" />

      <div className="flex">
        <div className="mr-14 hidden lg:block">
          <ProductFilterDesktop
            selectedTopsSize={selectedTopsSize}
            setSelectedTopsSize={setSelectedTopsSize}
            selectedBottomsSize={selectedBottomsSize}
            setSelectedBottomsSize={setSelectedBottomsSize}
            category={category}
            setCategory={setCategory}
            filteredProductsLength={filteredProducts.length}
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="text-muted-foreground w-full flex lg:block sticky z-20 top-36 lg:top-20 font-sans text-end mb-4">
            <div className="lg:hidden">
              <ProductFilterMobile
                selectedTopsSize={selectedTopsSize}
                setSelectedTopsSize={setSelectedTopsSize}
                selectedBottomsSize={selectedBottomsSize}
                setSelectedBottomsSize={setSelectedBottomsSize}
                category={category}
                setCategory={setCategory}
                filteredProductsLength={filteredProducts.length}
              />
            </div>
            <div className="ml-auto lg:ml-0">
              <SortDropdown
                sortOption={sortOption}
                setSortOption={setSortOption}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-x-7 gap-y-16">
            {filteredProducts.length === 0 ? (
              <div className="col-span-3 flex flex-col items-center justify-center mt-10">
                <p className="text-gray-500 text-center">
                  No products match your filters.
                </p>
              </div>
            ) : (
              currentProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  material={product.material}
                  price={product.price}
                  discountPrice={product.discountPrice}
                  sizes={product.sizes}
                  imageUrl={`/products/${product.name}.webp`}
                  hoverImageUrl={`/products/${product.name}2.webp`}
                  placeholderLogo="/logo.jpg"
                  productLink={product.productLink}
                  wishlist={
                    !!wishlist.find((item) => item.productName === product.name)
                  }
                  wishlistClick={handleWishlistClick}
                />
              ))
            )}

            <div className="flex flex-col gap-6 col-span-2 md:col-span-4 lg:col-span-3 w-full -mt-3">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                variant="none"
                className="cursor-pointer mx-auto bg-white hover:bg-gray-100 hover:scale-110 border-black border  rounded-full p-5 "
              >
                <ArrowUpFromDot className="w-4 h-4" />
              </Button>
              <hr />

              <div className="flex px-7 justify-center items-center">
                <Button
                  disabled={currentPage === 0}
                  onClick={() => {
                    setCurrentPage(0);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  variant="none"
                  className="cursor-pointer"
                >
                  <ChevronFirst />
                </Button>
                <Button
                  disabled={currentPage === 0}
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  variant="none"
                  className="md:w-20 group hover:pr-7 ml-10 cursor-pointer transition-all duration-300"
                >
                  <ChevronLeft />
                  <span className="group-hover:opacity-70 hidden md:block">
                    Previous
                  </span>
                </Button>

                <p className="text-center text-sm md:text-base px-10 md:px-0 md:mx-auto lg:text-lg font-medium whitespace-nowrap">
                  {filteredProducts.length === 0
                    ? "Page Not Found"
                    : `Page ${currentPage + 1} of ${totalPage}`}
                </p>

                <Button
                  disabled={currentPage === totalPage - 1 || totalPage === 0}
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  variant="none"
                  className="md:w-20 group hover:pl-7 mr-10 cursor-pointer transition-all duration-300"
                >
                  <span className="group-hover:opacity-70 hidden md:block">
                    Next
                  </span>
                  <ChevronRight />
                </Button>
                <Button
                  disabled={currentPage === totalPage - 1 || totalPage === 0}
                  onClick={() => {
                    setCurrentPage(totalPage - 1);
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  variant="none"
                  className="cursor-pointer"
                >
                  <ChevronLast />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
