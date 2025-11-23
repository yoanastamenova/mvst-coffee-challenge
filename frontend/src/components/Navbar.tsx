import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <Link href="/" className="hover:opacity-80 px-6 py-4 block">
        <Image
          src="/MVST_header.svg"
          width={167}
          height={25}
          alt="Header Logo"
        />
      </Link>
    </nav>
  );
};
