export default function WhyChooseUs(){
    return(
        <section className="bg-wcu-red px-16 py-20 flex items-center h-150">
  <div className="grid grid-cols-[1fr_2fr] gap-16 w-full items-center">


    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
          Why Choose Us
        </h2>
        <p className="text-white w-100 leading-relaxed">
          Step in looking good. Walk out feeling unstoppable.
          
        </p>
      </div>
      <div className="flex items-center gap-8 mt-16">
        <div>
          <p className="text-5xl font-bold text-white leading-none">30k</p>
          <p className="text-white text-sm mt-1">Satisfied clients</p>
        </div>
        <div className="w-px h-14 bg-white" />
        <div>
          <p className="text-5xl font-bold text-white leading-none">15</p>
          <p className="text-white text-sm mt-1">Salons around the city</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {[
        "Our team of highly skilled and experienced stylists is dedicated to staying on the cutting edge of industry trends. Trust us to transform your vision into a stunning reality.",
        "Your unique style is our priority. Enjoy personalized consultations with our stylists, ensuring a haircut that complements your features, lifestyle, and fashion preferences.",
        "We're not just following trends; we're setting them. Step into the latest fashion with our trendsetting styles that keep you ahead of the curve.",
        "We believe in using only the best. Our premium hair care and styling products ensure not only a flawless finish but also the long-term health of your hair.",
      ].map((text, i) => (
        <div key={i} className="bg-wcu-rose rounded-4xl p-8">
          <p className="text-white text-md leading-relaxed">{text}</p>
        </div>
      ))}
    </div>

  </div>
</section>
    )
}