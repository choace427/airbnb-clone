"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { months, getDaysInMonth } from "@/lib/calendar-utils";

interface DatePopoverProps {
  activeSearch: string;
  setActiveSearch: (value: string) => void;
  type: "checkin" | "checkout";
  selectedDate?: Date;
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
  setCheckIn: (date: Date | undefined) => void;
  setCheckOut: (date: Date | undefined) => void;
}

export default function DatePopover({
  activeSearch,
  setActiveSearch,
  type,
  selectedDate,
  selectedDates,
  setSelectedDates,
  setCheckIn,
  setCheckOut,
}: DatePopoverProps) {
  const handleDateSelect = (day: number, monthIndex: number) => {
    const selectedDate = new Date(
      months[monthIndex].year,
      months[monthIndex].month,
      day
    );
    if (selectedDates.length === 0) {
      setSelectedDates([selectedDate]);
      setCheckIn(selectedDate);
    } else if (selectedDates.length === 1) {
      const [firstDate] = selectedDates;
      if (selectedDate > firstDate) {
        setSelectedDates([firstDate, selectedDate]);
        setCheckOut(selectedDate);
      } else {
        setSelectedDates([selectedDate]);
        setCheckIn(selectedDate);
        setCheckOut(undefined);
      }
    } else {
      setSelectedDates([selectedDate]);
      setCheckIn(selectedDate);
      setCheckOut(undefined);
    }
  };

  return (
    <Popover
      open={activeSearch === type}
      onOpenChange={(open) => setActiveSearch(open ? type : "")}
    >
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex-1 h-16 px-6 hover:bg-gray-50 border-r border-gray-200"
        >
          <div className="text-left w-full">
            <div className="text-xs font-medium text-gray-900 mb-1">
              {type === "checkin" ? "Check in" : "Check out"}
            </div>
            <div className="text-sm text-gray-500">
              {selectedDate ? selectedDate.toLocaleDateString() : "Add dates"}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mt-2" align="center">
        <div className="p-8 bg-white rounded-3xl shadow-xl max-w-2xl">
          <div className="mb-8">
            <Tabs defaultValue="dates" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-full p-1 h-12">
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
            </Tabs>
          </div>

          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-8 lg:space-x-16">
              {months.map((month, monthIndex) => (
                <div key={month.name} className="text-center">
                  <h3 className="font-semibold text-lg mb-6 text-gray-900">
                    {month.name}
                  </h3>
                  <div className="grid grid-cols-7 gap-1 lg:gap-2">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                      <div
                        key={day}
                        className="w-8 h-8 lg:w-11 lg:h-11 flex items-center justify-center text-sm font-medium text-gray-500"
                      >
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(month.year, month.month).map(
                      (day, index) => (
                        <div key={index}>
                          {day ? (
                            <Button
                              variant="ghost"
                              className={`w-8 h-8 lg:w-11 lg:h-11 p-0 text-sm hover:bg-gray-100 rounded-full ${
                                selectedDates.some(
                                  (d) =>
                                    d.getDate() === day &&
                                    d.getMonth() === month.month &&
                                    d.getFullYear() === month.year
                                )
                                  ? "bg-gray-900 text-white hover:bg-gray-800"
                                  : ""
                              }`}
                              onClick={() => handleDateSelect(day, monthIndex)}
                            >
                              {day}
                            </Button>
                          ) : (
                            <div className="w-8 h-8 lg:w-11 lg:h-11" />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant="outline"
              className="rounded-full px-4 py-2 text-sm border-gray-900 bg-white text-gray-900"
            >
              Exact dates
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ± 1 day
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ± 2 days
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ± 3 days
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ± 7 days
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              ± 14 days
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
