import Hero from "@/app/components/heroSection";
import OurServices from "@/app/components/our-services";
import Booking from "@/app/components/booking-section";
import ProductView from "@/app/components/product-section";
export default function Main() {
  return (
    <div className="">
      <Hero />
      <div className="bg-background-white">
        <OurServices />
        <Booking />
        <ProductView/>
      </div>
    </div>
  );
}
