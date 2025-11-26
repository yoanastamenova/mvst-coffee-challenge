"use client";

import Image from "next/image";
import Beans from "../../../public/beans.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

type CoffeeType = "Arabica" | "Robusta";

export default function CreatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const [selectedType, setSelectedType] = useState<CoffeeType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeSelect = (type: CoffeeType) => {
    setSelectedType(type);
  };

  const handleDiscard = () => {
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.imageUrl ||
      !selectedType
    ) {
      alert("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/coffees/new`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            description: formData.description,
            type: selectedType,
            price: parseFloat(formData.price),
            imageUrl: formData.imageUrl,
          }),
        }
      );

      if (response.status === 409) {
        router.push("/?error=name-exists");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to create coffee");
      }

      router.push("/");
    } catch (error) {
      console.error("Error creating coffee:", error);
      alert("Failed to create coffee. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClasses = (hasValue: boolean) => {
    return `${
      dmSans.className
    } w-full px-3 py-2 text-sm rounded-lg border border-border-primary bg-background-form transition-colors duration-200 outline-none focus:outline-none focus:ring-0 ${
      hasValue ? "text-text-primary" : "text-text-gray"
    } placeholder-text-placeholder`;
  };

  return (
    <>
      <section className="min-h-screen relative overflow-hidden">
        <div className="flex flex-col items-center justify-center px-4 sm:px-12 py-12 mx-auto min-h-screen lg:py-0">
          <div className="w-full min-h-[700px] bg-transparent sm:bg-background-card shadow-none sm:shadow-xl border-none sm:border-border-primary md:mt-0 sm:max-w-xl lg:max-w-2xl xl:p-0 relative overflow-hidden">
            {/* X button */}
            <button
              onClick={handleDiscard}
              className="absolute top-6 right-6 text-text-primary hover:text-text-gray transition-colors z-20 hover:cursor-pointer"
              aria-label="Close"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Title */}
            <div className="p-8 py-20 space-y-6 sm:p-10 sm:py-16 md:px-16 lg:px-20">
              <h1
                className={`${bebas.className} text-5xl font-bold text-text-primary text-center`}
              >
                CREATE NEW
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 max-w-md mx-auto"
              >
                {/* Name and Price */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                  <div className="flex-1 w-full sm:w-auto">
                    <label
                      htmlFor="name"
                      className={`${dmSans.className} block mb-2 text-sm font-normal text-text-label`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={getInputClasses(!!formData.name)}
                      placeholder="Name your coffee here"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="w-full sm:w-28">
                    <label
                      htmlFor="price"
                      className={`${dmSans.className} block mb-2 text-sm font-normal text-text-label`}
                    >
                      Price
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className={getInputClasses(!!formData.price)}
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        required
                        autoComplete="off"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-primary text-sm pointer-events-none">
                        €
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coffee Type Buttons */}
                <div>
                  <label
                    className={`${dmSans.className} block mb-2 text-sm font-normal text-text-label`}
                  >
                    Type
                  </label>
                  <div className="flex gap-4 justify-center items-center">
                    <button
                      type="button"
                      onClick={() => handleTypeSelect("Arabica")}
                      className={`flex-1 font-normal rounded-lg text-sm px-4 py-2 text-center transition-all ${
                        selectedType === "Arabica"
                          ? "bg-transparent text-text-primary border-2 border-text-primary"
                          : "bg-transparent text-text-secondary border border-border-secondary hover:border-border-hover"
                      }`}
                    >
                      Arabica
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTypeSelect("Robusta")}
                      className={`flex-1 font-normal rounded-lg text-sm px-4 py-2 text-center transition-all ${
                        selectedType === "Robusta"
                          ? "bg-transparent text-text-primary border-2 border-text-primary"
                          : "bg-transparent text-text-secondary border border-border-secondary hover:border-border-hover"
                      }`}
                    >
                      Robusta
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div>
                  <label
                    htmlFor="imageUrl"
                    className={`${dmSans.className} block mb-2 text-sm font-normal text-text-label`}
                  >
                    Upload image
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className={getInputClasses(!!formData.imageUrl)}
                    placeholder="Paste image URL here"
                    required
                    autoComplete="off"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className={`${dmSans.className} block mb-2 text-sm font-normal text-text-label`}
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className={getInputClasses(!!formData.description)}
                    placeholder="Add a description"
                    required
                    autoComplete="off"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-center items-center pt-6 max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={handleDiscard}
                    disabled={isSubmitting}
                    className="text-text-primary border border-accent-secondary hover:bg-badge-category
                    hover:cursor-pointer font-normal rounded-full text-sm px-8 py-3
                    w-full sm:w-28 text-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.description ||
                      !formData.price ||
                      !formData.imageUrl ||
                      !selectedType
                    }
                    className="text-text-primary bg-accent-secondary hover:bg-accent-hover hover:cursor-pointer
                    font-normal rounded-full text-sm px-8 py-3 text-center disabled:opacity-50
                    w-full sm:w-28 transition-all"
                  >
                    {isSubmitting ? "Creating..." : "Confirm"}
                  </button>
                </div>
              </form>
            </div>

            {/* Beans Decoration */}
            <div className="hidden sm:block absolute bottom-7 -left-25 pointer-events-none z-0">
              <Image
                src={Beans}
                width={250}
                height={168}
                alt="beans"
                className="rotate-20"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
