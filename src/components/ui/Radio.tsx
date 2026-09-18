import type { ComponentProps } from "react";
import css from "~/components/ui/Radio.module.css";

export interface RadioProps extends ComponentProps<"input"> {}

export const Radio = (props: RadioProps) => {
  const { ...rest } = props;
  return (
    <input className={css.Radio} type="radio" data-slot="radio" {...rest} />
  );
};
