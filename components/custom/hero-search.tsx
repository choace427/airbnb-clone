"use client";

import { SmartInput } from "./smart-input";
import { SmartButton } from "./smart-button";
import { SmartCard, SmartCardContent } from "./smart-card";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SearchData {
  location: string;
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const suggestedDestinations = [
  {
    icon: "🧭",
    title: "Nearby",
    subtitle: "Find what's around you",
    color: "bg-blue-100",
  },
  {
    icon: "🏔️",
    title: "Pocono Mountains, PA",
    subtitle: "Popular lake destination",
    color: "bg-green-100",
  },
  {
    icon: "🏰",
    title: "Orlando, FL",
    subtitle: "For sights like Walt Disney World Resort",
    color: "bg-purple-100",
  },
  {
    icon: "🗼",
    title: "Paris, France",
    subtitle: "For its bustling nightlife",
    color: "bg-pink-100",
  },
  {
    icon: "🏖️",
    title: "Miami, FL",
    subtitle: "For its seaside allure",
    color: "bg-cyan-100",
  },
  {
    icon: "🏛️",
    title: "San Juan, Puerto Rico",
    subtitle: "For its top-notch dining",
    color: "bg-orange-100",
  },
  {
    icon: "🗽",
    title: "New York, NY",
    subtitle: "For sights like Central Park",
    color: "bg-gray-100",
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const quickDateOptions = [
  { label: "Exact dates", value: "exact" },
  { label: "± 1 day", value: "1" },
  { label: "± 2 days", value: "2" },
  { label: "± 3 days", value: "3" },
  { label: "± 7 days", value: "7" },
  { label: "± 14 days", value: "14" },
];

export function HeroSearch() {
  const [searchData, setSearchData] = useState<SearchData>({
    location: "",
    checkin: "",
    checkout: "",
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dateMode, setDateMode] = useState<"dates" | "months" | "flexible">(
    "dates"
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedQuickDate, setSelectedQuickDate] = useState("exact");
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobile && activeDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobile, activeDropdown]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = (monthOffset: number = 0) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + monthOffset,
      1
    );
    const daysInMonth = getDaysInMonth(date);
    const firstDay = getFirstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8 md:w-10 md:h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button
          key={day}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center text-sm font-medium transition-colors touch-manipulation"
        >
          {day}
        </button>
      );
    }

    return (
      <div className="p-3 md:p-4">
        <div className="text-center font-semibold mb-3 md:mb-4 text-base md:text-lg">
          {months[date.getMonth()]} {date.getFullYear()}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
            <div
              key={day + idx}
              className="w-8 h-6 md:w-10 md:h-8 flex items-center justify-center text-xs font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  const updateGuestCount = (
    type: keyof Pick<SearchData, "adults" | "children" | "infants" | "pets">,
    increment: boolean
  ) => {
    setSearchData((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    }));
  };

  const getTotalGuests = () => {
    return searchData.adults + searchData.children + searchData.infants;
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-full p-2 shadow-2xl max-w-5xl mx-auto border border-white/20">
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4">
          <div className="relative w-full">
            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "location" ? null : "location"
                )
              }
              className="w-full flex items-center space-x-3 px-4 py-4 md:px-6 rounded-2xl lg:rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors text-left touch-manipulation"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 uppercase">
                  Where
                </div>
                <div className="text-sm text-gray-600 truncate">
                  {searchData.location || "Search destinations"}
                </div>
              </div>
            </button>
          </div>

          <div className="relative w-full">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "dates" ? null : "dates")
              }
              className="w-full flex items-center space-x-3 px-4 py-4 md:px-6 rounded-2xl lg:rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors text-left touch-manipulation"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 uppercase">
                  Check in
                </div>
                <div className="text-sm text-gray-600 truncate">
                  {searchData.checkin || "Add dates"}
                </div>
              </div>
            </button>
          </div>

          <div className="relative w-full">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "dates" ? null : "dates")
              }
              className="w-full flex items-center space-x-3 px-4 py-4 md:px-6 rounded-2xl lg:rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors text-left touch-manipulation"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 uppercase">
                  Check out
                </div>
                <div className="text-sm text-gray-600 truncate">
                  {searchData.checkout || "Add dates"}
                </div>
              </div>
            </button>
          </div>

          <div className="relative flex items-center w-full">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === "guests" ? null : "guests")
              }
              className="flex-1 flex items-center space-x-3 px-4 py-4 md:px-6 rounded-2xl lg:rounded-full hover:bg-gray-50 active:bg-gray-100 transition-colors text-left touch-manipulation"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-800 uppercase">
                  Who
                </div>
                <div className="text-sm text-gray-600 truncate">
                  {getTotalGuests() > 0
                    ? `${getTotalGuests()} guests`
                    : "Add guests"}
                </div>
              </div>
            </button>
            <SmartButton
              className="h-12 w-12 rounded-full ml-2 flex-shrink-0 touch-manipulation"
              gradient
              glow
              ripple
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </SmartButton>
          </div>
        </div>
      </div>

      {activeDropdown === "location" && (
        <>
          {isMobile && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeDropdown}
            />
          )}
          <div
            className={cn(
              "z-50",
              isMobile
                ? "fixed inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-300"
                : "absolute top-full left-0 right-0 mt-2 max-w-md mx-auto"
            )}
          >
            <SmartCard
              className={cn(
                isMobile
                  ? "rounded-t-3xl rounded-b-none max-h-[80vh] overflow-hidden"
                  : ""
              )}
            >
              <SmartCardContent className="p-0">
                {isMobile && (
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Where to?</h2>
                    <button
                      onClick={closeDropdown}
                      className="p-2 rounded-full hover:bg-gray-100 touch-manipulation"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="p-4 border-b">
                  <SmartInput
                    placeholder="Search destinations"
                    className="w-full text-base"
                    value={searchData.location}
                    onChange={(e) =>
                      setSearchData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                  />
                </div>

                <div
                  className={cn(
                    "p-4",
                    isMobile ? "max-h-96 overflow-y-auto" : ""
                  )}
                >
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Suggested destinations
                  </h3>
                  <div className="space-y-3">
                    {suggestedDestinations.map((destination, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSearchData((prev) => ({
                            ...prev,
                            location: destination.title,
                          }));
                          setActiveDropdown(null);
                        }}
                        className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors text-left touch-manipulation"
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0",
                            destination.color
                          )}
                        >
                          {destination.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 truncate">
                            {destination.title}
                          </div>
                          <div className="text-sm text-gray-600 truncate">
                            {destination.subtitle}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </SmartCardContent>
            </SmartCard>
          </div>
        </>
      )}

      {activeDropdown === "dates" && (
        <>
          {isMobile && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeDropdown}
            />
          )}
          <div
            className={cn(
              "z-50",
              isMobile
                ? "fixed inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-300"
                : "absolute top-full left-0 right-0 mt-2 max-w-4xl mx-auto"
            )}
          >
            <SmartCard
              className={cn(
                isMobile
                  ? "rounded-t-3xl rounded-b-none max-h-[85vh] overflow-hidden"
                  : ""
              )}
            >
              <SmartCardContent className="p-0">
                {isMobile && (
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">When's your trip?</h2>
                    <button
                      onClick={closeDropdown}
                      className="p-2 rounded-full hover:bg-gray-100 touch-manipulation"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-center p-4 border-b">
                  <div className="flex bg-gray-100 rounded-full p-1 w-full max-w-sm">
                    {(["dates", "months", "flexible"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setDateMode(mode)}
                        className={cn(
                          "flex-1 py-2 px-3 rounded-full text-sm font-medium transition-colors capitalize touch-manipulation",
                          dateMode === mode
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-600 hover:text-gray-900"
                        )}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {dateMode === "dates" && (
                  <div
                    className={cn(isMobile ? "max-h-96 overflow-y-auto" : "")}
                  >
                    <div className="flex items-center justify-between p-4 border-b">
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth() - 1
                            )
                          )
                        }
                        className="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentMonth(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth() + 1
                            )
                          )
                        }
                        className="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div
                      className={cn(
                        "grid",
                        isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                      )}
                    >
                      {renderCalendar(0)}
                      {!isMobile && renderCalendar(1)}
                    </div>

                    <div className="p-4 border-t">
                      <div className="flex flex-wrap gap-2">
                        {quickDateOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => setSelectedQuickDate(option.value)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm font-medium transition-colors border touch-manipulation",
                              selectedQuickDate === option.value
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 active:bg-gray-50"
                            )}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </SmartCardContent>
            </SmartCard>
          </div>
        </>
      )}

      {activeDropdown === "guests" && (
        <>
          {isMobile && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeDropdown}
            />
          )}
          <div
            className={cn(
              "z-50",
              isMobile
                ? "fixed inset-x-0 bottom-0 animate-in slide-in-from-bottom duration-300"
                : "absolute top-full right-0 mt-2 w-96"
            )}
          >
            <SmartCard
              className={cn(
                isMobile
                  ? "rounded-t-3xl rounded-b-none max-h-[80vh] overflow-hidden"
                  : ""
              )}
            >
              <SmartCardContent className="p-6">
                {isMobile && (
                  <div className="flex items-center justify-between mb-6 -mt-2">
                    <h2 className="text-lg font-semibold">Who's coming?</h2>
                    <button
                      onClick={closeDropdown}
                      className="p-2 rounded-full hover:bg-gray-100 touch-manipulation"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Adults</div>
                      <div className="text-sm text-gray-600">
                        Ages 13 or above
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateGuestCount("adults", false)}
                        disabled={searchData.adults === 0}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-base">
                        {searchData.adults}
                      </span>
                      <button
                        onClick={() => updateGuestCount("adults", true)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 transition-colors touch-manipulation"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Children</div>
                      <div className="text-sm text-gray-600">Ages 2–12</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateGuestCount("children", false)}
                        disabled={searchData.children === 0}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-base">
                        {searchData.children}
                      </span>
                      <button
                        onClick={() => updateGuestCount("children", true)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 transition-colors touch-manipulation"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Infants</div>
                      <div className="text-sm text-gray-600">Under 2</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateGuestCount("infants", false)}
                        disabled={searchData.infants === 0}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-base">
                        {searchData.infants}
                      </span>
                      <button
                        onClick={() => updateGuestCount("infants", true)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 transition-colors touch-manipulation"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Pets</div>
                      <div className="text-sm text-gray-600 underline cursor-pointer">
                        Bringing a service animal?
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateGuestCount("pets", false)}
                        disabled={searchData.pets === 0}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors touch-manipulation"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-base">
                        {searchData.pets}
                      </span>
                      <button
                        onClick={() => updateGuestCount("pets", true)}
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 active:bg-gray-50 transition-colors touch-manipulation"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </SmartCardContent>
            </SmartCard>
          </div>
        </>
      )}
    </div>
  );
}
