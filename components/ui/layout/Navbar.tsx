"use client";
import { Monoton } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Quicksand } from "next/font/google";
import { useEffect, useState } from "react";

const monoton = Monoton({ weight: ["400"] });
const quicksand = Quicksand({ weight: ["400"] });

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsLight(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isLight ? "black" : "white";
  const subTextColor = isLight ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.8)";
  const navBg = isLight
    ? "rgba(255, 255, 255, 0.45)"
    : "rgba(255, 255, 255, 0.08)";
  const borderColor = isLight
    ? "rgba(0, 0, 0, 0.12)"
    : "rgba(255, 255, 255, 0.15)";
  const buttonBg = isLight
    ? "rgba(0, 0, 0, 0.08)"
    : "rgba(255, 255, 255, 0.15)";
  const buttonBorder = isLight
    ? "rgba(0, 0, 0, 0.2)"
    : "rgba(255, 255, 255, 0.25)";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "#our-services" },
    { name: "Our Team", href: "#our-team" },
    { name: "Our Products", href: "#store" },
    { name: "Career", href: "/contact" },
  ];

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] sm:w-[98vw] max-w-screen px-2 sm:px-0",
        quicksand.className,
      )}
    >
      <div
        className="flex items-center rounded-xl sm:rounded-2xl px-2 sm:px-4 py-2 sm:py-0 transition-all duration-500"
        style={{
          background: navBg,
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: `1px solid ${borderColor}`,
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
        }}
      >
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: textColor }}
        >
          <span className="w-5 h-0.5 transition-all" style={{ background: textColor }} />
          <span className="w-5 h-0.5 transition-all" style={{ background: textColor }} />
          <span className="w-5 h-0.5 transition-all" style={{ background: textColor }} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1">
          <ul className={cn(quicksand.className, "flex gap-4 lg:gap-8 p-3 px-4")}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm relative group transition-colors duration-500"
                  style={{ color: subTextColor }}
                >
                  {link.name}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: textColor }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <h1
          className={cn(
            monoton.className,
            "flex-1 text-center md:flex-none md:flex md:justify-center md:flex-1 text-3xl sm:text-4xl md:text-5xl py-2 md:py-3 select-none transition-colors duration-500",
          )}
          style={{ color: textColor }}
        >
          Vivace
        </h1>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-3 p-3">
          <button
            className={cn(
              quicksand.className,
              "text-xs sm:text-sm cursor-pointer transition-all duration-500 rounded-full px-5 py-2",
            )}
            style={{
              background: buttonBg,
              border: `1px solid ${buttonBorder}`,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
              color: textColor,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = isLight
                ? "rgba(0,0,0,0.15)"
                : "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                buttonBg;
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden mt-2 rounded-xl p-4"
          style={{
            background: navBg,
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: `1px solid ${borderColor}`,
          }}
        >
          <ul className={cn(quicksand.className, "flex flex-col gap-3")}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors duration-500 block py-2"
                  style={{ color: subTextColor }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              className={cn(
                quicksand.className,
                "text-sm cursor-pointer transition-all duration-500 rounded-full px-5 py-2 w-full mt-2",
              )}
              style={{
                background: buttonBg,
                border: `1px solid ${buttonBorder}`,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                color: textColor,
              }}
            >
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
