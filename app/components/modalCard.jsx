import Image from "next/image";
import { Quicksand } from "next/font/google";
import { cn } from "../lib/utils";

const quicksand = Quicksand({
  weight: ["400"],
});

export default function Modal() {
  return (
    <div className="flex justify-center gap-10 items-start p-4">
      <div className="w-80 h-80 rounded-4xl  relative overflow-hidden">
        <div
          className={cn(
            "z-50 p-2 m-3 relative w-20 bg-white rounded-full flex justify-center items-center",
            quicksand.className,
          )}
        >
          Haircut
        </div>
        <Image
          src={"/corousalmodel2.jpg"}
          fill
          className="object-fill"
          alt="ModelImage"
        />
      </div>
      <div className="w-80 h-100 rounded-4xl bg-amber-300 overflow-hidden relative">
        <div
          className={cn(
            "z-50 p-2 m-3 relative w-24 bg-white rounded-full flex justify-center items-center",
            quicksand.className,
          )}
        >
          Hairstyles
        </div>
        <Image
          src={"/cm3.jpg"}
          fill
          className="object-fill"
          alt="ModelImage"
        />
      </div>
      <div className="w-80 h-80 rounded-4xl bg-amber-300 overflow-hidden relative">
           <div
          className={cn(
            "z-50 p-2 m-3 relative w-24 bg-white rounded-full flex justify-center items-center",
            quicksand.className,
          )}
        >
          Haircolor
        </div>
        <Image
          src={"/corousalmodel.jpg"}
          fill
          className="object-fill"
          alt="ModelImage"
        />
      </div>
    </div>
  );
}
