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
        "h-12 whitespace-nowrap px-9 text-xl w-fit transition-all",
        "bg-primary text-primary-foreground",
        {
          "w-[17.5rem] text-primary bg-background border border-primary rounded-lg text-center font-inter":
            outline,
          "w-[17.5rem] text-background bg-primary rounded-lg text-center font-inter":
            secondary,
        },
        className
      )}
    />
  );
}
