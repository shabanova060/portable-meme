import { Info } from "lucide-react";
import css from "~/components/ui/ErrorMessage.module.css";

export interface ErrorMessageProps extends React.ComponentProps<"p"> {
  size?: "small" | "medium" | "large";
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { size = "medium", children, ...rest } = props;
  return (
    <p className={css.ErrorMessage} data-size={size} {...rest}>
      <Info size={16} color="var(--ds-error-color)" />
      <span>{children}</span>
    </p>
  );
};
