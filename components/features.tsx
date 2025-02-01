import { Card, CardContent } from "@/components/ui/card";
import {
  Repeat,
  FileText,
  Infinity,
  Smartphone,
  Bell,
  BarChart2,
  Globe,
  Layers,
  Clock,
} from "lucide-react";

const features = [
  { icon: Repeat, text: "Effortless Recurring Invoices" },
  { icon: FileText, text: "Customisable Invoice Templates" },
  { icon: Infinity, text: "Unlimited Invoice Creation" },
  { icon: Smartphone, text: "Mobile Invoice Creation" },
  { icon: Bell, text: "Automated Payment Reminders" },
  { icon: BarChart2, text: "Detailed Financial Reports" },
  { icon: Globe, text: "Multi-Language Support" },
  { icon: Layers, text: "Bulk Actions" },
  { icon: Clock, text: "Time Tracking" },
];

export const Features = () => (
  <section className="bg-muted/50 py-24">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Powerful Features for Effortless Invoicing
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.text}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
