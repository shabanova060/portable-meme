import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "cn";
import { cva, type VariantProps } from "cva";

export const button = cva({
  base: "cursor-pointer select-none grid place-items-center font-medium transition-colors ease-in-out duration-150 outline-none disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:pointer-events-none",
  variants: {
    intent: {
      primary:
        "bg-gray-1000 text-background-100 border border-transparent hover:bg-gray-900",
      secondary:
        "bg-background-100 text-gray-1000 border border-gray-400 hover:bg-gray-200",
      tertiary:
        "bg-background-100 text-gray-1000 border border-transparent hover:bg-gray-200",
    },
    size: {
      sm: "text-xs h-8 px-3 rounded-md",
      md: "text-sm h-9 px-4 rounded-md",
      lg: "text-base h-10 px-5 rounded-md",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends BaseButton.Props, VariantProps<typeof button> {}

export function Button(props: ButtonProps) {
  const { intent, size, className, ...rest } = props;
  return (
    <BaseButton
      className={cn(button({ intent, size }), className)}
      data-slot="button"
      {...rest}
    />
  );
}
