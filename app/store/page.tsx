import Script from "next/script";
import StoreClient from "@/components/ui/store-client";

export const metadata = {
  title: "Our Store | Vivace",
  description: "Shop Vivace hair care products",
};

export default function StorePage() {
  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <StoreClient />
    </>
  );
}
