import Link from "next/link";

export const CTA = ({ label }: { label: string }) => {
  return (
    <Link className="btn-primary text-sm" href="https://app.comprank.fr">
      {label}
    </Link>
  );
};
