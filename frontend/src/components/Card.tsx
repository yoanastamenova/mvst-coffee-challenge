import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  type: "Arabica" | "Robusta";
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Card = ({ name, description, price, imageUrl, type }: Props) => {
  const buttonBg =
    type === "Arabica" ? "bg-badge-popular" : "bg-badge-category";

  return (
    <div className="bg-background-card w-full h-[470px] rounded-md overflow-hidden flex flex-col">
      <div className="pt-3 pl-4 pb-0 h-12">
        <button
          type="button"
          className={`${poppins.className} px-2 py-2 text-text-primary font-light text-sm leading-5 rounded-[41px] text-center ${buttonBg}`}
        >
          {type}
        </button>
      </div>
      <div className="flex flex-col flex-1 gap-8 justify-center">
        <div className="relative w-full flex items-center justify-center h-60">
          <Image
            src={imageUrl}
            width={289}
            height={216}
            alt={name}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center px-6 flex-1 justify-start">
          <h1
            className={`${poppins.className} text-accent-gold text-xl font-semibold mb-2 text-center`}
          >
            {name}
          </h1>
          <p
            className={`${poppins.className} text-text-tertiary text-sm font-normal mb-3 text-center`}
          >
            {description}
          </p>
          <p
            className={`${poppins.className} text-text-primary text-xl leading-[26px] font-bold text-center`}
          >{`${Number(price).toFixed(2)} €`}</p>
        </div>
      </div>
    </div>
  );
};
