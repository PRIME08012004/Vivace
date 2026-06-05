import ProductCard from "@/components/ui/product-section-card";

export default function ProductView() {
  return (
    <div id="store" className="p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="">
        <h1 className="pb-4 sm:pb-5 text-3xl sm:text-5xl md:text-6xl font-medium">Our Products</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <p className="w-full sm:w-100">
            Experience the difference with top-tier products that enhance both
            the aesthetics and health of your hair.
          </p>
          <button className="rounded-full bg-bb-red hover:bg-rose-900 text-white px-6 py-3 cursor-pointer text-sm sm:text-base whitespace-nowrap">
            Our Store
          </button>
        </div>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  );
}
