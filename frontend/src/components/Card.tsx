import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });

export const Card = ({ name, description, price, imageUrl }: Props) => {
  return (
    <div className="bg-[#191919] w-[390px] h-[500px] rounded-md overflow-hidden flex flex-col">
      <div className="p-4">
        <button
          type="button"
          className={`${poppins.className} px-6 py-2 text-white font-normal rounded-[33px] bg-badge-popular`}>
          Arabic
        </button>
      </div>
      <div className="relative w-full h-[260px] flex items-center justify-center">
        <Image src={imageUrl} width={200} height={200} alt={name} />
      </div>
      <div className="flex flex-col items-center py-4 px-5 grow">
        <h1 className={`${poppins.className} text-[#d3ad7f] text-lg font-semibold sm:text-xl mb-2`}>{name}</h1>
        <h1 className={`${poppins.className} text-[#938E8E] text-sm text-balanced font-normal mb-2`}>{description}</h1>
        <p className={`${poppins.className} text-white text-2xl font-bold`}>{`${Number(price).toFixed(2)} €`}</p>
      </div>
    </div>
  );
};
