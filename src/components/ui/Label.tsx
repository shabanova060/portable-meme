import type { ComponentProps } from "react";
import css from "~/components/ui/Label.module.css";

export interface LabelProps extends ComponentProps<"label"> {}

export const Label = (props: LabelProps) => {
  const { htmlFor, children, ...rest } = props;
  return (
    <label className={css.Label} htmlFor={htmlFor} data-slot="label" {...rest}>
      {children}
    </label>
  );
};
