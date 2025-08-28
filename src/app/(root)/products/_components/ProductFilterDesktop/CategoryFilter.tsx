"use client";

import { useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categories } from "@/data/categories";

type Props = {
  category: string;
  setCategory: (cat: string) => void;
};

export default function CategoryFilter({ category, setCategory }: Props) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleValueChange = (val: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setCategory("");

    timeoutRef.current = setTimeout(() => {
      setCategory(val);
      timeoutRef.current = null;
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <RadioGroup
        value={category}
        onValueChange={handleValueChange}
        className="flex flex-col gap-0"
      >
        <Label className="flex items-center group cursor-pointer space-x-2 py-3">
          <RadioGroupItem
            className="group-hover:border-neutral-600 cursor-pointer data-[state=checked]:border-black data-[state=checked]:border-2 data-[state=checked]:bg-black"
            value="All"
          />
          All
        </Label>
        <div className="flex items-center mb-3">
          <div className="flex-grow border-t border-zinc-300"></div>
          <span className="mx-2 text-xs font-semibold uppercase text-zinc-500 tracking-wide">
            Tops
          </span>
          <div className="flex-grow border-t border-zinc-300"></div>
        </div>
        {categories["tops"].map((cat) => (
          <Label
            key={cat}
            className="flex items-center group cursor-pointer space-x-2 py-3"
          >
            <RadioGroupItem
              className="group-hover:border-neutral-600 cursor-pointer data-[state=checked]:border-black data-[state=checked]:border-2 data-[state=checked]:bg-black"
              value={cat}
            />
            {cat}
          </Label>
        ))}
        <div className="flex items-center my-3">
          <div className="flex-grow border-t border-zinc-300"></div>
          <span className="mx-2 text-xs font-semibold uppercase text-zinc-500 tracking-wide">
            Bottoms
          </span>
          <div className="flex-grow border-t border-zinc-300"></div>
        </div>

        {categories["bottoms"].map((cat) => (
          <Label
            key={cat}
            className="flex items-center group cursor-pointer space-x-2 py-3"
          >
            <RadioGroupItem
              className="group-hover:border-neutral-600 cursor-pointer data-[state=checked]:border-black data-[state=checked]:border-2 data-[state=checked]:bg-black"
              value={cat}
            />
            {cat}
          </Label>
        ))}
        <div className="flex items-center my-3">
          <div className="flex-grow border-t border-zinc-300"></div>
          <span className="mx-2 text-xs font-semibold uppercase text-zinc-500 tracking-wide">
            Accesories
          </span>
          <div className="flex-grow border-t border-zinc-300"></div>
        </div>

        {categories["accessories"].map((cat) => (
          <Label
            key={cat}
            className="flex items-center group cursor-pointer space-x-2 py-3"
          >
            <RadioGroupItem
              className="group-hover:border-neutral-600 cursor-pointer data-[state=checked]:border-black data-[state=checked]:border-2 data-[state=checked]:bg-black"
              value={cat}
            />
            {cat}
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
