"use client";

import { Badge as BaseBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SmartBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "gradient"
    | "glow";
  pulse?: boolean;
  icon?: React.ReactNode;
}

const SmartBadge = forwardRef<HTMLDivElement, SmartBadgeProps>(
  (
    { className, variant = "default", pulse, icon, children, ...props },
    ref
  ) => {
    return (
      <BaseBadge
        ref={ref}
        className={cn(
          "transition-all duration-300 hover:scale-105",
          variant === "gradient" &&
            "bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] text-white border-0 shadow-lg",
          variant === "glow" &&
            "bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-lg",
          pulse && "animate-pulse",
          "flex items-center gap-2 px-4 py-2 font-medium",
          className
        )}
        {...props}
      >
        {icon && <span className="w-4 h-4">{icon}</span>}
        {children}
      </BaseBadge>
    );
  }
);

SmartBadge.displayName = "SmartBadge";

export { SmartBadge };
