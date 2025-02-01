import womanImage from "../public/woman.webp";
import Image from "next/image";

export const Heaven = () => (
  <section className="py-16 bg-muted/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Imagine a world where invoicing is{" "}
            <span className="text-primary">no longer a chore</span>, but a{" "}
            <span className="text-primary">seamless part of your workflow</span>
            .
          </h2>
          <p className="text-lg text-muted-foreground">
            With Billmatic, you can{" "}
            <span className="font-semibold text-foreground">
              reclaim hours of your week
            </span>
            ,{" "}
            <span className="font-semibold text-foreground">
              focus on what you do best
            </span>
            , and{" "}
            <span className="font-semibold text-foreground">
              watch your business thrive
            </span>{" "}
            with consistent, on-time payments.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className="relative rounded-lg overflow-hidden shadow-xl
          transition-transform
          duration-300
          hover:scale-105"
          >
            <Image
              src={womanImage}
              alt="Happy woman working"
              width={800}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
