interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-white rounded-3xl text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 bg-[#ba8039] hover:bg-yellow-700 hover:cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
