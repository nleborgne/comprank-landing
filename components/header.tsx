import Link from "next/link";
import { Menu } from "lucide-react";
import { CTA } from "./CTA";
import Image from "next/image";

const navigation = [
  { href: "/competition-crossfit", label: "CrossFit" },
  { href: "/competition-hyrox", label: "HYROX" },
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#faq", label: "FAQ" },
];

export const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark-900/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/logo.png"
            alt="CompRank"
            width={150}
            height={53}
            className="h-7 w-auto shrink-0"
            priority
          />
        </Link>
      </div>

      <nav
        aria-label="Navigation principale"
        className="hidden items-center gap-7 lg:flex"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-normal text-gray-300 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="hidden sm:block">
          <CTA label="Démarrer" />
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-md text-gray-200 hover:bg-white/5 [&::-webkit-details-marker]:hidden">
            <Menu className="size-5 shrink-0 stroke-gray-200" aria-hidden="true" />
            <span className="sr-only">Ouvrir le menu</span>
          </summary>
          <div className="absolute right-0 top-12 w-64 rounded-xl bg-dark-700 p-3 shadow-2xl ring-1 ring-white/10">
            <nav
              aria-label="Navigation mobile"
              className="flex flex-col gap-1"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-normal text-gray-200 hover:bg-white/5 hover:text-white sm:text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3 sm:hidden">
                <CTA label="Démarrer gratuitement" />
              </div>
            </nav>
          </div>
        </details>
      </div>
    </div>
  </header>
);
