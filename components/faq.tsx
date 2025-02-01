import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question:
      "Will Billmatic actually save me time on invoicing? I'm already busy running my business.",
    answer:
      "Billmatic is designed to streamline your entire invoicing process. Features like the AI Invoice Assistant, automated reminders, bulk actions, and pre-filled line items significantly reduce manual effort and free up valuable time for you to focus on core business tasks.",
  },
  {
    question:
      "How quickly can I get up and running with Billmatic and start sending invoices?",
    answer:
      "Billmatic is incredibly user-friendly and intuitive. You can sign up and create your first invoice in just a few minutes. We also offer helpful resources and support to guide you through the process.",
  },
  {
    question:
      "Can I create professional-looking invoices that reflect my brand identity, even with the LTD plan?",
    answer:
      "Yes, Billmatic offers customisable templates in both the LTD and Pro plans. You can choose a template that aligns with your brand aesthetic and add your logo to create polished invoices that make a great impression on clients.",
  },
  {
    question:
      "I work with international clients. Can Billmatic handle different currencies and languages?",
    answer:
      "Billmatic supports multiple languages and automatically handles currency conversions based on your settings, making it easy to invoice clients globally.",
  },
  {
    question:
      "What is the pricing structure for Billmatic, and are there any hidden costs?",
    answer:
      "Billmatic offers transparent pricing with both a Lifetime Deal (LTD) and a Pro Plan. The LTD provides access to a comprehensive set of core features for a one-time payment. The Pro Plan offers additional advanced features for a monthly or annual subscription. There are no hidden fees or surprises.",
  },
  {
    question:
      "Will Billmatic help me get paid faster and improve my cash flow?",
    answer:
      "Yes, features like online payments, automated payment reminders, and clear invoice tracking can significantly improve your payment collection process and reduce late payments, leading to healthier cash flow.",
  },
  {
    question:
      "I'm not very tech-savvy. Is Billmatic easy to learn and use, or will it be frustrating?",
    answer:
      "Billmatic is designed with simplicity in mind. The interface is intuitive and user-friendly, even for those who aren't tech experts. You'll find it easy to navigate and create invoices without a steep learning curve.",
  },
  {
    question:
      "What kind of customer support does Billmatic provide if I need help?",
    answer:
      "Billmatic offers dedicated customer support to assist you with any questions or issues you may encounter. You can reach out via email, chat, or consult our comprehensive help documentation.",
  },
];

export const FAQ = () => (
  <section className="bg-muted/50 py-24">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-muted"
            >
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
