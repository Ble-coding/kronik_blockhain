import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea(
  { className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: React.Ref<HTMLTextAreaElement>
) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}

const ForwardedTextarea = React.forwardRef(Textarea);
ForwardedTextarea.displayName = "Textarea";

export { ForwardedTextarea as Textarea };
