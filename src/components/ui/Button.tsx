import css from "~/components/ui/Button.module.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variants?: "primary" | "secondary" | "tertiary" | "danger" | "warning";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  variants = "primary",
  size = "medium",
  ...props
}): React.JSX.Element => (
  <button
    className={css.Button}
    type="button"
    data-variant={variants}
    data-size={size}
    data-slot="button"
    {...props}
  />
);
