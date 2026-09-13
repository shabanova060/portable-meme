import { Info } from "lucide-react";
import type { ComponentProps } from "react";
import css from "~/components/ui/ErrorMessage.module.css";

export interface ErrorMessageProps extends ComponentProps<"p"> {
  size?: "small" | "medium" | "large";
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { size = "medium", children, ...rest } = props;
  return (
    <p className={css.ErrorMessage} data-size={size} {...rest}>
      <Info size={16} color="var(--ds-error-color)" />
      <span>{children}</span>
    </p>
  );
};
