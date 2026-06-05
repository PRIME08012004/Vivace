"use client";
import { useState } from "react";
import Image from "next/image";

import BookingModal from "../BookingModal";
import { Quicksand } from "next/font/google";
import { AnimatedTooltipPreview } from "@/components/ui/heroCard";
import { cn } from "@/lib/utils";

import Card from "@/components/ui/Card";

const quicksand = Quicksand({
  weight: ["400"],
});

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="min-h-screen h-auto sm:h-screen w-full relative overflow-hidden">
      <Image
        src="/finalmodel.png"
        alt="Hair Model"
        fill
        className="object-cover"
      />

      <div
        className={cn(
          quicksand.className,
          "relative z-10 flex flex-col md:flex-row justify-between min-h-screen md:h-screen",
        )}
      >
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-start h-full w-full md:w-1/2 px-4 sm:px-8 md:pl-16 pt-24 sm:pt-40 md:pt-0 md:-mt-40 md:ml-6 md:pt-80 pb-8 md:pb-0">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Get Hair Style
          </h1>
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            You Deserve
          </h1>
          <button
            className="rounded-full bg-bb-red hover:bg-rose-900 text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer text-sm sm:text-base"
            onClick={() => {
              setBookingOpen(true);
            }}
          >
            Book Appointment
          </button>
          <BookingModal
            isOpen={bookingOpen}
            onClose={() => setBookingOpen(false)}
          />
          <p className="text-white text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm pt-4 sm:pt-8 pb-6 sm:pb-16">
            Discover a world of sophistication and personalized beauty at
            Vivace. Our salon is more than just a place for haircuts; it&pos;s a
            haven where your unique style takes center stage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 w-full md:w-auto">
            <Card
              title="New Arrival"
              subtitle="+5 product"
              image="/hd2.jpg"
              imagePosition="background"
            />
            <Card
              title="50% Off"
              subtitle="First Booking Get"
              image="/hairm.jpg"
              imagePosition="background"
            />
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-0 right-0 p-4 md:p-8 mb-4 md:mb-8 mr-4 md:mr-8">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </section>
  );
}
