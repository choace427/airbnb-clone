"use client";

import { useState } from "react";
import { Search, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/lib/data";

interface MobileSearchProps {
  mobileSearchOpen: boolean;
  setMobileSearchOpen: (open: boolean) => void;
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
  checkOut?: Date;
}

export default function MobileSearch({
  mobileSearchOpen,
  setMobileSearchOpen,
  guests,
  setGuests,
  searchLocation,
  setSearchLocation,
  checkIn,
  checkOut,
}: MobileSearchProps) {
  const [currentStep, setCurrentStep] = useState<"where" | "when" | "who">(
    "where"
  );
  const totalGuests = guests.adults + guests.children + guests.infants;

  const updateGuests = (type: keyof typeof guests, increment: boolean) => {
    setGuests({
      ...guests,
      [type]: increment ? guests[type] + 1 : Math.max(0, guests[type] - 1),
    });
  };

  const clearAll = () => {
    setSearchLocation("");
    setGuests({ adults: 0, children: 0, infants: 0, pets: 0 });
  };

  const months = [
    { name: "August 2025", year: 2025, month: 7 },
    { name: "September 2025", year: 2025, month: 8 },
  ];

  const getDaysInMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  return (
    <Sheet open={mobileSearchOpen} onOpenChange={setMobileSearchOpen}>
      <SheetContent side="bottom" className="h-[90vh] p-0 rounded-t-3xl">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-4 border-b bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-5 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-900 border-b-2 border-gray-900 pb-1">
                    Homes
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500">Experiences</span>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-3 bg-gray-600 rounded-t-full"></div>
                  </div>
                  <span className="text-xs text-gray-500">Services</span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileSearchOpen(false)}
                className="rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto bg-white">
            {currentStep === "where" && (
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Where?
                </h2>

                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search destinations"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="h-14 pl-12 text-base border-gray-300 rounded-xl focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">
                    Suggested destinations
                  </h4>
                  {destinations.slice(0, 5).map((dest, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start p-4 h-auto hover:bg-gray-50 rounded-xl"
                      onClick={() => {
                        setSearchLocation(dest.name);
                        setCurrentStep("when");
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">{dest.icon}</span>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900 text-base">
                            {dest.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {dest.description}
                          </div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "when" && (
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  When?
                </h2>

                <Tabs defaultValue="dates" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full p-1 h-12 mb-6">
                    <TabsTrigger
                      value="dates"
                      className="rounded-full text-sm font-medium"
                    >
                      Dates
                    </TabsTrigger>
                    <TabsTrigger
                      value="months"
                      className="rounded-full text-sm font-medium"
                    >
                      Months
                    </TabsTrigger>
                    <TabsTrigger
                      value="flexible"
                      className="rounded-full text-sm font-medium"
                    >
                      Flexible
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="dates" className="space-y-6">
                    {months.map((month, monthIndex) => (
                      <div key={month.name} className="space-y-4">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {month.name}
                        </h3>
                        <div className="grid grid-cols-7 gap-1">
                          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                            <div
                              key={day}
                              className="h-10 flex items-center justify-center text-sm font-medium text-gray-500"
                            >
                              {day}
                            </div>
                          ))}
                          {getDaysInMonth(month.year, month.month).map(
                            (day, index) => (
                              <div
                                key={index}
                                className="h-10 flex items-center justify-center"
                              >
                                {day ? (
                                  <Button
                                    variant="ghost"
                                    className="w-10 h-10 p-0 text-sm hover:bg-gray-100 rounded-full"
                                  >
                                    {day}
                                  </Button>
                                ) : (
                                  <div className="w-10 h-10" />
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="flex flex-wrap gap-2 pt-4">
                      <Button
                        variant="outline"
                        className="rounded-full px-4 py-2 text-sm border-gray-900 bg-white text-gray-900"
                      >
                        Exact dates
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-full px-4 py-2 text-sm text-gray-700"
                      >
                        ± 1 day
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-full px-4 py-2 text-sm text-gray-700"
                      >
                        ± 2 days
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-full px-4 py-2 text-sm text-gray-700"
                      >
                        ± 3 days
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {currentStep === "who" && (
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Who?
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      key: "adults" as const,
                      label: "Adults",
                      desc: "Ages 13 or above",
                    },
                    {
                      key: "children" as const,
                      label: "Children",
                      desc: "Ages 2 – 12",
                    },
                    {
                      key: "infants" as const,
                      label: "Infants",
                      desc: "Under 2",
                    },
                    {
                      key: "pets" as const,
                      label: "Pets",
                      desc: "Bringing a service animal?",
                    },
                  ].map(({ key, label, desc }) => (
                    <div
                      key={key}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-lg">
                          {label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {key === "pets" ? (
                            <button className="text-gray-500 underline">
                              {desc}
                            </button>
                          ) : (
                            desc
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-gray-400 hover:border-gray-900 disabled:opacity-30"
                          onClick={() => updateGuests(key, false)}
                          disabled={guests[key] === 0}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-normal text-lg">
                          {guests[key]}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full border-gray-400 hover:border-gray-900"
                          onClick={() => updateGuests(key, true)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t">
            {currentStep === "where" && (
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  className="text-sm underline"
                  onClick={clearAll}
                >
                  Clear all
                </Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg"
                  onClick={() => setCurrentStep("when")}
                >
                  Next
                </Button>
              </div>
            )}

            {currentStep === "when" && (
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  className="text-sm underline"
                  onClick={clearAll}
                >
                  Clear all
                </Button>
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg"
                  onClick={() => setCurrentStep("who")}
                >
                  Next
                </Button>
              </div>
            )}

            {currentStep === "who" && (
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  className="text-sm underline"
                  onClick={clearAll}
                >
                  Clear all
                </Button>
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg flex items-center"
                  onClick={() => setMobileSearchOpen(false)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            )}
          </div>

          <div className="flex justify-center space-x-2 pb-4">
            <div
              className={`w-2 h-2 rounded-full ${
                currentStep === "where" ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
            <div
              className={`w-2 h-2 rounded-full ${
                currentStep === "when" ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
            <div
              className={`w-2 h-2 rounded-full ${
                currentStep === "who" ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
