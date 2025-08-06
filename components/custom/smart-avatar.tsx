"use client";

import {
  Avatar as BaseAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SmartAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  ring?: boolean;
  status?: "online" | "offline" | "away";
}

const SmartAvatar = forwardRef<HTMLDivElement, SmartAvatarProps>(
  (
    { className, src, alt, fallback, size = "md", ring, status, ...props },
    ref
  ) => {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
    };

    return (
      <div className="relative inline-block">
        <BaseAvatar
          ref={ref}
          className={cn(
            sizeClasses[size],
            ring && "ring-2 ring-[#FF5A5F]/20 ring-offset-2",
            "transition-all duration-200 hover:scale-105",
            className
          )}
          {...props}
        >
          <AvatarImage src={src || "/placeholder.svg"} alt={alt} />
          <AvatarFallback className="bg-gradient-to-br from-[#FF5A5F] to-[#FF385C] text-white font-semibold">
            {fallback}
          </AvatarFallback>
        </BaseAvatar>

        {status && (
          <div
            className={cn(
              "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white",
              status === "online" && "bg-green-500",
              status === "offline" && "bg-gray-400",
              status === "away" && "bg-yellow-500"
            )}
          />
        )}
      </div>
    );
  }
);

SmartAvatar.displayName = "SmartAvatar";

export { SmartAvatar };
