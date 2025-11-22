import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const Card = ({ name, description, price, imageUrl }: Props) => {
  return (
    <div className='border border-black'>
      <h1 className='text-5xl text-primary'>{name}</h1>
      <p className='mt-2 text-sm text-grey'>{description}</p>
      <p className='text-2xl font-bold'>{price}</p>
      <Image
      src={imageUrl}
      width={500}
      height={500}
      alt={name} />
    </div>
  );
};
