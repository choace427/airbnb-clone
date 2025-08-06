"use client";

import { useState } from "react";
import DesktopSearch from "./desktop-search";
import MobileSearch from "./mobile-search";

interface SearchBarProps {
  mobileSearchOpen?: boolean;
  setMobileSearchOpen?: (open: boolean) => void;
}

export default function SearchBar({
  mobileSearchOpen = false,
  setMobileSearchOpen,
}: SearchBarProps) {
  const [activeSearch, setActiveSearch] = useState("");
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [searchLocation, setSearchLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const searchProps = {
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
  };

  return (
    <>
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <DesktopSearch {...searchProps} />
          </div>
        </div>
      </div>

      {setMobileSearchOpen && (
        <MobileSearch
          {...searchProps}
          mobileSearchOpen={mobileSearchOpen}
          setMobileSearchOpen={setMobileSearchOpen}
        />
      )}
    </>
  );
}
