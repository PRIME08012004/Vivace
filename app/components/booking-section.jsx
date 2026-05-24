import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import { CalComponent } from "./cal-component";
import Image from "next/image";
import BookingForm from "./form";

const quicksand = Quicksand({
  weight: "400",
});

export default function Booking() {
  return (
    <div className={cn(quicksand.className, "flex justify-between ")}>
      <div className="flex relative overflow-hidden flex-col">
        <h1 className="text-6xl font-medium ml-34">Booking</h1>
        <p className="ml-34 w-90 pt-8">
          Ready for a transformative experience? Book your appointment now at
          vivace and let us craft a style that defines you.
        </p>
        <div className="ml-34 ">
          <Image
            src={"/hm4.png"}
            alt="Hair Model"
           
            width={380}
            height={300}
            className="rounded-4xl mt-8 object-fill "
          />
        </div>
      </div>
      <div>
        <CalComponent />
      </div>
      <div className="w-64">
        <BookingForm/>
      </div>
    </div>
  );
}
