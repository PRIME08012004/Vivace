export default function WhyChooseUs() {
  return (
    <div className="w-full h-auto md:h-120 text-white bg-wcu-red flex flex-col md:flex-row justify-evenly p-4 sm:p-8 md:p-24 gap-8 md:gap-0">
      <div className="w-full md:basis-1/3 flex flex-col p-2 md:p-4">
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium pb-4 md:pb-6 pt-4 md:pt-8">
            Why Choose Us
          </h1>
        </div>
        <div>
          <p className="text-sm sm:text-base">
            Step in looking good. Walk out feeling unstoppable.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-0 mt-4 md:mt-0">
          <div className="flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl md:text-6xl font-medium">30k</span>
            <span className="text-sm sm:text-base">Satisfied Client</span>
          </div>
          <div className="w-px h-12 md:h-16 bg-white mx-4 md:mx-10" />
          <div className="flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl md:text-6xl font-medium">15</span>
            <span className="text-sm sm:text-base">Salons in the city</span>
          </div>
        </div>
      </div>

      <div className="w-full md:basis-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 p-2 md:pt-12">
        <div className="bg-wcu-rose rounded-2xl sm:rounded-4xl text-white flex flex-col md:flex-row justify-center items-center p-4 md:p-6">
          <div></div>
          <div className="text-sm sm:text-base md:text-base">
            Our team of highly skilled and experienced stylists is dedicated to
            staying on the cutting edge of industry trends. Trust us to
            transform your vision into a stunning reality.
          </div>
        </div>
        <div className="bg-wcu-rose rounded-2xl sm:rounded-4xl text-white flex flex-col md:flex-row justify-center items-center p-4 md:p-6">
          <div></div>
          <div className="text-sm sm:text-base md:text-base">
            Your unique style is our priority. Enjoy personalized consultations
            with our stylists, ensuring a haircut that complements your
            features, lifestyle, and fashion preferences.
          </div>
        </div>
        <div className="bg-wcu-rose rounded-2xl sm:rounded-4xl text-white flex flex-col md:flex-row justify-center items-center p-4 md:p-6">
          <div></div>
          <div className="text-sm sm:text-base md:text-base">
            We&apos;re not just following trends; we&apos;re setting them. Step
            into the latest fashion with our trendsetting styles that keep you ahead of
            the curve.
          </div>
        </div>
        <div className="bg-wcu-rose rounded-2xl sm:rounded-4xl text-white flex flex-col md:flex-row justify-center items-center p-4 md:p-6">
          <div></div>
          <div className="text-sm sm:text-base md:text-base">
            We believe in using only the best. Our premium hair care and styling
            products ensure not only a flawless finish but also the long-term
            health of your hair.
          </div>
        </div>
      </div>
    </div>
  );
}
