import { Monoton } from "next/font/google";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Quicksand } from "next/font/google";
import BB from "./icons/burgerbutton";
const monoton = Monoton({
  weight: ["400"],
});
const quicksand = Quicksand({
  weight: ["400"],
});

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/contact" },
  ];

  return (
    <>
      <div className="flex relative z-10 text-white">
        <div className="flex-1">
          <ul
            className={cn(
              quicksand.className,
              "flex justify-items-start gap-16 p-4 m-2 px-12 ",
            )}
          >
            {navLinks.map((links) => (
              <li className="flex hover:text-gray-400" key={links.name}>
                <Link href={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <h1
          className={cn(
            monoton.className,
            " flex-1 flex justify-center items-center text-7xl py-3",
          )}
        >
          Vivace
        </h1>

        <div className="flex-1 flex justify-end items-center p-4 gap-2 m-2">
            <button className={cn(quicksand.className,"rounded-full bg-white text-black px-6 py-3 cursor-pointer ")}>Contact Us</button>
            <BB/>
        </div>
      </div>
    </>
  );
}
