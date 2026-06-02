import Image from "next/image";
export default function ProductCard() {
  return (
    <div className="w-full  flex  gap-12 pt-16 pb-20">
      <div className="bg-card-brown rounded-4xl overflow-hidden shadow-md w-100">
        <div className="h-80 w-full flex justify-evenly">
          <Image
            width={400}
            height={600}
            src="/conditioner.png"
            alt="product"
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-medium">
            FALL RESIST 3X CONDITIONER (192.5 ML)
          </h2>
          <p className="text-black text-md">2.39$</p>
        </div>
      </div>
      <div className="bg-card-brown rounded-4xl overflow-hidden shadow-md w-100">
        <div className="h-80 w-full flex justify-evenly">
          <Image
            width={400}
            height={600}
            src="/cream.png"
            alt="product"
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-medium">
            Hyaluron Moisture HYALURON MOISTURE HYDRA FILLING NIGHT CREAM
          </h2>
          <p className="text-black text-md">1.69$</p>
        </div>
      </div>
      <div className="bg-card-brown rounded-4xl overflow-hidden shadow-md w-100">
        <div className="h-80 w-full flex justify-evenly">
          <Image
            width={400}
            height={600}
            src="/Exoil-serum.png"
            alt="product"
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-medium">
            L&apos;Oréal Paris Extraordinary Oil Serum
          </h2>
          <p className="text-black text-md">2.69$</p>
        </div>
      </div>
      <div className="bg-card-brown rounded-4xl overflow-hidden shadow-md w-100">
        <div className="h-80 w-full flex justify-evenly">
          <Image
            width={400}
            height={600}
            src="/shampoo.png"
            alt="product"
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-medium">
            L&apos;Oréal Paris Total Repair 5 Repairing Shampoo
          </h2>
          <p className="text-black text-md">3.00$</p>
        </div>
      </div>
    </div>
  );
}
