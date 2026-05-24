import Image from "next/image";
import { Quicksand } from "next/font/google";
import { cn } from "../lib/utils";

const quicksand = Quicksand({
  weight: ["400"],
});

export default function Modal() {
  return (
    <div className="flex justify-center gap-10 items-start p-4">
      <div className="w-100 h-80 rounded-4xl  relative overflow-hidden shadow-md">
        <div
          className={cn(
            "z-50 p-2 m-3 relative w-20 bg-white rounded-full flex justify-center items-center ",
            quicksand.className,
          )}
        >
         <h1 className="font-bold">
           Haircut
         </h1>
        </div>
        <Image
          src={"/corousalmodel2.jpg"}
          fill
          className="object-fill "
          alt="ModelImage"
        />
      </div>
      <div className="w-100 h-100 rounded-4xl overflow-hidden relative shadow-md">
        <div
          className={cn(
            "z-50 p-2 m-3 relative w-24 bg-white rounded-full flex justify-center items-center",
            quicksand.className,
          )}
        >
          <h1 className="font-bold">
            Hairstyles
          </h1>
        </div>
        <Image
          src={"/cm3.jpg"}
          fill
          className="object-fill"
          alt="ModelImage"
        />
      </div>
      <div className="w-100 h-80 rounded-4xl  overflow-hidden relative shadow-md">
           <div
          className={cn(
            "z-50 p-2 m-3 relative w-24 bg-white rounded-full flex justify-center items-center",
            quicksand.className,
          )}
        >
          <h1 className="font-bold">
            Haircolor
          </h1>
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
