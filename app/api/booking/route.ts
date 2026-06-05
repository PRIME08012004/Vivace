import { prisma } from "@/lib/prisma";
import "dotenv/config.js";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await prisma.bookings.findFirst({});
    const booking = await prisma.bookings.create({
      data: {
        userId: body.userId,
        service: body.service,
        date: new Date(body.date),
        timeSlot: body.timeSlot,
        notes: body.notes ?? null,
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to create booking", e },
      { status: 500 },
    );
  }
}
