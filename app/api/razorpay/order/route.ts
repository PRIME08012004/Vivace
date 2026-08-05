import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";
import { getProductById, PRODUCTS } from "@/lib/products";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

function getRazorpay() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    throw new Error("Razorpay keys are not configured");
  }
  return new Razorpay({ key_id: keyId, key_secret: keySecret });
}

async function ensureProductsInDb() {
  for (const product of PRODUCTS) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      create: {
        slug: product.slug,
        name: product.name,
        description: product.description,
        priceInPaise: product.priceInPaise,
        image: product.image,
      },
      update: {
        name: product.name,
        description: product.description,
        priceInPaise: product.priceInPaise,
        image: product.image,
        active: true,
      },
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = Array.isArray(body.items) ? body.items : [];
    const address = body.address ?? {};

    if (!items.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const fullName = String(address.fullName ?? "").trim();
    const phone = String(address.phone ?? "").trim();
    const email = String(address.email ?? "").toLowerCase().trim();
    const line1 = String(address.line1 ?? "").trim();
    const line2 = address.line2 ? String(address.line2).trim() : null;
    const city = String(address.city ?? "").trim();
    const state = String(address.state ?? "").trim();
    const pincode = String(address.pincode ?? "").trim();

    if (!fullName || !phone || !email || !line1 || !city || !state || !pincode) {
      return NextResponse.json(
        { error: "Complete shipping address is required" },
        { status: 400 },
      );
    }

    const lineItems: { productId: number; quantity: number; priceInPaise: number; slug: string }[] = [];
    let amountInPaise = 0;

    for (const item of items) {
      const productId = Number(item.productId);
      const quantity = Number(item.quantity);
      const catalog = getProductById(productId);
      if (!catalog || !Number.isFinite(quantity) || quantity < 1) {
        return NextResponse.json(
          { error: `Invalid cart item: ${productId}` },
          { status: 400 },
        );
      }
      amountInPaise += catalog.priceInPaise * quantity;
      lineItems.push({
        productId,
        quantity,
        priceInPaise: catalog.priceInPaise,
        slug: catalog.slug,
      });
    }

    if (amountInPaise < 100) {
      return NextResponse.json(
        { error: "Order amount too low" },
        { status: 400 },
      );
    }

    await ensureProductsInDb();

    const dbProducts = await prisma.product.findMany({
      where: { slug: { in: lineItems.map((i) => i.slug) } },
    });
    const slugToDbId = new Map(dbProducts.map((p) => [p.slug, p.id]));

    const session = await getServerSession(authOptions);
    let userId: number | null = null;
    if (session?.user?.email) {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email.toLowerCase() },
      });
      userId = user?.id ?? null;
    }

    const savedAddress = await prisma.address.create({
      data: {
        userId,
        fullName,
        phone,
        email,
        line1,
        line2,
        city,
        state,
        pincode,
      },
    });

    const order = await prisma.order.create({
      data: {
        userId,
        addressId: savedAddress.id,
        amountInPaise,
        currency: "INR",
        status: "PENDING",
        items: {
          create: lineItems.map((item) => ({
            productId: slugToDbId.get(item.slug)!,
            quantity: item.quantity,
            priceInPaise: item.priceInPaise,
          })),
        },
      },
    });

    const razorpay = getRazorpay();
    const rpOrder = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `order_${order.id}`,
      notes: {
        orderId: String(order.id),
      },
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { razorpayOrderId: rpOrder.id },
    });

    return NextResponse.json({
      orderId: order.id,
      razorpayOrderId: rpOrder.id,
      amount: amountInPaise,
      currency: "INR",
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Razorpay order create failed:", error);
    const message =
      error instanceof Error ? error.message : "Failed to create payment order";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
