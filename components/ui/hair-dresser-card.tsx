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
    <section className=" p-12 overflow-hidden">
      <div className="grid grid-cols-[1fr_2.5fr] gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-6xl font-medium text-black mb-6">Our Team</h2>
            <p className="text-black text-sm leading-relaxed mb-6">
              Entrust your locks to our team of skilled and
              <br /> creative stylists
            </p>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <button className=" cursor-pointer hover:bg-wcu-rose bg-wcu-red text-white px-6 py-3 rounded-full text-lg font-medium">
              Join the team
            </button>
            <button
              onClick={() => scroll("right")}
              className="m-2 hover:bg-black hover:text-white w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll("left")}
              className="hover:bg-black hover:text-white w-11 h-11 rounded-full border-2 border-gray-800 flex items-center justify-center cursor-pointer"
            >
              <Arrow />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-hidden scroll-smooth pr-8 mask-r-from-50%"
        >
          {team.map((member, i) => (
            <div key={i} className={`min-w-[280px] shrink-0 `}>
              <div className="rounded-2xl h-80 overflow-hidden">
                <Image
                  width={400}
                  height={600}
                  alt={"Image"}
                  src={member.img}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-gray-900 mt-3">{member.name}</p>
              <p className="text-sm text-black">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
