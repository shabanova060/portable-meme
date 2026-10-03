import { cn } from "cn";
import type { ComponentProps } from "react";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export function Textarea(props: TextareaProps) {
  const { className, ...rest } = props;
  return (
    <textarea
      className={cn(
        "appearance-none outline-none py-2.5 px-3 resize-none text-sm rounded-md transition-all duration-150",
        "bg-background-100 text-gray-1000 placeholder-gray-700",
        "border border-gray-400 hover:border-gray-500",
        "focus-visible:border-gray-800 focus-visible:ring-3 focus-visible:ring-gray-500",
        "data-valid:border-green-900 data-valid:ring-3 data-valid:ring-green-300",
        "data-valid:hover:ring-green-500",
        "data-valid:focus-within:border-green-900 data-valid:focus-within:ring-3 data-valid:focus-within:ring-green-300",
        "data-invalid:border-red-900 data-invalid:ring-3 data-invalid:ring-red-300",
        "data-invalid:hover:ring-red-500",
        "data-invalid:focus-within:border-red-900 data-invalid:focus-within:ring-3 data-invalid:focus-within:ring-red-300",
        "disabled:cursor-not-allowed disabled:text-gray-700 disabled:bg-gray-100",
        className,
      )}
      data-slot="field-textarea"
      {...rest}
    />
  );
}
