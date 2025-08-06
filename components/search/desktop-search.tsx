"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import WherePopover from "./where-popover";
import DatePopover from "./date-popover";
import GuestPopover from "./quest-popover";

interface DesktopSearchProps {
  activeSearch: string;
  setActiveSearch: (value: string) => void;
  guests: { adults: number; children: number; infants: number; pets: number };
  setGuests: (guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }) => void;
  searchLocation: string;
  setSearchLocation: (location: string) => void;
  checkIn?: Date;
  setCheckIn: (date: Date | undefined) => void;
  checkOut?: Date;
  setCheckOut: (date: Date | undefined) => void;
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
}

export default function DesktopSearch({
  activeSearch,
  setActiveSearch,
  guests,
  setGuests,
  searchLocation,
  setSearchLocation,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  selectedDates,
  setSelectedDates,
}: DesktopSearchProps) {
  const totalGuests = guests.adults + guests.children + guests.infants;

  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
      <WherePopover
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />

      <DatePopover
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        type="checkin"
        selectedDate={checkIn}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
        setCheckIn={setCheckIn}
        setCheckOut={setCheckOut}
      />

      <DatePopover
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        type="checkout"
        selectedDate={checkOut}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
        setCheckIn={setCheckIn}
        setCheckOut={setCheckOut}
      />

      <GuestPopover
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        guests={guests}
        setGuests={setGuests}
        totalGuests={totalGuests}
      />

      <div className="pl-4 pr-2">
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white h-12 w-12 rounded-full p-0 transition-colors duration-200"
          onClick={() => setActiveSearch("")}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
