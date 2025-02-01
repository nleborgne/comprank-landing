import { CTA } from "./CTA";

export const HeroTitle = () => (
  <div className="motion-preset-blur-up-lg motion-delay-500">
    <h1 className="text-6xl font-bold text-black dark:text-white">
      Offrez la meilleure expérience à vos athlètes
    </h1>
    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
      Organisez facilement des compétitions sportives.
    </p>

    <CTA size="lg" className="mt-6" label="Démarrer" />
  </div>
);
