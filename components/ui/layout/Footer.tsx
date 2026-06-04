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
const quicksand=Quicksand({
  weight:"400"
})
export default function Footer() {
  return (
    <>
      <div className={cn("bg-gray-16 w-full overflow-hidden flex justify-evenly p-24",quicksand.className)}>
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
                " flex-1  text-5xl py-3 text-white pb-6",
              )}
            >
              Vivace
            </h1>
            <button className="bg-white hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 mb-30">
              Book Your Consultation
            </button>

            <h1 className="text-white text-2xl">Subscribe to the newsletter</h1>
            <div className="flex justify-between m-2 p-2 bg-gray-15 rounded-full ">
              <input
                type="text"
                placeholder="Email"
                className="outline-none p-3 text-white"
              />
              <div className="rounded-full text-white bg-wcu-red hover:bg-wcu-rose p-2  ">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn("w-full  bg-gray-16 ",quicksand.className)}>
        <hr className="border-t bg-[#5f5f5f] opacity-50" />
        <div className="flex justify-between p-2 pl-24 pb-4">
          <div className="flex gap-8 text-white ">
            <h2 className="cursor-pointer">Sitemap</h2>
            <h2 className="cursor-pointer">Privacy Policy</h2>
            <h2 className="cursor-pointer">Terms of Services</h2>
          </div>
          <div className="flex justify-center text-white pr-24">
            <h1>Copyright &copy; Vivace All Rights Reserved </h1>
          </div>
        </div>
      </div>
    </>
  );
}
