"use server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export const createCheckout = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const stripeSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          product: process.env.STRIPE_LTD_PRODUCT_ID,
          currency: "usd",
          unit_amount: 6700,
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/cancel`,
  });

  if (!stripeSession.url) {
    return {
      success: false,
      error: { message: "Could not create Stripe session" },
    };
  }

  redirect(stripeSession.url);
};
