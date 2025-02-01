import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Sparkles, LayoutList } from "lucide-react";
import ConfettiButton from "./confetti-button";
import { SimpleChat } from "./simple-chat";
import { DataTable } from "./data-table";

interface BenefitProps {
  title: string;
  description: string;
  component: React.ReactNode;
  icon: React.ReactNode;
  reverse?: boolean;
}

function BenefitItem({
  title,
  description,
  component,
  icon,
  reverse = false,
}: BenefitProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-1/2 py-8">{component}</div>
          <div className="flex w-full items-center md:w-1/2">
            <div className="p-6 md:p-12">
              <div className="mb-4 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                {icon}
              </div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const Benefits = () => (
  <section className="py-24 ">
    <div className="container mx-auto px-4 md:px-6 lg:max-w-6xl">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Why Choose Billmatic?
      </h2>
      <div className="space-y-12">
        <BenefitItem
          title="Get Paid Faster with Seamless Online Payments"
          description="Billmatic allows you to accept online payments directly through invoices with a secure payment link. Clients can pay quickly and securely via Stripe, and you'll receive instant notifications when payments are processed. This improves cash flow and reduces late payments."
          component={<ConfettiButton />}
          icon={<CreditCard className="h-6 w-6" />}
        />
        <BenefitItem
          title="Boost Productivity with AI-Powered Invoice Creation"
          description="Billmatic's AI assistant guides you through creating invoices by asking you for information through a chat interface. The AI will ask for details about the invoice, such as how much to charge and whether it is a flat rate, hourly rate, or daily rate. This eliminates manual data entry and reduces the risk of errors."
          component={<SimpleChat />}
          icon={<Sparkles className="h-6 w-6" />}
          reverse={true}
        />
        <BenefitItem
          title="Stay Organised and Efficiently Manage Invoices"
          description="Billmatic makes it easy to send invoices to clients and track invoice statuses. You can filter invoices by status to see which are awaiting payment and which are paid. The system automatically updates the status of invoices, so you don't have to update it manually."
          component={<DataTable />}
          icon={<LayoutList className="h-6 w-6" />}
        />
      </div>
    </div>
  </section>
);
