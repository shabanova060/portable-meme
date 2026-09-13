import type { ComponentProps } from "react";
import css from "~/components/ui/Switch.module.css";

export interface SwitchProps extends ComponentProps<"input"> {
  checked?: boolean;
}

export const Switch = (props: SwitchProps) => {
  const { checked = false, ...rest } = props;
  return (
    <div className={css.SwitchContainer}>
      <input
        className={css.Switch}
        type="checkbox"
        role="switch"
        aria-checked={checked}
        data-slot="switch-checkbox"
        {...rest}
      />
    </div>
  );
};
