"use client";

import { useState, useEffect } from "react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SmartButton } from "./smart-button";

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, isMobile]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-2 sm:px-4 transition-all duration-300">
        <div
          className={cn(
            "bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-full border shadow-lg transition-all duration-300",
            isScrolled
              ? "shadow-2xl border-gray-200/50 bg-white/95"
              : "shadow-lg border-gray-200"
          )}
        >
          <div className="hidden md:flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] bg-clip-text text-transparent">
                airbnb
              </span>
            </Link>

            <nav className="flex items-center space-x-8">
              {["Stays", "Experiences", "Online"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-[#FF5A5F] font-medium transition-all duration-200 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#FF5A5F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <SmartButton className="text-gray-700 hover:text-[#FF5A5F] font-medium">
                Become a Host
              </SmartButton>
              <SmartButton gradient glow className="rounded-full px-6">
                Sign up
              </SmartButton>
            </div>
          </div>

          <div className="flex md:hidden items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] bg-clip-text text-transparent">
                airbnb
              </span>
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && isMobile && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden animate-in slide-in-from-right duration-300 shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center space-x-2 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Home className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] bg-clip-text text-transparent">
                    airbnb
                  </span>
                </Link>

                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <nav className="flex-1 px-6 py-6">
                <div className="space-y-1">
                  {["Stays", "Experiences", "Online"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      onClick={closeMobileMenu}
                      className="block px-4 py-4 text-lg font-medium text-gray-700 hover:text-[#FF5A5F] hover:bg-gray-50 rounded-xl transition-all duration-200 touch-manipulation"
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <div className="my-6 border-t border-gray-100" />

                <div className="space-y-1">
                  <Link
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 touch-manipulation"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-4 py-4 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 touch-manipulation"
                  >
                    Get the app
                  </Link>
                </div>
              </nav>

              <div className="p-6 border-t border-gray-100 space-y-3">
                <SmartButton
                  className="w-full justify-center py-4 text-base font-semibold"
                  gradient
                  glow
                  onClick={closeMobileMenu}
                >
                  Become a Host
                </SmartButton>
                <SmartButton
                  className="w-full justify-center py-4 text-base font-semibold rounded-xl"
                  gradient
                  glow
                  onClick={closeMobileMenu}
                >
                  Sign up
                </SmartButton>

                <div className="flex items-center justify-center space-x-6 pt-4 text-sm text-gray-500">
                  <Link
                    href="#"
                    className="hover:text-gray-700 transition-colors"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-700 transition-colors"
                  >
                    Terms
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-gray-700 transition-colors"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
