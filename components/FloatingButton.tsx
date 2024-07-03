import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const FloatingButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="fixed bottom-4 right-7">
          <button className="bg-[#9c2121] hover:bg-[#f14646] text-xl text-white font-bold p-5 rounded-full shadow-lg">
            📞
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-md">
        <div className="flex items-center justify-center"></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
