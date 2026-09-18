import type { ComponentProps } from "react";
import css from "~/components/ui/Checkbox.module.css";

export interface CheckboxProps extends ComponentProps<"input"> {}

export const Checkbox = (props: CheckboxProps) => {
  const { ...rest } = props;
  return (
    <input
      className={css.Checkbox}
      type="checkbox"
      data-slot="checkbox"
      {...rest}
    />
  );
};
