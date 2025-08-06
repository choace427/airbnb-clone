"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { inspirationCategories, inspirationDestinations } from "@/lib/data";

export default function InspirationSection() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
          Inspiration for future getaways
        </h2>

        <Tabs defaultValue="Popular" className="w-full">
          <div className="mb-6 sm:mb-8">
            <div className="overflow-x-auto scrollbar-hide">
              <TabsList className="flex w-max sm:grid sm:w-full sm:grid-cols-4 lg:grid-cols-9 bg-transparent h-auto p-0 gap-6 sm:gap-8">
                {inspirationCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none pb-3 text-sm font-medium text-gray-600 data-[state=active]:text-gray-900 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <TabsContent value="Popular" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-8">
              {inspirationDestinations.map((dest, index) => (
                <div key={index} className="space-y-2">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:underline transition-all duration-200 block"
                  >
                    {dest.name}
                  </Link>
                  <p className="text-sm text-gray-500">{dest.type}</p>
                  <p className="text-xs text-gray-400">{dest.distance}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {inspirationCategories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-8">
                {inspirationDestinations.slice(0, 12).map((dest, index) => (
                  <div key={index} className="space-y-2">
                    <Link
                      href="#"
                      className="text-sm font-medium text-gray-900 hover:underline transition-all duration-200 block"
                    >
                      {dest.name}
                    </Link>
                    <p className="text-sm text-gray-500">{dest.type}</p>
                    <p className="text-xs text-gray-400">{dest.distance}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
