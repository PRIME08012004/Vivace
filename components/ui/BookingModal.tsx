"use client";
import { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import CustomSelect from "./custom-select";
const quicksand = Quicksand({ weight: ["400", "600"] });

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setTimeout(() => setSubmitted(false), 300);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className={cn(
          quicksand.className,
          "relative w-full max-w-md mx-4 rounded-2xl p-7",
          "transition-all duration-300 scale-100",
        )}
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(32px) saturate(200%)",
          WebkitBackdropFilter: "blur(32px) saturate(200%)",
          boxShadow:
            "0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full text-white/60 hover:text-white transition-all duration-200 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <h2 className="text-white text-lg font-semibold">
                Book your appointment
              </h2>
              <p className="text-white/50 text-xs mt-1">
                We&apos;ll confirm within 2 hours
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Field label="Full name">
                <input type="text" placeholder="Priya Sharma" />
              </Field>

              <Field label="Phone number">
                <input type="tel" placeholder="+91 98765 43210" />
              </Field>

              <Field label="Service">
                <CustomSelect
                  options={[
                    "Haircut & styling",
                    "Hair colour",
                    "Keratin treatment",
                    "Facial & cleanup",
                    "Bridal package",
                  ]}
                  placeholder="Select a service"
                />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Date">
                  <input type="date" />
                </Field>
                <Field label="Time">
                  <CustomSelect
                    options={[
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "2:00 PM",
                      "4:00 PM",
                    ]}
                    placeholder="Pick a time"
                  />
                </Field>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full mt-2 rounded-full py-3 text-sm text-white cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.12",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#631308")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
                }
              >
                Confirm booking
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{
                background: "rgba(100,220,150,0.15)",
                border: "1px solid rgba(100,220,150,0.3)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64dc96"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-white text-base font-semibold mb-1">
              Booking confirmed!
            </p>
            <p className="text-white/50 text-sm">
              We&apos;ll send you a reminder before your appointment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] uppercase tracking-wider text-white/50">
        {label}
      </label>
      <div
        className="[&>input]:w-full [&>input]:bg-white/[0.07] [&>input]:border [&>input]:border-white/10 [&>input]:rounded-xl [&>input]:px-3 [&>input]:py-2 [&>input]:text-sm [&>input]:text-white [&>input]:outline-none [&>input]:placeholder:text-white/30
        [&>select]:w-full [&>select]:bg-white/[0.07] [&>select]:border [&>select]:border-white/10 [&>select]:rounded-xl [&>select]:px-3 [&>select]:py-2 [&>select]:text-sm [&>select]:text-white [&>select]:outline-none"
      >
        {children}
      </div>
    </div>
  );
}
