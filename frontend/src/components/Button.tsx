import { Poppins } from "next/font/google";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${poppins.className} text-white text-sm rounded-3xl py-3 px-8 bg-[#ba8039] hover:bg-yellow-700 hover:cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
