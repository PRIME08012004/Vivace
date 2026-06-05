import Image from "next/image";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import XIcon from "../icons/x";
import YoutubeIcon from "../icons/youtube";
import LinkedIcon from "../icons/linked";
import { Monoton, Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import Arrow from "../icons/arrowRight";

const monoton = Monoton({
  weight: ["400"],
});
const quicksand = Quicksand({
  weight: "400",
});
export default function Footer() {
  return (
    <>
      <div
        className={cn(
          "bg-gray-16 w-full overflow-hidden flex flex-col md:flex-row justify-evenly p-4 sm:p-8 md:p-24 gap-8 md:gap-0",
          quicksand.className,
        )}
      >
        <div className="relative rounded-2xl md:rounded-4xl w-full md:w-auto">
          <Image
            src={"/image copy 5.png"}
            width={500}
            height={200}
            alt="Map Image"
            className="object-cover m-2 p-2 rounded-2xl md:rounded-4xl w-full md:w-auto"
          />
        </div>
        <div className="w-full md:w-auto">
          <h1 className="text-white text-lg sm:text-2xl pb-4 md:pb-6">
            Contact Us
          </h1>
          <div className="text-gray-300 text-base md:text-lg">
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
            <h1 className="text-white text-lg sm:text-2xl pb-4 md:pb-6 pt-4 md:pt-6">
              Visit Us
            </h1>
            <div className="text-gray-300 text-base md:text-lg">
              <h2 className="pb-2">
                12, Sea Breeze Bungalow
                <br />
              </h2>
              <h2 className="pb-2">
                Pedder Road, Malabar Hills
                <br />
              </h2>
              <h2 className="pb-2">Mumbai - 400 006 Maharashtra, India</h2>
              <div className="pt-4 flex gap-6 md:gap-8">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <YoutubeIcon />
                <LinkedIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={cn(
                monoton.className,
                "flex-1 text-4xl sm:text-5xl py-3 text-white pb-4 md:pb-6",
              )}
            >
              Vivace
            </h1>
            <button className="bg-white hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 mb-8 md:mb-30 text-sm sm:text-base">
              Book Your Consultation
            </button>

            <h1 className="text-white text-base sm:text-2xl text-center">
              Subscribe to the newsletter
            </h1>
            <div className="flex justify-between m-2 p-2 bg-gray-15 rounded-full w-full sm:w-auto mt-4">
              <input
                type="text"
                placeholder="Email"
                className="outline-none p-2 sm:p-3 text-white bg-transparent text-sm flex-1"
              />
              <div className="rounded-full text-white bg-wcu-red hover:bg-wcu-rose p-2">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn("w-full bg-gray-16", quicksand.className)}>
        <hr className="border-t bg-[#5f5f5f] opacity-50" />
        <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-6 md:p-8 md:pl-24 md:pb-4 gap-4 sm:gap-0">
          <div className="flex flex-wrap gap-4 sm:gap-8 text-white text-sm sm:text-base">
            <h2 className="cursor-pointer">Sitemap</h2>
            <h2 className="cursor-pointer">Privacy Policy</h2>
            <h2 className="cursor-pointer">Terms of Services</h2>
          </div>
          <div className="flex justify-center text-white text-sm sm:text-base md:pr-24">
            <h1>Copyright &copy; Vivace All Rights Reserved </h1>
          </div>
        </div>
      </div>
    </>
  );
}
