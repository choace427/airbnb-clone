"use client";

import {
  Card as BaseCard,
  CardContent as BaseCardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

interface SmartCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
  gradient?: boolean;
}

const SmartCard = forwardRef<HTMLDivElement, SmartCardProps>(
  (
    { className, hover = true, glow, tilt, gradient, children, ...props },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <BaseCard
        ref={ref}
        className={cn(
          "transition-all duration-500 ease-out",
          hover && "hover:shadow-2xl hover:-translate-y-2",
          glow && "hover:shadow-[#FF5A5F]/10",
          tilt && "hover:rotate-1",
          gradient && "bg-gradient-to-br from-white to-gray-50",
          "border-0 shadow-lg backdrop-blur-sm",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A5F]/5 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
        <div className="relative z-10">{children}</div>
      </BaseCard>
    );
  }
);

const SmartCardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BaseCardContent ref={ref} className={cn("relative", className)} {...props} />
));

SmartCard.displayName = "SmartCard";
SmartCardContent.displayName = "SmartCardContent";

export { SmartCard, SmartCardContent };
