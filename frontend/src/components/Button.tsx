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
      className={`text-white rounded-3xl py-2 px-5 bg-[#ba8039] hover:bg-yellow-700 hover:cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
