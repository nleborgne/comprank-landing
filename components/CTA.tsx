import type { MouseEventHandler } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";

export const CTA = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <Button asChild size="sm" variant="outline">
      <Link href={APP_URL} onClick={onClick}>
        {label}
      </Link>
    </Button>
  );
};
