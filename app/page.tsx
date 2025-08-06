import { SmartButton } from "@/components/custom/smart-button";
import { SmartCard, SmartCardContent } from "@/components/custom/smart-card";
import { SmartBadge } from "@/components/custom/smart-badge";
import { FloatingHeader } from "@/components/custom/floating-header";
import { HeroSearch } from "@/components/custom/hero-search";
import { AnimatedCounter } from "@/components/custom/animated-counter";
import {
  Users,
  Star,
  Shield,
  Heart,
  Globe,
  Home,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  TrendingUp,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AirbnbLanding() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <FloatingHeader />

      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Beautiful vacation rental destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Belong
            <span className="block bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] bg-clip-text text-transparent">
              Anywhere
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary places to stay, unique experiences, and
            amazing hosts around the world
          </p>

          <HeroSearch />
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: 4000000,
                suffix: "+",
                label: "Hosts worldwide",
                icon: Home,
              },
              {
                number: 220,
                suffix: "+",
                label: "Countries & regions",
                icon: Globe,
              },
              {
                number: 1000000000,
                suffix: "+",
                label: "Guest arrivals",
                icon: Users,
              },
              { number: 100000000, suffix: "+", label: "Listings", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-xl">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Live like a local
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cozy apartments to luxury villas, find the perfect space for
              your next adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Entire places",
                subtitle: "Have a place to yourself",
                image: "/image_1.png",
                color: "from-blue-500 to-purple-600",
              },
              {
                title: "Unique stays",
                subtitle: "Spaces that are more than just a place to sleep",
                image: "/image_2.png",
                color: "from-green-500 to-teal-600",
              },
              {
                title: "Pet-friendly",
                subtitle: "Bring your furry friends along",
                image: "/image_3.png",
                color: "from-orange-500 to-red-600",
              },
            ].map((category, index) => (
              <SmartCard
                key={index}
                hover
                glow
                gradient
                className="cursor-pointer overflow-hidden"
              >
                <SmartCardContent className="p-0 relative">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.subtitle}</p>
                    <SmartButton gradient className="p-0 h-auto font-semibold">
                      Explore{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </SmartButton>
                  </div>
                </SmartCardContent>
              </SmartCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SmartBadge
                variant="gradient"
                icon={<Play className="w-4 h-4" />}
                className="mb-6"
              >
                Experiences
              </SmartBadge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Make memories
                <span className="block text-[#FF5A5F]">beyond the stay</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover unique activities led by local experts. From cooking
                classes to adventure tours, create unforgettable moments
                wherever you go.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Expert local guides",
                  "Small group experiences",
                  "Authentic cultural immersion",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#FF5A5F]" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <SmartButton
                gradient
                glow
                ripple
                className="px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Browse experiences
              </SmartButton>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <Image
                  src="/happy-host-welcoming-guests.png"
                  alt="Local experience"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
                <SmartCard className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
                  <SmartCardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          4.9
                        </div>
                        <div className="text-sm text-gray-600">
                          Average rating
                        </div>
                      </div>
                    </div>
                  </SmartCardContent>
                </SmartCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A5F] via-[#FF385C] to-purple-600"></div>
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-16">
            <SmartBadge
              variant="glow"
              icon={<TrendingUp className="w-4 h-4" />}
              className="mb-6"
            >
              Earn extra income
            </SmartBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your space could be
              <span className="block">earning you money</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
              Join millions of hosts who have unlocked new opportunities by
              sharing their space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Clock,
                title: "Flexible hosting",
                desc: "Host on your schedule",
              },
              {
                icon: Shield,
                title: "Host protection",
                desc: "Comprehensive coverage included",
              },
              {
                icon: TrendingUp,
                title: "Earn money",
                desc: "Set your own prices",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform backdrop-blur-sm">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="opacity-90">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-x-4">
            <SmartButton
              className="bg-white text-[#FF5A5F] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              glow
            >
              Try hosting
            </SmartButton>
            <SmartButton
              glow
              className="bg-white text-[#FF5A5F] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Learn more
            </SmartButton>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Travel with confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety and security are our top priorities, every step of the
              way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified listings",
                desc: "Every listing is verified for quality and safety",
              },
              {
                icon: Heart,
                title: "24/7 support",
                desc: "Get help whenever you need it, day or night",
              },
              {
                icon: CheckCircle,
                title: "Secure payments",
                desc: "Your payment information is always protected",
              },
              {
                icon: Award,
                title: "Host guarantee",
                desc: "Coverage for property damage up to $3M",
              },
            ].map((feature, index) => (
              <SmartCard key={index} hover glow gradient>
                <SmartCardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </SmartCardContent>
              </SmartCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Inspiration for your next trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover trending destinations and hidden gems around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: "Paris",
                country: "France",
                properties: "12,000+ places",
                image: "/image_4.png",
              },
              {
                city: "Tokyo",
                country: "Japan",
                properties: "8,500+ places",
                image: "/image_5.png",
              },
              {
                city: "New York",
                country: "United States",
                properties: "15,000+ places",
                image: "/image_6.png",
              },
              {
                city: "London",
                country: "United Kingdom",
                properties: "10,000+ places",
                image: "/image_7.png",
              },
              {
                city: "Barcelona",
                country: "Spain",
                properties: "7,200+ places",
                image: "/image_8.png",
              },
              {
                city: "Amsterdam",
                country: "Netherlands",
                properties: "5,800+ places",
                image: "/image_9.png",
              },
              {
                city: "Rome",
                country: "Italy",
                properties: "6,500+ places",
                image: "/image_10.png",
              },
              {
                city: "Bali",
                country: "Indonesia",
                properties: "4,200+ places",
                image: "/image_11.png",
              },
            ].map((destination, index) => (
              <SmartCard key={index} hover className="cursor-pointer">
                <SmartCardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={destination.image}
                      alt={destination.city}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {destination.city}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      {destination.country}
                    </p>
                    <p className="text-[#FF5A5F] text-sm font-medium">
                      {destination.properties}
                    </p>
                  </div>
                </SmartCardContent>
              </SmartCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <SmartCard className="bg-white p-12 shadow-2xl" gradient>
            <SmartCardContent className="p-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to explore?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join over 4 million hosts and 1 billion guests who have found
                their perfect match on Airbnb
              </p>
              <SmartButton
                gradient
                glow
                ripple
                className="px-12 py-4 text-lg font-semibold rounded-xl"
              >
                Start your search
                <ArrowRight className="w-5 h-5 ml-2" />
              </SmartButton>
            </SmartCardContent>
          </SmartCard>
        </div>
      </section>

      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    AirCover
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Anti-discrimination
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Disability support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Cancellation options
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Report neighborhood concern
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Airbnb your home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    AirCover for Hosts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Hosting resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Community forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Hosting responsibly
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Join a free Hosting class
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Airbnb</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    New features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Gift cards
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Airbnb.org emergency stays
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Diversity & Belonging
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Airbnb Associates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Frontline stays
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Guest referrals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Airbnb for Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>© 2024 Airbnb, Inc.</span>
                  <span>·</span>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Privacy
                  </Link>
                  <span>·</span>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Terms
                  </Link>
                  <span>·</span>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Sitemap
                  </Link>
                  <span>·</span>
                  <Link
                    href="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Company details
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
