import type { ComponentProps } from "react";
import css from "~/components/ui/Input.module.css";

export interface InputProps extends ComponentProps<"input"> {}

export const Input = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <input className={css.Input} type="text" data-slot="input" {...rest} />
  );
};
