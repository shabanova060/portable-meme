import css from "~/components/ui/Input.module.css";

export interface InputProps extends Omit<
  React.ComponentProps<"input">,
  "size"
> {
  size?: "small" | "medium" | "large";
}

export const Input: React.FC<InputProps> = ({
  size = "medium",
  ...props
}): React.JSX.Element => (
  <input
    className={css.Input}
    type="text"
    data-size={size}
    data-slot="input"
    {...props}
  />
);
