"use client";

import * as React from "react";

import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import { Calendar } from "@/app/components/calendar";

const quicksand = Quicksand({
  weight: "400",
});

export function CalComponent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div
      className={cn(
        quicksand.className,
        "flex flex-col p-2 bg-white rounded-4xl shadow-xl",
      )}
    >
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className={cn(
          quicksand.className,
          "rounded-lg border",
          "size-120 border-2 rounded-4xl p-5  overflow-hidden m-2 bg-cal-brown",
        )}
        captionLayout="dropdown"
      />
      <div className="flex flex-col p-5 ">
        <h1 className="text-4xl pb-4 font-bold">Working Hours</h1>
        <h2 className="text-md flex justify-between">
          Working Days <span>9AM-9PM</span>
        </h2>
        <hr className="border-t-2 bg-cal-brown m-4" />
        <h2 className="text-md flex justify-between">
          Saturday <span>10AM-8PM</span>
        </h2>
        <hr className="border-t-2 bg-cal-brown m-4" />
        <h2 className="text-md flex justify-between">
          Sunday <span>Closed</span>
        </h2>
        <hr className="border-t-2 bg-cal-brown m-4" />
      </div>
    </div>
  );
}
