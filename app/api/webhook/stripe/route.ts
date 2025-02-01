import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import type Stripe from "stripe";

const email = `<div className="flex flex-col gap-2">
    <p>Hi,</p>
    <p>
      First off, THANK YOU! 🎉 We&apos;re so thrilled that you believe in what
      we&apos;re building here at Billmatic. Your support means the world to us.
      💙
    </p>
    <p>Now we have a little confession to make... 😬</p>
    <p>
      <span className="font-bold">Billmatic isn&apos;t quite ready yet.</span>{" "}
      It&apos;s still in the oven, and it&apos;s not done baking yet. We are
      working hard behind the scenes to deliver the most amazing invoicing
      experience possible, but, well... we got a little ahead of ourselves with
      the excitement!
    </p>
    <h3>So, what does this mean for you?</h3>
    <p className="font-bold">You have two options: </p>
    <ul className="list-disc">
      <li>
        <span className="font-bold">Option 1</span>: If you&apos;d like a
        refund, we totally understand! Just hit reply to this email and
        we&apos;ll process it right away, no hard feelings at all. 🙏
      </li>
      <li>
        <span className="font-bold">Option 2</span>: If you&apos;re feeling
        adventurous (and a little patient), you can stick with us and become one
        of our <span className="font-bold">Founding Members</span>. 🎉
      </li>
    </ul>
    <h3 className="font-bold">What&apos;s in it for Founding Members?</h3>
    <ul>
      <li>
        <span className="font-bold">Lifetime access</span> to{" "}
        <span className="font-bold">every premium feature</span> we ever release
        -- for free.
      </li>
      <li>
        <span className="font-bold">Early access</span> to{" "}
        <span className="font-bold">new features</span>, meaning you&apos;ll get
        to experience Billmatic before anyone else. 🚀
      </li>
      <li>
        <span className="font-bold">Direct input</span> on the development
        process. You&apos;ll be part of a special group of insiders helping
        shape the future of Billmatic.
      </li>
      <li>
        Your name will be proudly displayed on our website as one of our{" "}
        <span className="font-bold">Founding Members</span>. 🌟
      </li>
    </ul>
    <p>
      We know this isn&apos;t what you expected when you signed up, and
      we&apos;re genuinely sorry for the delay. But hey --{" "}
      <span className="font-bold">building great things take time,</span> and we
      want to make sure we deliver something that&apos;ll knock your socks off.
    </p>

    <p>
      If you&apos;re in, just sit tight. We&apos;ll keep you posted with
      updates, sneak peeks, and maybe even a few behind-the-scenes bloopers. 😄
    </p>

    <p>
      If you&apos;d prefer a refund, just let us know by replying to this email,
      and we&apos;ll take care of it right away. No questions asked.
    </p>

    <p>
      Thanks again for your trust, patience, and support. We can&apos;t wait to
      show you what we&apos;re building.
    </p>

    <p>Warmest regards,</p>

    <p>Nicolas, Founder of Billmatic</p>

    <p>
      P.S. If you have any questions or just want to say hi, reply to this
      email. We love hearing from you. 😊
    </p>
  </div>`;

export const runtime = "edge";

export const POST = async (request: Request) => {
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");
  if (!signature) {
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const stripeSigningSecret = process.env.STRIPE_SIGNING_SECRET as string;
  try {
    const body = await request.text();
    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      stripeSigningSecret
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_details?.email;

      if (!customerEmail) {
        throw new Error("Customer email is missing");
      }

      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Nicolas from Billmatic <nicolas@billmatic.io>",
            to: [customerEmail],
            subject: "Welcome to Billmatic! ",
            html: email,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to send welcome email");
        }
        console.log("Welcome email sent successfully to:", customerEmail);
      } catch (error) {
        console.error("Error sending welcome email:", error);
      }
    }

    return new Response(JSON.stringify({ success: true, error: null }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ success: false, error: "Webhook error" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
