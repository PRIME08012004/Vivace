import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="w-full h-120 text-white  bg-wcu-red flex justify-evenly  p-24 ">
      <div className=" basis-1/3 flex flex-col p-4">
        <div>
          <h1 className="text-6xl font-medium pb-6 pt-8"> Why Choose Us</h1>
        </div>
        <div>
         
          <p className="">
            Step in looking good. Walk out feeling unstoppable.
          </p>
        </div>
        <div className="flex  ">
          <div className="flex flex-col justify-center ">
            <span className="text-6xl">30k</span>
            <span> Satisfied Client</span>
          </div>
          <div className="w-px h-16 bg-white m-10" />
          <div className="flex flex-col justify-center">
            <span className="text-6xl">15</span>
            <span> Salons in the city</span>
          </div>
        </div>
      </div>

      <div className=" basis-2/3 grid grid-cols-2 gap-4 p-2 pt-12 ">
        <div className="bg-wcu-rose rounded-4xl text-white flex justify-center items-center">
          <div>
          
          </div>
          <div>
            Our team of highly skilled and experienced stylists is dedicated to<br/>
            staying on the cutting edge of industry trends. Trust us to<br/>
            transform your vision into a stunning reality.
          </div>
        </div>
        <div className="bg-wcu-rose rounded-4xl text-white flex justify-center items-center">
          <div>
           
          </div>
          <div>
            Your unique style is our priority. Enjoy personalized consultations<br/>
            with our stylists, ensuring a haircut that complements your<br/>
            features, lifestyle, and fashion preferences.
          </div>
        </div>
        <div className="bg-wcu-rose rounded-4xl text-white flex justify-center items-center">
          <div></div>
          <div>
            We're not just following trends; we're setting them. Step into the<br/>
            latest fashion with our trendsetting styles that keep you ahead of<br/>
            the curve.
          </div>
        </div>
        <div className="bg-wcu-rose rounded-4xl text-white flex justify-center items-center">
          <div></div>
          <div>
            We believe in using only the best. Our premium hair care and styling<br/>
            products ensure not only a flawless finish but also the long-term<br/>
            health of your hair.
          </div>
        </div>
      </div>
    </div>
  );
}
