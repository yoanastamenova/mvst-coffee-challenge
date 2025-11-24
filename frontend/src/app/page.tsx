import { Card } from "@/components/Card";
import { Coffee } from "@/types/Coffee";
import Image from "next/image";
import Hero from "../../public/hero.jpg";
import Button from "@/components/Button";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/coffees`);
  const coffees: Coffee[] = await res.json();

  return (
    <>
      {/*Hero Section with Image*/}
      <section className="mx-10 mt-12 px-10">
        <Image
          alt="CoffeeHero"
          src={Hero}
          fill
          style={{
            objectFit: "cover",
          }}
          className="-z-10 brightness-50"
        />
        <div
          className="relative mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12
      items-center z-10 mb-220"
        >
          <div className="absolute top-60 w-170 h-60 left-10">
            <h1 className="font-(family-name:--font-bebas) text-[130px] font-normal leading-[110px] text-white text-nowrap">
              ROASTED COFFEE
            </h1>
            <p
              className={`${poppins.className} text-[#938E8E] text-lg font-light sm:text-xl mb-6 mt-7`}
            >
              Choose a coffee from below or create your own.
            </p>
            <Button>Create your own coffee</Button>
          </div>
        </div>

        {/* MVST text with button group */}
        <div className="mb-50">
          <h4 className="font-(family-name:--font-bebas) text-[50px] font-normal leading-[110px] text-white text-nowrap flex justify-center">
            MVST. EXCLUSIVE COFFEE
          </h4>
          <div className="flex justify-center mt-12">
            <div
              className="inline-flex bg-[#3A3A3A] rounded-[33px] p-1 w-[548px] h-[50px]"
              role="group"
            >
              <button
                type="button"
                className={`${poppins.className} flex-1 text-base font-normal rounded-[33px] transition-all duration-200 bg-white text-black`}
              >
                All
              </button>
              <button
                type="button"
                className={`${poppins.className} flex-1 text-base font-normal rounded-[33px] transition-all duration-200 text-white/60 hover:text-white`}
              >
                Robusta
              </button>
              <button
                type="button"
                className={`${poppins.className} flex-1 text-base font-normal rounded-[33px] transition-all duration-200 text-white/60 hover:text-white`}
              >
                Arabic
              </button>
            </div>
          </div>
        </div>

        {/* Coffee List with Cards */}
        <div className="absolute inset-x-0 top-[100vh] -translate-y-full h-[600px] bg-linear-to-t from-black to-transparent pointer-events-none"></div>
        {coffees.map(({ id, name, price, description, imageUrl }) => (
          <Card
            key={id}
            name={name}
            price={price}
            description={description}
            imageUrl={imageUrl}
          />
        ))}
      </section>
    </>
  );
}
