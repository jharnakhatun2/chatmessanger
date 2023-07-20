import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

interface CompType {
  outline?: boolean;
  secondary?: boolean;
}

export default function Button({
  className,
  secondary,
  outline,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & CompType) {
  return (
    <button
      {...props}
      className={cn(
        "h-12 whitespace-nowrap text-xl transition-all",
        "bg-primary text-primary-foreground",
        {
          "w-full lg:w-[17.5rem] text-primary bg-background border border-primary rounded-full lg:rounded-lg text-center font-inter":
            outline,
          "w-full lg:w-[17.5rem] text-background bg-primary rounded-full lg:rounded-lg text-center font-inter":
            secondary,
        },
        className
      )}
    />
  );
}
