import ProductCard from "@/components/ui/product-section-card";

export default function ProductView() {
  return (
    <div className="p-24  ">
      <div className="">
        <h1 className="pb-5 text-6xl font-medium">Our Products</h1>
        <div className="flex justify-between">
          <p className="w-100">
            Experience the difference with top-tier products that enhance both
            the aesthetics and health of your hair.
          </p>
          <button className="rounded-full bg-bb-red hover:bg-rose-900 text-white px-6 py-3 cursor-pointer">
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
