"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Chat with the AI Invoice Assistant",
    description:
      "Initiate a conversation with Billmatic's dedicated chatbot by clicking the icon on the topbar. Tell the assistant to \"Create an invoice for Bob\". The AI will guide you through the process, asking for essential details like the client's email, the amount to charge, and the billing rate.",
    videoUrl: "/step1.mp4",
  },
  {
    title: "Review and Customise",
    description:
      "Billmatic automatically generates a draft invoice based on your conversation with the AI assistant. Review the invoice details, including line items, payment terms, and due date. You can select from a variety of customisable templates to ensure a professional and polished look.",
    videoUrl: "/step2.mp4",
  },
  {
    title: "Send and Get Paid",
    description:
      "Once you're satisfied with the invoice, select the option to include a payment link for online payments via Stripe. Billmatic will send the invoice to your client and automatically update the status when the payment is received. Schedule automated payment reminders via email, SMS, or WhatsApp to stay on top of outstanding invoices.",
    videoUrl: "/step3.mp4",
  },
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(videoRef, { once: false, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          How Billmatic Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative pl-8 border-l-2 border-muted-foreground/20">
              {steps.map((step, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div
                    className={cn(
                      "absolute left-0 w-4 h-4 rounded-full -translate-x-[9px] transition-all duration-300",
                      activeStep === index
                        ? "bg-primary scale-125"
                        : "bg-gray-300"
                    )}
                  />
                  <Button
                    variant="ghost"
                    className={cn(
                      "p-0 h-auto text-left hover:bg-transparent",
                      activeStep === index
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setActiveStep(index)}
                  >
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  </Button>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.p
                        className="text-sm text-muted-foreground opacity-0"
                        initial={{ opacity: 0, filter: "blur(5px)" }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                        }}
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div
              ref={videoRef}
              className="aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              {isInView && (
                <video
                  key={steps[activeStep].videoUrl}
                  src={steps[activeStep].videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
