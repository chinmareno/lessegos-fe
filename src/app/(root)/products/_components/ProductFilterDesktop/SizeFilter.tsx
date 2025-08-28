"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories } from "@/data/categories";

const sizeOptions = {
  tops: ["S", "M", "L", "XL"],
  bottoms: ["22", "23", "28", "30", "32", "33", "34", "35", "36"],
};
type Props = {
  category: string;
  selectedTopsSize: string[];
  setSelectedTopsSize: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBottomsSize: string[];
  setSelectedBottomsSize: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function SizeFilter({
  category,
  selectedTopsSize,
  setSelectedTopsSize,
  selectedBottomsSize,
  setSelectedBottomsSize,
}: Props) {
  const topsSize = categories.tops.includes(category);
  const bottomsSize = categories.bottoms.includes(category);

  const toggleSize = (size: string, checked: boolean) => {
    if (topsSize) {
      setSelectedTopsSize((prev) =>
        checked ? [...prev, size] : prev.filter((s) => s !== size)
      );
    } else if (bottomsSize) {
      setSelectedBottomsSize((prev) =>
        checked ? [...prev, size] : prev.filter((s) => s !== size)
      );
    }
  };

  if (category === "All") {
    return <p className="text-sm text-gray-400">Select category first</p>;
  }

  return (
    <div className="space-y-3">
      <button
        className={`underline font-medium cursor-pointer text-sm ${
          !topsSize && !bottomsSize && "hidden"
        }`}
        onClick={() => {
          if (topsSize) setSelectedTopsSize([]);
          if (bottomsSize) setSelectedBottomsSize([]);
        }}
      >
        Unselect all
      </button>

      <div className="grid grid-cols-2 gap-2">
        {topsSize &&
          sizeOptions["tops"].map((size) => (
            <Label
              htmlFor={size}
              key={size}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-50 rounded-md"
            >
              <Checkbox
                id={size}
                checked={selectedTopsSize.includes(size)}
                onCheckedChange={(checked) =>
                  toggleSize(size, checked === true)
                }
              />
              <span>{size}</span>
            </Label>
          ))}
        {bottomsSize &&
          sizeOptions["bottoms"].map((size) => (
            <Label
              htmlFor={size}
              key={size}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-50 rounded-md"
            >
              <Checkbox
                id={size}
                checked={selectedBottomsSize.includes(size)}
                onCheckedChange={(checked) =>
                  toggleSize(size, checked === true)
                }
              />
              <span>{size}</span>
            </Label>
          ))}
        {!topsSize && !bottomsSize && (
          <p className="text-sm text-gray-400">No size available</p>
        )}
      </div>
    </div>
  );
}
