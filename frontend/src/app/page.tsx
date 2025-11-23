import { Card } from '@/components/Card';
import { Coffee } from '@/types/Coffee';

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/coffees`);
  const coffees: Coffee[] = await res.json();

  return (
    <main className='mx-10 mt-12 px-10'>
      <h1 className='text-3xl mb-10'>Coffee List 🚀</h1>
      {coffees.map(({ id, name, price, description, imageUrl }) => (
        <Card key={id} name={name} price={price} description={description} imageUrl={imageUrl}/>
      ))}
    </main>
  );
}