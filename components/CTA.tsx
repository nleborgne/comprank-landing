import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/site";

export const CTA = ({ label }: { label: string }) => {
  return (
    <Button asChild size="sm" variant="outline">
      <Link href={APP_URL}>{label}</Link>
    </Button>
  );
};
