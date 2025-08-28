"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CategoryFilter from "./CategoryFilter";
import SizeFilter from "./SizeFilter";
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

export default function Filters({
  category,
  setCategory,
  selectedTopsSize,
  setSelectedTopsSize,
  selectedBottomsSize,
  setSelectedBottomsSize,
  filteredProductsLength,
}: Props) {
  const topsSize = categories.tops.includes(category);
  const bottomsSize = categories.bottoms.includes(category);

  return (
    <div className="sticky left-0 top-20 flex">
      <Accordion type="single" collapsible className="w-56 rounded-md">
        <div className="text-muted-foreground font-sans mb-6 pt-2">
          {filteredProductsLength} Results
        </div>
        <hr className="bg-gray-300 py-[0.5px]" />

        {/* Category */}
        <AccordionItem value="category">
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
          <AccordionContent className="max-h-64 overflow-y-auto">
            <CategoryFilter category={category} setCategory={setCategory} />
          </AccordionContent>
        </AccordionItem>

        {/* Size */}
        <AccordionItem value="size">
          <AccordionTrigger className="font-semibold">
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
          <AccordionContent className="max-h-64 overflow-y-auto">
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
  );
}
