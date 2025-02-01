import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function SuccessPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md p-8 space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h1 className="text-3xl font-bold tracking-tight">
              Thank you for your purchase!
            </h1>
            <p className="text-muted-foreground">
              We&apos;ve sent you a confirmation email with all the details. You
              can close this page or return to the homepage
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <Link href="/" className="w-full">
              <Button className="w-full" variant="default">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </Card>
      </div>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${process.env.FACEBOOK_PIXEL_ID});
fbq('track', 'PageView');
fbq('track', 'Purchase', {
value: 67.00,
currency: 'USD'
});
`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${process.env.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
