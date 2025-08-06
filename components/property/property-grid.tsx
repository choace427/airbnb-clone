"use client";

import { ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const propertyCategories = [
  {
    title: "Popular homes in San Juan",
    properties: [
      {
        id: 1,
        title: "Room in San Juan",
        price: 137,
        period: "2 nights",
        rating: 4.94,
        image: "/image_1.png",
        isGuestFavorite: true,
      },
      {
        id: 2,
        title: "Apartment in San Juan",
        price: 323,
        period: "2 nights",
        rating: 4.9,
        image: "/image_1.png",
        isGuestFavorite: true,
      },
    ],
  },
  {
    title: "Available next month in Miami",
    properties: [
      {
        id: 3,
        title: "Apartment in Downtown Miami",
        price: 402,
        period: "2 nights",
        rating: 4.83,
        image: "/image_3.png",
        isGuestFavorite: true,
      },
      {
        id: 4,
        title: "Loft in Coconut Grove",
        price: 420,
        period: "2 nights",
        rating: 4.87,
        image: "/image_5.png",
        isGuestFavorite: true,
      },
    ],
  },
  {
    title: "Stay in Paris",
    properties: [
      {
        id: 5,
        title: "Apartment in Montmartre",
        price: 156,
        period: "2 nights",
        rating: 4.92,
        image: "/image_5.png",
        isGuestFavorite: false,
      },
      {
        id: 6,
        title: "Studio in Le Marais",
        price: 189,
        period: "2 nights",
        rating: 4.88,
        image: "/image_10.png",
        isGuestFavorite: false,
      },
    ],
  },
];

export default function PropertyGrid() {
  return (
    <div className="bg-white">
      <div className="md:hidden">
        {propertyCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <div className="flex items-center justify-between px-4 mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {category.title}
              </h2>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="overflow-x-auto scrollbar-hide">
              <div
                className="flex space-x-4 px-4 pb-2"
                style={{ width: "max-content" }}
              >
                {category.properties.map((property) => (
                  <div key={property.id} className="flex-shrink-0 w-64">
                    <div className="relative overflow-hidden rounded-xl mb-3">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full w-8 h-8"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      {property.isGuestFavorite && (
                        <Badge className="absolute top-3 left-3 bg-white text-gray-900 text-xs font-medium px-2 py-1">
                          Guest favorite
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm leading-tight">
                            {property.title}
                          </h3>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="h-3 w-3 fill-current text-gray-900" />
                            <span className="text-sm font-medium">
                              {property.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-1">
                        <span className="font-semibold text-gray-900">
                          ${property.price}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {" "}
                          for {property.period}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {propertyCategories
            .flatMap((category) => category.properties)
            .map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white hover:scale-110 transition-all duration-200 rounded-full w-8 h-8"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {property.isGuestFavorite && (
                    <Badge className="absolute top-3 left-3 bg-white text-gray-900 hover:bg-white text-xs font-medium px-2 py-1 rounded-md">
                      Guest favorite
                    </Badge>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm leading-tight">
                        {property.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
                      <Star className="h-3 w-3 fill-current text-gray-900" />
                      <span className="text-sm font-medium">
                        {property.rating}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-gray-900">
                      ${property.price}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {" "}
                      for {property.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
