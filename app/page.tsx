import Features from "@/components/features";
import "./globals.css";
import { Hero } from "@/components/hero";

export const runtime = "edge";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
