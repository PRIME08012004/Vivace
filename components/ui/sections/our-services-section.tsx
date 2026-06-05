import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import Modal from "@/components/ui/modalCard";
const quicksand = Quicksand({
  weight: ["400", "700"],
});

export default function OurServices() {
  return (
    <>
      <div id="our-services" className="flex flex-col md:flex-row justify-between pb-8 md:pb-16 px-4 sm:px-8">
        <div
          className={cn(
            quicksand.className,
            "w-full md:w-16 md:flex-1 h-auto md:h-100 flex justify-center items-center p-4 sm:p-8",
          )}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl md:text-6xl p-2 sm:p-4 font-medium">Our Services</h1>
            <p className="p-2 sm:p-4 text-sm sm:text-base">
              Beyond haircuts, discover a comprehensive<br></br> range of
              services, from coloring to extensions
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 md:flex-2 p-4 sm:p-8 md:p-20">
          <Modal />
        </div>
      </div>
    </>
  );
}
