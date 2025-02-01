import "./globals.css";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export const runtime = "edge";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      {/*
      <Problem />
      <PainSolver />
      <Heaven />
      <WhoIsItFor />
      <HowItWorks />
      <Benefits />
      <Features />
      <Pricing />
      <FAQ /> */}
    </>
  );
}
