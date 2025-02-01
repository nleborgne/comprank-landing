import { Check, Timer, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTA } from "./CTA";

const ltdFeatures = [
  "AI Invoice Assistant",
  "Create and Send Unlimited Invoices",
  "Track Invoice Status",
  "Unlimited Recurring Invoices",
  "Online Payments",
  "Unlimited Automated Payment Reminders (Email)",
  "Customisable Templates",
  "Bulk Actions",
  "Multiple Language Options",
  "Discounts",
  "Email Notifications",
  "Schedule Sending",
  "Remove Watermark",
  "Auto-Suggest Line Items",
  "Custom Payment Terms Per Client",
  "Custom Invoice Fields and Layouts",
  "Reports",
  "Time Tracker",
];

const proFeatures = [
  "All Features in the Lifetime Deal",
  "More usage to the Invoice Assistant",
  "Customisable Columns and Tabs",
  "Mobile Invoice Creation and Sending",
  "QR Code",
  "Include Photos",
  "Custom SMTP for email",
  "SMS Notifications",
  "Zapier Integration",
  "Custom Webhook Support",
  "API Access",
  "Multi-User Access with Roles",
  "Multiple Business Profiles",
  "Client Portal for Invoice/Payment History",
  "Unlimited Automated Payment Reminders (SMS / WhatsApp)",
];

export const Pricing = () => (
  <section className="bg-gradient-to-b from-background to-background/80 py-24">
    <div className="mx-auto container px-4 md:px-6">
      <div className="mx-auto max-w-sm text-center sm:max-w-md md:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Pay Once, Use Forever
        </h2>
        <p className="mt-4 text-muted-foreground">
          Select the perfect plan for your invoicing needs
        </p>
      </div>

      <div className="mt-16 flex gap-16 justify-center flex-col md:flex-row">
        {/* Lifetime Deal Card */}
        <Card className="relative border-primary/50 bg-gradient-to-b from-primary/10 via-background to-background max-w-[400px]">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <Badge
              variant="destructive"
              className="flex items-center gap-1 bg-red-500/90 text-white"
            >
              <Timer className="h-4 w-4" />
              Limited Time Offer
            </Badge>
          </div>
          <CardHeader className="pb-8 pt-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">Lifetime Deal</CardTitle>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold">$67</span>
              <span className="ml-2 text-muted-foreground">/ one-time</span>
            </div>
            <CardDescription className="mt-2 text-primary">
              Save 70% - Offer ends soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <ul className="grid gap-4">
              {ltdFeatures.map((feature, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <CTA label="Get Lifetime Access" size="lg" className="w-full" />
          </CardFooter>
        </Card>

        {/* Pro Plan Card */}
        <Card className="max-w-[400px]">
          <CardHeader className="pb-8 pt-12 text-center">
            <CardTitle className="mb-4 text-xl">Pro Plan</CardTitle>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-4xl font-bold">$30</span>
              <span className="ml-2 text-muted-foreground">/ month</span>
            </div>
            <CardDescription className="mt-2">
              For growing businesses
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <ul className="grid gap-4">
              {proFeatures.map((feature, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="lg" variant="outline" className="w-full">
              Subscribe Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
);
