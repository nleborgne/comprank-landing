"use client";

import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

export default function ConfettiButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!buttonRef.current) return;
    setIsAnimating(true);

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const defaults = {
      spread: 200,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 6,
      shapes: ["circle"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    function shootConfetti() {
      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 1,
        shapes: ["circle"],
        origin: {
          x: buttonCenterX / window.innerWidth,
          y: buttonCenterY / window.innerHeight,
        },
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
        origin: {
          x: buttonCenterX / window.innerWidth,
          y: buttonCenterY / window.innerHeight,
        },
      });
    }

    shootConfetti();

    setTimeout(() => setIsAnimating(false), 100);
  };

  return (
    <div className="flex items-center justify-center min-h-full ">
      <Button
        ref={buttonRef}
        onClick={handleClick}
        disabled={isAnimating}
        className={`relative px-6 py-3 text-white bg-primary rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 w-48 text-2xl h-16 ${
          isAnimating ? "animate-pulse" : ""
        }`}
      >
        <CreditCard />
        Pay now
      </Button>
    </div>
  );
}
