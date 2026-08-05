import { prisma } from "@/lib/prisma";
import {
  bookingConfirmationMessage,
  sendWhatsAppMessage,
} from "@/lib/whatsapp";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const bookings = await prisma.bookings.findMany({
    include: { user: { select: { id: true, name: true, email: true, phone: true } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ res: bookings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = body.email
      ? String(body.email).toLowerCase().trim()
      : `${phone.replace(/\D/g, "")}@guest.vivace.local`;
    const service = String(body.service ?? "").trim();
    const date = body.date ? new Date(body.date) : null;
    const timeSlot = String(body.timeSlot ?? "").trim();
    const notes = body.notes ? String(body.notes) : null;

    if (!name || !phone || !service || !date || Number.isNaN(date.getTime()) || !timeSlot) {
      return NextResponse.json(
        { error: "Name, phone, service, date, and time are required" },
        { status: 400 },
      );
    }

    const user = await prisma.user.upsert({
      where: { email },
      create: {
        name,
        email,
        phone,
      },
      update: {
        name,
        phone,
      },
    });

    let booking = await prisma.bookings.create({
      data: {
        userId: user.id,
        service,
        date,
        timeSlot,
        notes,
        status: "PENDING",
      },
    });

    const message = bookingConfirmationMessage({
      name,
      service,
      date: date.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      timeSlot,
    });

    const whatsapp = await sendWhatsAppMessage(phone, message);
    if (whatsapp.ok) {
      booking = await prisma.bookings.update({
        where: { id: booking.id },
        data: { status: "CONFIRMED" },
      });
    }

    return NextResponse.json(
      {
        booking,
        whatsappSent: whatsapp.ok,
        whatsappError: whatsapp.error ?? null,
      },
      { status: 201 },
    );
  } catch (e) {
    console.error("Booking create failed:", e);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 },
    );
  }
}
