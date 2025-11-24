import { Card } from "@/components/Card";
import { Coffee } from "@/types/Coffee";
import Image from "next/image";
import Hero from "../../public/hero.jpg";
import Footer from "../../public/MVST_footer.svg";
import Beans from "../../public/beans.png";
import Button from "@/components/Button";
import { Poppins, Bebas_Neue } from "next/font/google";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/coffees`);
  const coffees: Coffee[] = await res.json();

  return (
    <>
      {/*Hero Section with Image*/}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] max-w-full overflow-x-hidden">
        <div className="absolute inset-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-linear-to-t after:from-background-primary after:to-transparent after:pointer-events-none after:z-10">
          <Image
            alt="CoffeeHero"
            src={Hero}
            fill
            style={{
              objectFit: "cover",
            }}
            className="brightness-40"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 pt-15 h-full flex items-center justify-center md:justify-start px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
          <div className="w-full md:max-w-[680px] text-center md:text-left mt-10 md:ml-10">
            <h1
              className={`${bebas.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px] font-normal leading-tight sm:leading-[1.1] md:leading-[110px] text-white mb-4 sm:mb-6`}
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', wordBreak: 'break-word' }}
            >
              ROASTED COFFEE
            </h1>

            <p
              className={`${poppins.className} text-[#938E8E] text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed mb-4 md:mb-6 max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0`}
              style={{ wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', wordBreak: 'break-word' }}
            >
              Choose a coffee from below or create your own.
            </p>

            <div className="flex justify-center md:justify-start font-normal">
              <Button>Create your own coffee</Button>
            </div>
          </div>
        </div>
      </section>

      {/* MVST text with button group */}
      <section className="mb-10 mt-15 md:mt-30 px-4">
        <h4
          className={`${bebas.className} text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[110px] text-white flex justify-center text-center`}
        >
          MVST. EXCLUSIVE COFFEE
        </h4>
        <div className="flex justify-center mt-8 md:mt-12">
          <div
            className="inline-flex bg-badge-category rounded-[33px] p-1 w-full max-w-[548px] h-[50px] -mt-6 md:-mt-10"
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
              Arabica
            </button>
          </div>
        </div>
      </section>

      {/* Coffee List with Grid */}
      <section className="px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl py-5">
          {coffees.map(({ id, name, price, description, imageUrl, type }) => (
            <div key={id}>
              <Card
                name={name}
                price={price}
                description={description}
                imageUrl={imageUrl}
                type={type}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section className="mt-40 overflow-hidden">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute bottom-0 w-full h-[70%]"
            style={{
              backgroundImage: `url(${Beans.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px auto",
              backgroundPosition: "0 0",
            }}
          />
          <div
            className="absolute bottom-0 w-full h-[65%]"
            style={{
              backgroundImage: `url(${Beans.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "190px auto",
              backgroundPosition: "25px 15px",
              transform: "rotate(180deg)",
            }}
          />
          <div
            className="absolute bottom-0 w-full h-[60%]"
            style={{
              backgroundImage: `url(${Beans.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "210px auto",
              backgroundPosition: "50px 30px",
            }}
          />
          <div
            className="hidden md:block absolute bottom-0 w-full h-[55%]"
            style={{
              backgroundImage: `url(${Beans.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "180px auto",
              backgroundPosition: "40px 20px",
              transform: "scaleX(-1)",
            }}
          />
          {/* Footer SVG */}
          <div className="relative z-10 flex justify-center items-center h-full px-4">
            <Image
              alt="MVST footer"
              src={Footer}
              width={700}
              height={105}
              className="w-full max-w-[450px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px] h-auto"
            />
          </div>

          <div
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            style={{
              backgroundImage: `url(${Beans.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "220px auto",
              backgroundPosition: "-20px 40px",
            }}
          />
        </div>
      </section>
    </>
  );
}
