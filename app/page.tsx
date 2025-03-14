import "./globals.css";
import { Header } from "@/components/header";
import { BackgroundPaths } from "@/components/ui/background-paths";

export const runtime = "edge";

export default function Page() {
  return (
    <>
      <Header />
      <BackgroundPaths title="La meilleure expérience de compétition sportive" />
    </>
  );
}
