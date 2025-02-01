import { Check } from "lucide-react";

const features = [
  {
    title: "Reclaim your valuable time",
    description:
      "Create accurate, professional invoices in seconds with our AI-powered assistant.",
  },
  {
    title: "Get paid faster",
    description:
      "Automate payment reminders via email, SMS, and WhatsApp to improve cash flow.",
  },
  {
    title: "Present a polished image",
    description:
      "Choose from customisable templates that perfectly match your brand.",
  },
  {
    title: "Stay organised and in control",
    description:
      "Effortlessly track invoices and gain insights from detailed financial reports.",
  },
];

export const PainSolver = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Introducing <span className="text-primary">Billmatic</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Your All-In-One Solution for Stress-Free Invoicing
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
      {features.map((feature) => (
        <div className="flex items-start space-x-4" key={feature.title}>
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
