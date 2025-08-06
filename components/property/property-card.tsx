"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  dates: string;
  image: string;
  isGuestFavorite: boolean;
  host: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
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
            <p className="text-gray-500 text-sm">{property.location}</p>
            <p className="text-gray-500 text-sm">{property.dates}</p>
          </div>
          <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
            <Star className="h-3 w-3 fill-current text-gray-900" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        <div className="pt-1">
          <span className="font-semibold text-gray-900">${property.price}</span>
          <span className="text-blue-600 text-sm"> night</span>
        </div>
      </div>
    </div>
  );
}
