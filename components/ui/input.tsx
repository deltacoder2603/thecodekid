import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;  // Example custom prop
  error?: boolean; // Another example
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {  // Destructure the new props
    return (
      <div> {/* Wrap input in a div to accommodate the label */}
        {label && <label>{label}</label>} {/* Conditionally render the label */}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            error && "border-red-500" // Example of using the custom 'error' prop
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red-500">Error message</p>} {/* Example error display */}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
