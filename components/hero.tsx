import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-800/80 to-dark-700/70"
          style={{
            backgroundImage: "url('/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.35) contrast(1.2)",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-dark-900 via-primary-900/20 to-dark-900"></div>

      <div className="container-custom relative z-10 pt-20 motion-preset-blur-right motion-delay-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-dark-600/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-dark-500">
            <Star size={16} className="text-primary-500 mr-2" />
            <span className="text-sm font-medium">
              La plateforme ultime pour les compétitions sportives
            </span>
          </div>

          <h1 className="mb-6">
            Propulsez votre{" "}
            <span className="text-primary-500">Compétition</span> Au Niveau
            Supérieur
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Simplifiez la gestion de vos événements, suivez les performances des
            athlètes en temps réel et créez des compétitions inoubliables grâce
            à notre plateforme complète.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://app.comprank.fr" className="btn-primary">
              Démarrer <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link href="#features" className="btn-secondary">
              En savoir plus
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((id) => (
                <Image
                  width={50}
                  height={50}
                  key={id}
                  src={`/box/box-${id}.webp`}
                  alt="box"
                  className="w-10 h-10 rounded-full border-2 border-dark-700"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="text-primary-500 fill-primary-500"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Approuvé par des boxs CrossFit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
