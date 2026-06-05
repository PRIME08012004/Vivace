import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import { CalComponent } from "../cal-component";
import Image from "next/image";
import ContactUsForm from "../form";

const quicksand = Quicksand({
  weight: "400",
});

export default function Booking() {
  return (
    <div
      className={cn(
        quicksand.className,
        "flex flex-col md:flex-row justify-evenly gap-8 md:gap-0 p-4 sm:p-8 md:p-0",
      )}
    >
      <div className="flex relative overflow-hidden flex-col w-full md:w-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium">
          Booking
        </h1>
        <p className="w-full md:w-90 pt-4 md:pt-8 text-sm sm:text-base">
          Ready for a transformative experience? Book your appointment now at
          vivace and let us craft a style that defines you.
        </p>
        <div className="">
          <Image
            src={"/hm4.png"}
            alt="Hair Model"
            width={380}
            height={300}
            className="rounded-2xl md:rounded-4xl mt-4 md:mt-8 object-fill w-full max-w-xs md:max-w-sm"
          />
        </div>
      </div>
      <div className="w-full md:w-auto overflow-x-auto">
        <CalComponent />
      </div>
      <div className="w-full md:w-130">
        <ContactUsForm />
      </div>
    </div>
  );
}
