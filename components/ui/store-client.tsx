"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import { PRODUCTS, formatINR } from "@/lib/products";
import { useCart } from "@/hooks/use-cart";

const quicksand = Quicksand({ weight: ["400", "600"] });

type CheckoutForm = {
  fullName: string;
  phone: string;
  email: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

const emptyForm: CheckoutForm = {
  fullName: "",
  phone: "",
  email: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  pincode: "",
};

export default function StoreClient() {
  const {
    items,
    addItem,
    setQuantity,
    removeItem,
    clearCart,
    totalInPaise,
    itemCount,
    hydrated,
  } = useCart();
  const [form, setForm] = useState<CheckoutForm>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function updateField(key: keyof CheckoutForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleCheckout(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!items.length) {
      setError("Your cart is empty");
      return;
    }

    const required: (keyof CheckoutForm)[] = [
      "fullName",
      "phone",
      "email",
      "line1",
      "city",
      "state",
      "pincode",
    ];
    for (const key of required) {
      if (!form[key].trim()) {
        setError("Please fill in all required address details");
        return;
      }
    }

    setLoading(true);
    try {
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.productId,
            quantity: i.quantity,
          })),
          address: form,
        }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        setError(orderData.error ?? "Failed to create payment order");
        return;
      }

      if (!window.Razorpay) {
        setError("Payment SDK failed to load. Please refresh and try again.");
        return;
      }

      const rzp = new window.Razorpay({
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency ?? "INR",
        name: "Vivace",
        description: "Hair care products",
        order_id: orderData.razorpayOrderId,
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.phone,
        },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: orderData.orderId,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              setError(verifyData.error ?? "Payment verification failed");
              return;
            }
            clearCart();
            setForm(emptyForm);
            setSuccess(true);
          } catch {
            setError("Payment verification failed");
          }
        },
        theme: { color: "#aa0029" },
      });

      rzp.open();
    } catch {
      setError("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={cn(
        quicksand.className,
        "min-h-screen bg-background-white pt-28 pb-16 px-4 sm:px-8 md:px-16",
      )}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-medium text-gray-16 mb-2">
          Our Store
        </h1>
        <p className="text-gray-15 mb-10 max-w-xl">
          Shop salon-grade hair care. Add products to your cart, enter shipping
          details, and pay securely with Razorpay.
        </p>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-16">
              Products
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  className="bg-card-brown rounded-2xl overflow-hidden"
                >
                  <div className="h-48 w-full flex items-center justify-center p-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={280}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-medium leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-15">{product.displayPrice}</p>
                    <button
                      type="button"
                      onClick={() => addItem(product.id)}
                      className="mt-1 rounded-full bg-bb-red hover:bg-rose-900 text-white px-4 py-2 text-sm cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <h2 className="text-xl font-semibold mb-4 text-gray-16">
                Cart {hydrated ? `(${itemCount})` : ""}
              </h2>
              {!hydrated ? (
                <p className="text-sm text-gray-15">Loading cart...</p>
              ) : items.length === 0 ? (
                <p className="text-sm text-gray-15">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.productId}
                      className="flex gap-3 items-start border-b border-black/5 pb-3"
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={56}
                        height={56}
                        className="rounded-lg object-contain bg-card-brown"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-gray-15">
                          {formatINR(item.product.priceInPaise)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full border border-black/15 text-sm cursor-pointer"
                            onClick={() =>
                              setQuantity(item.productId, item.quantity - 1)
                            }
                          >
                            −
                          </button>
                          <span className="text-sm w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="w-7 h-7 rounded-full border border-black/15 text-sm cursor-pointer"
                            onClick={() =>
                              setQuantity(item.productId, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="ml-auto text-xs text-bb-red cursor-pointer"
                            onClick={() => removeItem(item.productId)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatINR(totalInPaise)}</span>
              </div>
            </div>

            <form
              onSubmit={handleCheckout}
              className="rounded-2xl border border-black/10 bg-white p-5 space-y-3"
            >
              <h2 className="text-xl font-semibold text-gray-16 mb-2">
                Shipping details
              </h2>
              <Field
                label="Full name"
                value={form.fullName}
                onChange={(v) => updateField("fullName", v)}
                required
              />
              <Field
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => updateField("phone", v)}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => updateField("email", v)}
                required
              />
              <Field
                label="Address line 1"
                value={form.line1}
                onChange={(v) => updateField("line1", v)}
                required
              />
              <Field
                label="Address line 2"
                value={form.line2}
                onChange={(v) => updateField("line2", v)}
              />
              <div className="grid grid-cols-2 gap-3">
                <Field
                  label="City"
                  value={form.city}
                  onChange={(v) => updateField("city", v)}
                  required
                />
                <Field
                  label="State"
                  value={form.state}
                  onChange={(v) => updateField("state", v)}
                  required
                />
              </div>
              <Field
                label="Pincode"
                value={form.pincode}
                onChange={(v) => updateField("pincode", v)}
                required
              />

              {error ? (
                <p className="text-sm text-bb-red text-center">{error}</p>
              ) : null}
              {success ? (
                <p className="text-sm text-green-700 text-center">
                  Payment successful! Your order is confirmed.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading || !hydrated || items.length === 0}
                className="w-full rounded-full bg-bb-red hover:bg-rose-900 disabled:opacity-50 text-white py-3 text-sm cursor-pointer mt-2"
              >
                {loading ? "Processing..." : "Pay with Razorpay"}
              </button>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-gray-15">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-black/10 bg-card-brown/50 px-3 py-2 text-sm outline-none focus:border-bb-red"
      />
    </label>
  );
}
