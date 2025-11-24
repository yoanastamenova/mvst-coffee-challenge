import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center top-0 z-50 bg-transparent py-10">
      <Link href="/" className="hover:opacity-80 px-6 block ml-15">
        <Image
          src="/MVST_header.svg"
          width={167}
          height={25}
          alt="Header Logo"
        />
      </Link>
      <Link href="/create" className="hover:opacity-80 block">
        <Button className="mr-20 mt-0">Create</Button>
      </Link>
    </nav>
  );
};
