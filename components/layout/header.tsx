"use client";

import Link from "next/link";
import { Globe, Menu, User, HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeaderProps {
  onMobileSearchOpen?: () => void;
}

export default function Header({ onMobileSearchOpen }: HeaderProps) {
  return (
    <>
      <div className="md:hidden">
        <div className="px-4 py-3 bg-white">
          <Button
            variant="outline"
            className="w-full h-12 rounded-full border-gray-300 shadow-sm bg-white justify-start"
            onClick={onMobileSearchOpen}
          >
            <Search className="h-4 w-4 text-gray-400 mr-3" />
            <span className="text-gray-600 text-sm">Start your search</span>
          </Button>
        </div>
        <div className="px-4 pb-4 bg-white border-b border-gray-200">
          <div className="flex items-center md:justify-between justify-center">
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center space-y-1">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-5 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-900 border-b-2 border-gray-900 pb-1">
                  Homes
                </span>
              </div>

              <div className="flex flex-col items-center space-y-1 relative">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-500">Experiences</span>
                <Badge className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 py-0 h-4 rounded-sm">
                  NEW
                </Badge>
              </div>

              <div className="flex flex-col items-center space-y-1 relative">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-4 h-3 bg-gray-600 rounded-t-full"></div>
                </div>
                <span className="text-xs text-gray-500">Services</span>
                <Badge className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 py-0 h-4 rounded-sm">
                  NEW
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="hidden md:block sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-pink-500 hidden sm:block">
                airbnb
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8 bg-gray-100 rounded-full px-6 py-3">
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:bg-white hover:shadow-sm rounded-full px-4 py-2 transition-all duration-200"
                >
                  🏠 Stays
                </Button>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:bg-white hover:shadow-sm rounded-full px-4 py-2 transition-all duration-200 flex items-center space-x-1"
                >
                  <span>🎯 Experiences</span>
                  <Badge
                    variant="secondary"
                    className="ml-1 bg-pink-100 text-pink-600 text-xs"
                  >
                    NEW
                  </Badge>
                </Button>
                <Button
                  variant="ghost"
                  className="text-sm font-medium hover:bg-white hover:shadow-sm rounded-full px-4 py-2 transition-all duration-200 flex items-center space-x-1"
                >
                  <span>🛎️ Services</span>
                  <Badge
                    variant="secondary"
                    className="ml-1 bg-pink-100 text-pink-600 text-xs"
                  >
                    NEW
                  </Badge>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                className="hidden md:flex text-sm font-medium hover:bg-gray-100 transition-colors duration-200 px-3 py-2"
              >
                Become a host
              </Button>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Globe className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">Language and region</h3>
                      <Button variant="ghost" size="sm">
                        Currency
                      </Button>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Translation</div>
                          <div className="text-sm text-gray-500">
                            Automatically translate descriptions and reviews to
                            English.
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                          <div className="w-5 h-5 bg-white rounded-full shadow absolute top-0.5 right-0.5 transition-transform"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-4">
                      Choose a language and region
                    </h4>
                    <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                      {[
                        "English - United States",
                        "Azərbaycan dili - Azərbaycan",
                        "Bahasa Indonesia - Indonesia",
                        "Bosanski - Bosna i Hercegovina",
                        "Català - Espanya",
                        "Čeština - Česká republika",
                      ].map((lang) => (
                        <Button
                          key={lang}
                          variant="ghost"
                          className="justify-start p-3 h-auto text-sm"
                        >
                          {lang}
                        </Button>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 rounded-full border-gray-300 hover:shadow-md transition-all duration-200 px-3 py-2"
                  >
                    <Menu className="h-4 w-4" />
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0" align="end">
                  <div className="py-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 font-normal"
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help Center
                    </Button>
                    <Separator className="my-1" />
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 font-normal"
                    >
                      <div className="flex items-center">
                        <div className="mr-2 w-4 h-4 bg-green-100 rounded flex items-center justify-center">
                          🏠
                        </div>
                        <div>
                          <div className="font-medium">Become a host</div>
                          <div className="text-xs text-gray-500">
                            It's easy to start hosting and earn extra income.
                          </div>
                        </div>
                      </div>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 font-normal"
                    >
                      Refer a Host
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 font-normal"
                    >
                      Find a co-host
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 font-normal"
                    >
                      Gift cards
                    </Button>
                    <Separator className="my-1" />
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 font-normal"
                    >
                      Log in or sign up
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
