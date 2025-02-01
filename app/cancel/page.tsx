import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <XCircle className="h-16 w-16 text-destructive" />
          <h1 className="text-3xl font-bold tracking-tight">
            Purchase Cancelled
          </h1>
          <p className="text-muted-foreground">
            Your transaction has been cancelled and you have not been charged.
            If you have any questions, feel free to reach out to our support team.
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
  );
}
