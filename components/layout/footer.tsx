"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  AirCover
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Anti-discrimination
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Disability support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Cancellation options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Report neighborhood concern
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Airbnb your home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Airbnb your experience
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Airbnb your service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  AirCover for Hosts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Hosting resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Community forum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  2025 Summer Release
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Gift cards
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline transition-all duration-200"
                >
                  Airbnb.org emergency stays
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span>© 2025 Airbnb, Inc.</span>
            <Link
              href="#"
              className="hover:underline transition-all duration-200"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:underline transition-all duration-200"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="hover:underline transition-all duration-200"
            >
              Sitemap
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-200 px-3 py-2"
            >
              <Globe className="h-4 w-4" />
              <span>English (US)</span>
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:bg-gray-200 transition-colors duration-200 px-3 py-2"
            >
              $ USD
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
