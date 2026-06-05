"use client";

import { useRef } from "react";
import Arrow from "./icons/arrowRight";
import ArrowLeft from "./icons/left-arrow";
import Image from "next/image";

const team = [
  { name: "Oliver Smith", role: "Hairdresser", img: "/image.png" },
  { name: "Amelia Brown", role: "Hairdresser", img: "/image copy.png" },
  { name: "Emily Walker", role: "Senior Stylist", img: "/image copy 2.png" },
  { name: "Sophia Lane", role: "Color Specialist", img: "/image copy 3.png" },
  { name: "Tyler Durden", role: "Color Specialist", img: "/image copy 4.png" },
];

export default function OurTeamcard() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="p-4 sm:p-8 md:p-12 overflow-hidden w-full">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 md:gap-12 items-center">
        <div className="flex flex-col gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium text-black mb-4 md:mb-6">
              Our Team
            </h2>
            <p className="text-black text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              Entrust your locks to our team of skilled and creative stylists
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-4 md:mt-8">
            <button className="cursor-pointer hover:bg-wcu-rose bg-wcu-red text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-lg font-medium">
              Join the team
            </button>
            <button
              onClick={() => scroll("right")}
              className="m-2 hover:bg-black hover:text-white w-9 md:w-11 h-9 md:h-11 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer flex-shrink-0"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll("left")}
              className="hover:bg-black hover:text-white w-9 md:w-11 h-9 md:h-11 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer flex-shrink-0"
            >
              <Arrow />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth"
        >
          {team.map((member, index) => (
            <div key={index} className="flex-shrink-0 w-56 md:w-72">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base md:text-lg font-semibold text-black">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
