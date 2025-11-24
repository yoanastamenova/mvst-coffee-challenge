import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center z-50 bg-transparent py-6 md:py-10 px-4 md:px-0">
      <Link href="/" className="hover:opacity-80 px-6 block md:ml-15">
        <Image
          src="/MVST_header.svg"
          width={167}
          height={25}
          alt="Header Logo"
        />
      </Link>
      <Link href="/create" className="hover:opacity-80 block">
        <Button className="mr-6 md:mr-20">Create</Button>
      </Link>
    </nav>
  );
};
