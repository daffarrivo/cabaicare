import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-emerald-700 text-white border border-emerald-800 hover:bg-emerald-800 hover:border-emerald-900 shadow-sm",
        outline:
          "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50 hover:text-zinc-900 shadow-2xs",
        secondary:
          "bg-zinc-100 text-zinc-900 border border-zinc-200/50 hover:bg-zinc-200/70",
        ghost:
          "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800/50",
        destructive:
          "bg-red-600 text-white border border-red-700 hover:bg-red-700 hover:border-red-800 shadow-sm",
        link: "text-emerald-700 underline-offset-4 hover:underline hover:text-emerald-800",
      },
      size: {
        default:
          "h-10 gap-1.5 px-4",
        xs: "h-7 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8.5 gap-1 rounded-md px-3 text-[0.8rem] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11.5 gap-1.5 px-5 text-base",
        icon: "size-10",
        "icon-xs":
          "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8.5 rounded-md",
        "icon-lg": "size-11.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
