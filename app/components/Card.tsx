
import Image from "next/image";
import Arrow from "./icons/arrowRight";


type CardProps = {
  title: string;
  subtitle?: string;
  image: string;
  imagePosition?: "left" | "right" | "background";
  onClick?: () => void;
};

export default function Card({
  title,
  subtitle,
  image,
  imagePosition = "left",
  onClick,
}: CardProps) {
  return (
    <div className="relative flex items-center rounded-3xl overflow-hidden bg-white w-64 h-36 ">

  
      {imagePosition === "left" && (
        <div className="w-1/2 h-full relative">
          <Image src={image} alt={title} fill className="object-fill p-2" />
        </div>
      )}

      {imagePosition === "background" && (
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-fill " />
        </div>
      )}


      <div className={`flex flex-col gap-1 p-4 z-10 ${imagePosition === "left" ? "w-1/2" : "w-full"}`}>
        {subtitle && (
          <p className="text-xs text-black">{subtitle}</p>
        )}
        <h3 className="font-bold text-lg leading-tight text-black">{title}</h3>
      </div>

   
      <button
        onClick={onClick}
        className="absolute bottom-3 right-3 bg-black text-white rounded-full p-2 z-10"
      >
        <Arrow/>
      </button>

    </div>
  );
}