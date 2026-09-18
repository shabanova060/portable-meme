import { Info } from "lucide-react";
import type { ComponentProps } from "react";
import css from "~/components/ui/ErrorMessage.module.css";

export interface ErrorMessageProps extends ComponentProps<"p"> {}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { children, ...rest } = props;
  return (
    <p
      className={css.ErrorMessage}
      role="alert"
      data-slot="error-message"
      {...rest}
    >
      <Info size={16} />
      {children}
    </p>
  );
};
