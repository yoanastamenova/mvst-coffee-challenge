"use client";

import { Card } from "@/components/Card";
import { Coffee } from "@/types/Coffee";
import Image from "next/image";
import Hero from "../../public/hero.jpg";
import Footer from "../../public/MVST_footer.svg";
import Beans from "../../public/beans.png";
import Button from "@/components/Button";
import { Poppins, Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Alert from "@/components/Alert";
import { Navbar } from "@/components/Navbar";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [showAlert, setShowAlert] = useState(false);
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error");

  useEffect(() => {
    const fetchCoffees = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/coffees`);
      const data = await res.json();
      setCoffees(data);
    };
    fetchCoffees();
  }, []);

  useEffect(() => {
    if (errorType === "name-exists") {
      setShowAlert(true);
    }
  }, [errorType]);

  const filteredCoffees =
    selectedType === "All"
      ? coffees
      : coffees.filter((coffee) => coffee.type === selectedType);

  return (
    <>
      <Navbar />
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] max-w-full overflow-x-hidden" aria-label="Hero section with roasted coffee introduction">
        <div className="absolute inset-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 after:bg-linear-to-t after:from-background-primary after:to-transparent after:pointer-events-none after:z-10">
          <Image
            alt="CoffeeHero"
            src={Hero}
            fill
            className="brightness-40 object-cover"
          />
        </div>
        <div className="relative z-20 pt-15 h-full flex items-center justify-center md:justify-start px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden min-w-0">
          <div className="w-full md:max-w-[680px] text-center md:text-left mt-10 md:ml-10 min-w-0 flex flex-col items-center md:items-start">
            <h1
              className={`${bebas.className} text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px] font-normal leading-tight text-white mb-4
                      w-full max-w-[220px] sm:max-w-none`}
            >
              ROASTED COFFEE
            </h1>

            <p
              className={`${poppins.className} text-[#938E8E] text-sm sm:text-sm md:text-base lg:text-lg font-light leading-relaxed mb-4
                      w-full max-w-[200px] sm:max-w-none wrap-break-word whitespace-normal text-balance`}
            >
              Choose a coffee from below or create your own.
            </p>

            <div className="flex justify-center md:justify-start font-normal">
              <Link href="/create">
                <Button>Create your own coffee</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* MVST Text + Button Group */}
      <section className="mb-10 mt-20 md:mt-30 px-4" aria-label="Coffee type filter">
        <h2
          className={`${bebas.className} text-3xl sm:text-4xl md:text-[50px] font-normal leading-tight md:leading-[110px] text-white flex justify-center text-center`}
        >
          MVST. EXCLUSIVE COFFEE
        </h2>
        <div className="flex justify-center mt-8 md:mt-12">
          <div
            className="inline-flex bg-badge-category rounded-[33px] p-1 w-full max-w-[548px] h-[50px] -mt-6 md:-mt-10"
            role="group"
            aria-label="Filter coffees by type"
          >
            {["All", "Robusta", "Arabica"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`${
                  poppins.className
                } flex-1 text-base font-normal rounded-[33px] hover:cursor-pointer transition-all duration-200 ${
                  selectedType === type
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
                }`}
                aria-pressed={selectedType === type}
                aria-label={`Filter by ${type} coffee`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Coffee List Grid */}
      <section className="px-4 sm:px-6 md:px-8" aria-label="Coffee products list">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl py-5 list-none">
          {filteredCoffees.map(
            ({ id, name, price, description, imageUrl, type }) => (
              <li key={id}>
                <Card
                  name={name}
                  price={price}
                  description={description}
                  imageUrl={imageUrl}
                  type={type}
                />
              </li>
            )
          )}
        </ul>
      </section>
      {/* Footer Section */}
      <footer className="mt-40 overflow-hidden" aria-label="Page footer">
        <div className="relative w-full h-[100px] sm:h-[400px] md:h-[500px] overflow-hidden">
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
            className="absolute bottom-0 w-full h-[55%]"
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
              backgroundPosition: "-60px 40px",
            }}
          />
        </div>
      </footer>
    </>
  );
}
