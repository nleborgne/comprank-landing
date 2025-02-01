"use client";
import { Button } from "./ui/button";

export const CTA = ({
  label,
  size = "default",
  className,
}: {
  label: string;
  size?: "lg" | "default" | "sm" | "icon" | null;
  className?: string;
}) => {
  return (
    <Button
      size={size}
      onClick={() => (window.location.href = "https://app.comprank.fr")}
      className={className}
    >
      {label}
    </Button>
  );
};
