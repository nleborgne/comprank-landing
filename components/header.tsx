import Link from "next/link";
import { CTA } from "./CTA";
import Image from "next/image";

export const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b backdrop-blur ">
    <div className="container mx-auto flex h-16 items-center justify-around px-4 sm:px-6 lg:px-8">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={150} height={75} />
        </div>
      </Link>
      {/* <nav className="hidden md:flex items-center space-x-6">
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Pricing
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          About
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </div>
      </nav> */}

      <CTA label="Démarrer" />
    </div>
  </header>
);
