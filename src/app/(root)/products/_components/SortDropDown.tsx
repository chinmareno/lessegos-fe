"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SortOption } from "../page";

type Props = {
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
};
export default function SortDropdown({ sortOption, setSortOption }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`w-40 py-2 border-[1.5px] bg-white text-black justify-between font-medium ${
          open ? "border-black border-b-0" : "hover:border-neutral-400"
        } cursor-pointer rounded-none text-sm`}
      >
        {open ? "Sort By" : sortOption}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 hover:cursor-pointer px-0 border-[1.5px] border-black border-t-0 rounded-none">
        <DropdownMenuItem
          onClick={() => setSortOption("Recommended")}
          className={
            sortOption === "Recommended"
              ? "border-l-[3px] border-l-black focus:bg-white py-2"
              : ""
          }
        >
          Recommended
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSortOption("Price Low to High")}
          className={
            sortOption === "Price Low to High"
              ? "border-l-[3px]  border-l-black focus:bg-white py-2"
              : ""
          }
        >
          Price Low to High
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSortOption("Price High to Low")}
          className={
            sortOption === "Price High to Low"
              ? "border-l-[3px]  border-l-black focus:bg-white py-2"
              : ""
          }
        >
          Price High to Low
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
