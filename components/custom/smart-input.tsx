"use client";

import { Input as BaseInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

interface SmartInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  floating?: boolean;
  glow?: boolean;
}

const SmartInput = forwardRef<HTMLInputElement, SmartInputProps>(
  ({ className, icon, floating, glow, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
      <div className="relative group">
        {icon && (
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
            <div
              className={cn(
                "transition-colors duration-200",
                isFocused ? "text-[#FF5A5F]" : "text-gray-400"
              )}
            >
              {icon}
            </div>
          </div>
        )}

        <BaseInput
          ref={ref}
          className={cn(
            "transition-all duration-300 border-0 bg-gray-50/80 backdrop-blur-sm",
            "focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-[#FF5A5F]/20",
            glow && "focus:shadow-[#FF5A5F]/10",
            icon && "pl-12",
            floating && "pt-6 pb-2",
            "hover:bg-white hover:shadow-md",
            className
          )}
          placeholder={floating ? "" : placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            props.onChange?.(e);
          }}
          {...props}
        />

        {floating && placeholder && (
          <label
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none",
              icon && "left-12",
              isFocused || hasValue
                ? "top-2 text-xs text-[#FF5A5F] font-medium"
                : "top-1/2 -translate-y-1/2 text-gray-500"
            )}
          >
            {placeholder}
          </label>
        )}

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] transition-all duration-300",
            isFocused ? "scale-x-100" : "scale-x-0"
          )}
        />
      </div>
    );
  }
);

SmartInput.displayName = "SmartInput";

export { SmartInput };
