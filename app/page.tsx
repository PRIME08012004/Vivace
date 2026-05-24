import Hero from "@/app/components/heroSection";
import OurServices from "@/app/components/our-services";
import Booking from "@/app/components/booking-section";
import ProductView from "@/app/components/product-section";
import { Quicksand } from "next/font/google";
import { cn } from "./lib/utils";
import WhyChooseUs from "./components/why-choose-us";

const quicksand=Quicksand({
  weight:["400"]
})
export default function Main() {
  return (
    <div className="">
      <Hero />
      <div className={cn(quicksand.className,"bg-background-white")}>
        <OurServices />
        <Booking />
        <ProductView/>
        <WhyChooseUs/>
      </div>
    </div>
  );
}
