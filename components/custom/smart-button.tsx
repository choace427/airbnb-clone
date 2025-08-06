"use client";
import { Button as BaseButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef, useRef, useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import "./smart-button.css";

interface SmartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  gradient?: boolean;
  glow?: boolean;
  ripple?: boolean;
}

const SmartButton = forwardRef<HTMLButtonElement, SmartButtonProps>(
  (
    { className, children, loading, gradient, glow, ripple, onClick, ...props },
    ref
  ) => {
    const [rippleStyle, setRippleStyle] = useState<React.CSSProperties | null>(
      null
    );
    const [showRipple, setShowRipple] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        setRippleStyle({
          top: y,
          left: x,
          width: size,
          height: size,
        });
        setShowRipple(true);
        setTimeout(() => setShowRipple(false), 400);
      }
      onClick?.(e);
    };

    return (
      <BaseButton
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node;
          buttonRef.current = node;
        }}
        className={cn(
          "relative overflow-hidden transition-all duration-300 transform group",
          gradient &&
            "bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] hover:from-[#E04E52] hover:to-[#E0343A] text-white border-0",
          glow && "shadow-lg hover:shadow-xl hover:shadow-[#FF5A5F]/25",
          ripple && "active:scale-95",
          "hover:scale-105 hover:-translate-y-0.5",
          className
        )}
        onClick={handleClick}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
        )}
        {children}
        {ripple && showRipple && rippleStyle && (
          <span
            className="pointer-events-none absolute bg-white/40 rounded-full animate-ripple"
            style={{
              ...rippleStyle,
              position: "absolute",
              opacity: 0.75,
              transform: "scale(1)",
            }}
          />
        )}
      </BaseButton>
    );
  }
);

SmartButton.displayName = "SmartButton";

export { SmartButton };
