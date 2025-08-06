"use client";

import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuestCounterProps {
  guests: { adults: number; children: number; infants: number; pets: number };
  setGuests: (guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }) => void;
}

export default function GuestCounter({ guests, setGuests }: GuestCounterProps) {
  const updateGuests = (type: keyof typeof guests, increment: boolean) => {
    setGuests({
      ...guests,
      [type]: increment ? guests[type] + 1 : Math.max(0, guests[type] - 1),
    });
  };

  const guestTypes = [
    { key: "adults" as const, label: "Adults", desc: "Ages 13 or above" },
    { key: "children" as const, label: "Children", desc: "Ages 2–12" },
    { key: "infants" as const, label: "Infants", desc: "Under 2" },
    { key: "pets" as const, label: "Pets", desc: "Bringing a service animal?" },
  ];

  return (
    <div className="space-y-6">
      {guestTypes.map(({ key, label, desc }) => (
        <div key={key} className="flex items-center justify-between py-2">
          <div className="flex-1">
            <div className="font-medium text-gray-900 text-base">{label}</div>
            <div className="text-sm text-gray-500">
              {key === "pets" ? (
                <Button
                  variant="link"
                  className="p-0 h-auto text-sm text-gray-500 underline font-normal"
                >
                  {desc}
                </Button>
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
            <span className="w-8 text-center font-normal text-base">
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
  );
}
