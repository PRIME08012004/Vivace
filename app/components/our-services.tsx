import { Quicksand } from "next/font/google";
import { cn } from "../lib/utils";
import Modal from '@/app/components/modalCard'
const quicksand = Quicksand({
  weight: ["400", "700"],
});

export default function OurServices() {
  return (
    <>
      <div className="flex justify-between pb-16">
        <div
          className={cn(
            quicksand.className,
            "w-16 flex-1 h-100 flex justify-center items-center p-8",
          )}
        >
          <div className="flex flex-col ">
            <h1 className="text-6xl p-4 font-medium">Our Services</h1>
            <p className="p-4">
              Beyond haircuts, discover a comprehensive<br></br> range of services, from
              coloring to extensions
            </p>
          </div>
        </div>
        <div className="w-64 flex-2 p-20">
            <Modal/>
        </div>
      </div>
    </>
  );
}
