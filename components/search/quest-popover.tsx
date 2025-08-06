"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import GuestCounter from "./quest-counter";

interface GuestPopoverProps {
  activeSearch: string;
  setActiveSearch: (value: string) => void;
  guests: { adults: number; children: number; infants: number; pets: number };
  setGuests: (guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }) => void;
  totalGuests: number;
}

export default function GuestPopover({
  activeSearch,
  setActiveSearch,
  guests,
  setGuests,
  totalGuests,
}: GuestPopoverProps) {
  return (
    <Popover
      open={activeSearch === "who"}
      onOpenChange={(open) => setActiveSearch(open ? "who" : "")}
    >
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex-1 h-16 px-6 hover:bg-gray-50">
          <div className="text-left w-full">
            <div className="text-xs font-medium text-gray-900 mb-1">Who</div>
            <div className="text-sm text-gray-500">
              {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 mt-2" align="end">
        <div className="p-6 bg-white rounded-3xl">
          <GuestCounter guests={guests} setGuests={setGuests} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
