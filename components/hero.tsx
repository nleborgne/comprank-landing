import { AuroraBackground } from "./ui/aurora-background";
import { HeroTitle } from "./hero-title";

export const Hero = () => (
  <AuroraBackground>
    <section className="relative">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 py-24 text-center">
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-col overflow-hidden">
            <div className="grid place-content-center h-[80vh]">
              <HeroTitle />
            </div>
            {/* <ContainerScroll titleComponent={}>
              <Image
                src="/hero.webp"
                alt="hero"
                height={580}
                width={960}
                className="mx-auto rounded-2xl object- h-full"
                draggable={false}
              />
            </ContainerScroll> */}
          </div>
        </div>
      </div>
    </section>
  </AuroraBackground>
);
