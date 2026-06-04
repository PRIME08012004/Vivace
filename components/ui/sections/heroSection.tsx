"use client";
import Navbar from "@/components/ui/layout/Navbar";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Quicksand } from "next/font/google";
import { AnimatedTooltipPreview } from "@/components/ui/heroCard";
import { cn } from "@/lib/utils";

import Card from "@/components/ui/Card";

const quicksand = Quicksand({
  weight: ["400"],
});

export default function Hero() {
  const router = useRouter();

  return (
    <section className="h-screen w-full relative overflow-hidden ">
      <Image
        src="/finalmodel.png"
        alt="Hair Model"
        fill
        className="object-fill "
      />
      {/* <Navbar /> */}
      <div
        className={cn(
          quicksand.className,
          "relative z-10 flex justify-between h-screen ",
        )}
      >
        <div className="flex flex-col gap-6 justify-center items-start h-full w-1/2 pl-16 -mt-40 ml-6 pt-80">
          <h1 className="text-white text-7xl font-semibold">Get Hair Style</h1>
          <h1 className="text-white text-7xl font-semibold">You Deserve</h1>
          <button
            className="rounded-full bg-bb-red hover:bg-rose-900 text-white px-6 py-3 cursor-pointer"
            onClick={() => {
              router.push("/booking");
            }}
          >
            Book Appointment
          </button>
          <p className="text-white text-base max-w-sm pt-8 pb-16">
            Discover a world of sophistication and personalized beauty at
            Vivace. Our salon is more than just a place for haircuts; it&pos;s a
            haven where your unique style takes center stage.
          </p>
          <div className="flex justify-center gap-2">
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

        <div className="absolute bottom-0 right-0 p-8 mb-8 mr-8 flex justify-center items-center ">
          <AnimatedTooltipPreview />
        </div>
      </div>
    </section>
  );
}
