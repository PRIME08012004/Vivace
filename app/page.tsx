import Hero from "@/components/ui/sections/heroSection";
import OurServices from "@/components/ui/sections/our-services-section";
import Booking from "@/components/ui/sections/booking-section";
import ProductView from "@/components/ui/sections/product-section";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import WhyChooseUs from "../components/ui/sections/why-choose-us";
import OurTeam from "../components/ui/sections/our-team-section";
import Footer from "../components/ui/layout/Footer";

const quicksand = Quicksand({
  weight: ["400"],
});
export default function Main() {
  return (
    <div className="">
      <Hero />
      <div className={cn(quicksand.className, "bg-background-white")}>
        <OurServices />
        <Booking />
        <ProductView />
        <WhyChooseUs />
        <OurTeam />

        <Footer />
      </div>
    </div>
  );
}
