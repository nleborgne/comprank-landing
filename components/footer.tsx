import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} CompRank. Tous droits réservés.
          </p>
        </div>
        <Link
          href="/terms"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Conditions d&#39;utilisation
        </Link>
      </div>
    </footer>
  );
}
