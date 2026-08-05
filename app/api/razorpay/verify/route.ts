import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const orderId = Number(body.orderId);
    const razorpayOrderId = String(body.razorpayOrderId ?? "");
    const razorpayPaymentId = String(body.razorpayPaymentId ?? "");
    const razorpaySignature = String(body.razorpaySignature ?? "");

    if (
      !Number.isFinite(orderId) ||
      !razorpayOrderId ||
      !razorpayPaymentId ||
      !razorpaySignature
    ) {
      return NextResponse.json(
        { error: "Missing payment verification fields" },
        { status: 400 },
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Razorpay is not configured" },
        { status: 500 },
      );
    }

    const expected = crypto
      .createHmac("sha256", secret)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest("hex");

    if (expected !== razorpaySignature) {
      await prisma.order.updateMany({
        where: { id: orderId, razorpayOrderId },
        data: { status: "FAILED" },
      });
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 },
      );
    }

    const order = await prisma.order.findFirst({
      where: { id: orderId, razorpayOrderId },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const updated = await prisma.order.update({
      where: { id: order.id },
      data: {
        status: "PAID",
        razorpayPaymentId,
        razorpaySignature,
      },
    });

    return NextResponse.json({ ok: true, order: updated });
  } catch (error) {
    console.error("Razorpay verify failed:", error);
    return NextResponse.json(
      { error: "Payment verification failed" },
      { status: 500 },
    );
  }
}
