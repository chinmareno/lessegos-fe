"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CategoryFilter from "../ProductFilterDesktop/CategoryFilter";
import SizeFilter from "../ProductFilterDesktop/SizeFilter";
import { categories } from "@/data/categories";

type Props = {
  category: string;
  setCategory: (cat: string) => void;
  selectedTopsSize: string[];
  setSelectedTopsSize: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBottomsSize: string[];
  setSelectedBottomsSize: React.Dispatch<React.SetStateAction<string[]>>;
  filteredProductsLength: number;
};

export default function ProductFilterMobile({
  category,
  selectedBottomsSize,
  selectedTopsSize,
  setCategory,
  setSelectedBottomsSize,
  setSelectedTopsSize,
  filteredProductsLength,
}: Props) {
  const handleClearFilters = () => {
    setCategory("All");
    setSelectedTopsSize([]);
    setSelectedBottomsSize([]);
  };

  const topsSize = categories.tops.includes(category);
  const bottomsSize = categories.bottoms.includes(category);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="none"
          className="w-40 py-2 border-[1.5px] bg-white text-black justify-between font-medium cursor-pointer rounded-none text-sm"
        >
          <span className="text-black">Filter</span>
          <span className="text-muted-foreground font-sans text-xs">
            {filteredProductsLength} Results
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="fixed right-0 top-1/2 h-2/3 w-3/7 min-w-xs max-w-sm max-h-96 rounded-none p-0 flex flex-col">
        <DialogHeader className="flex flex-row justify-between items-center pt-4 pb-6 mx-4 border-b-4 border-b-black">
          <DialogTitle>Filter</DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto">
          <Accordion type="single" collapsible>
            <AccordionItem className="px-4" value="category">
              <AccordionTrigger>
                <div>
                  <h3>Category</h3>
                  <span
                    className={`text-muted-foreground transition-opacity duration-500 ${
                      category ? "opacity-100" : "opacity-0 invisible "
                    }`}
                  >
                    {category || "_"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2">
                <CategoryFilter category={category} setCategory={setCategory} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="px-4" value="size">
              <AccordionTrigger>
                <div>
                  <h3>Size</h3>
                  <span
                    className={`text-muted-foreground transition-opacity duration-500 ${
                      category ? "opacity-100" : "opacity-0 invisible "
                    }`}
                  >
                    {topsSize && selectedTopsSize.length + " Selected"}
                    {bottomsSize && selectedBottomsSize.length + " Selected"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2">
                <SizeFilter
                  category={category}
                  selectedTopsSize={selectedTopsSize}
                  setSelectedTopsSize={setSelectedTopsSize}
                  selectedBottomsSize={selectedBottomsSize}
                  setSelectedBottomsSize={setSelectedBottomsSize}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex mt-auto gap-2 py-4 px-2 border-t-2">
          <Button
            onClick={handleClearFilters}
            variant="outline"
            className="flex-1"
          >
            Clear filters
          </Button>
          <DialogClose asChild>
            <Button
              variant="none"
              className="flex-1 bg-black text-white rounded-none hover:bg-gray-900"
            >
              Apply
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
