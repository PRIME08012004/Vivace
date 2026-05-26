import Hero from "@/components/heroSection";
import OurServices from "@/components/our-services";
import Booking from "@/components/booking-section";
import ProductView from "@/components/product-section";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import WhyChooseUs from "../components/why-choose-us";
import OurTeam from "../components/our-team-section";
import Footer from "../components/Footer";


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
        <OurTeam/>
        
        <Footer/>
       
        
      </div>
    </div>
  );
}
