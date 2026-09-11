import css from "~/components/ui/Input.module.css";

export const Input: React.FC<React.ComponentProps<"input">> = ({
  ...props
}): React.JSX.Element => (
  <input className={css.Input} data-slot="input" {...props} />
);
