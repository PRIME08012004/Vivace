import Image from "next/image";
import FacebookIcon from "./icons/facebook";
import InstagramIcon from "./icons/instagram";
import XIcon from "./icons/x";
import YoutubeIcon from "./icons/youtube";
import LinkedIcon from "./icons/linked";
import { Monoton } from "next/font/google";
import { cn } from "@/lib/utils";

const monoton = Monoton({
  weight: ["400"],
});

export default function Footer() {
  return (
    <>
      <div className="bg-black w-full overflow-hidden flex justify-evenly p-24">
        <div className="relative rounded-4xl">
          <Image
            src={"/image copy 5.png"}
            width={500}
            height={200}
            alt="Map Image"
            className="object-cover m-2 p-2 rounded-4xl"
          />
        </div>
        <div>
          <h1 className="text-white text-2xl pb-6">Contact Us</h1>
          <div className="text-gray-300 text-lg">
            <h2 className="pb-2">
              {" "}
              (123) 456 789
              <br />
            </h2>
            <h2 className="pb-2">
              info@vivace.com
              <br />
            </h2>
            <h2 className="pb-2">career@vivace.com</h2>
            <h1 className="text-white text-2xl pb-6 pt-6">Visit Us</h1>
            <div className="text-gray-300 text-lg">
              <h2 className="pb-2">
                12, Sea Breeze Bungalow
                <br />
              </h2>
              <h2 className="pb-2">
                Pedder Road, Malabar Hills
                <br />
              </h2>
              <h2 className="pb-2">Mumbai - 400 006 Maharashtra, India</h2>
              <div className="pt-4 flex gap-8 ">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <YoutubeIcon />
                <LinkedIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
         <div className="flex flex-col justify-center items-center">
           <h1
            className={cn(
              monoton.className,
              " flex-1 flex justify-center items-center text-5xl py-3 text-white pb-6",
            )}
          >
            Vivace
          </h1>
          <button className="bg-white rounded-full px-4 py-2 mb-30">Book Your Consultation</button>

          <h1 className="text-white text-2xl">Subscribe to the newsletter</h1>
         </div>
        </div>
      </div>
    </>
  );
}
