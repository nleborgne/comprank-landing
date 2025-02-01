import AnimatedBackground from "./ui/animated-background";

const problems = [
  "You spend hours hunched over spreadsheets, manually creating invoices one by one, instead of working on billable tasks",
  "You're constantly chasing down late payments, sending reminder after reminder, and worrying about the impact on your cash flow",
  "You're embarrassed to send out invoices because your current templates look unprofessional and don't reflect your brand",
  "You struggle to keep track of which invoices have been paid and which are outstanding, leading to confusion and wasted time",
];

export const Problem = () => (
  <section className="py-8 md:py-12 lg:py-16 bg-black w-[95vw] rounded-[40px] mx-auto">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
          Does this ever happen to you?
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 mt-8">
          <AnimatedBackground
            className="rounded-lg bg-zinc-100"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
            {problems.map((problem, index) => (
              <div data-id={`card-${index}`} key={index}>
                <div className="flex select-none flex-col space-y-1 p-4">
                  <p className="text-base">{problem}</p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </div>
  </section>
);
