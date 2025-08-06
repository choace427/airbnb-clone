"use client";

import { Search, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BottomNavigation() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1 py-2 px-4"
        >
          <Search className="h-5 w-5 text-pink-500" />
          <span className="text-xs font-medium text-pink-500">Explore</span>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1 py-2 px-4"
        >
          <Heart className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-400">Wishlists</span>
        </Button>

        <Button
          variant="ghost"
          className="flex flex-col items-center space-y-1 py-2 px-4"
        >
          <User className="h-5 w-5 text-gray-400" />
          <span className="text-xs text-gray-400">Log in</span>
        </Button>
      </div>
    </div>
  );
}
