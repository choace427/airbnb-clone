"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { destinations } from "@/lib/data";

interface WherePopoverProps {
  activeSearch: string;
  setActiveSearch: (value: string) => void;
  searchLocation: string;
  setSearchLocation: (location: string) => void;
}

export default function WherePopover({
  activeSearch,
  setActiveSearch,
  searchLocation,
  setSearchLocation,
}: WherePopoverProps) {
  return (
    <Popover
      open={activeSearch === "where"}
      onOpenChange={(open) => setActiveSearch(open ? "where" : "")}
    >
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex-1 h-16 px-8 rounded-l-full hover:bg-gray-50 border-r border-gray-200"
        >
          <div className="text-left w-full">
            <div className="text-xs font-medium text-gray-900 mb-1">Where</div>
            <div className="text-sm text-gray-500 truncate">
              {searchLocation || "Search destinations"}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 mt-2 bg-white" align="start">
        <div className="p-6">
          <div className="mb-6">
            <Input
              placeholder="Search destinations"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="h-14 text-base border-gray-300 focus:border-gray-900"
              autoFocus
            />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-4">
              Suggested destinations
            </h4>
            <div className="space-y-0">
              {destinations.map((dest, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start px-0 py-3 h-auto hover:bg-gray-50 rounded-lg"
                  onClick={() => {
                    setSearchLocation(dest.name);
                    setActiveSearch("");
                  }}
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{dest.icon}</span>
                    </div>
                    <div className="text-left flex-1">
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
        </div>
      </PopoverContent>
    </Popover>
  );
}
