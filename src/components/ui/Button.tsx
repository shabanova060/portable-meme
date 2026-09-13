import type { ComponentProps } from "react";
import css from "~/components/ui/Button.module.css";

export interface ButtonProps extends Omit<ComponentProps<"button">, "size"> {
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "warning";
  size?: "small" | "medium" | "large";
}

export const Button = (props: ButtonProps): React.JSX.Element => {
  const { variant = "primary", size = "medium", children, ...rest } = props;
  return (
    <button
      className={css.Button}
      type="button"
      data-variant={variant}
      data-size={size}
      data-slot="button"
      {...rest}
    >
      {children}
    </button>
  );
};
