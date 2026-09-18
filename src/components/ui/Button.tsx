import type { ComponentProps } from "react";
import css from "~/components/ui/Button.module.css";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = (props: ButtonProps) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button
      className={css.Button}
      data-variant={variant}
      data-slot="button"
      {...rest}
    >
      {children}
    </button>
  );
};
