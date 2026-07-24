"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex flex-wrap gap-2", className)}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500/10 data-[state=checked]:text-primary-400",
      className
    )}
    {...props}
  >
    <span className="grid size-3.5 shrink-0 place-items-center">
      <RadioGroupPrimitive.Indicator>
        <Check className="size-3.5" aria-hidden="true" />
      </RadioGroupPrimitive.Indicator>
    </span>
    {children}
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
