import { CTA } from "./CTA";

export const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b backdrop-blur bg-background/20">
    <div className="container mx-auto flex h-16 items-center justify-around px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">CompRank</span>
      </div>
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

      <CTA size="default" label="Démarrer" />
    </div>
  </header>
);
