import { Info } from "lucide-react";
import css from "~/components/ui/ErrorMessage.module.css";

export interface ErrorMessageProps extends React.ComponentProps<"p"> {
  size?: "small" | "medium" | "large";
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  size = "medium",
  ...props
}) => {
  return (
    <p className={css.ErrorMessage} data-size={size} {...props}>
      <Info size={16} color="var(--ds-error-color)" />
      <span>{children}</span>
    </p>
  );
};
