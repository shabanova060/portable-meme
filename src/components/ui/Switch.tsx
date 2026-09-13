import type { ComponentProps } from "react";
import css from "~/components/ui/Switch.module.css";

export interface SwitchProps extends ComponentProps<"input"> {
  checked?: boolean;
}

export const Switch = (props: SwitchProps) => {
  const { checked = false, ...rest } = props;
  return (
    <span className={css.SwitchContainer} data-slot="switch-container">
      <input
        className={css.SwitchInput}
        type="checkbox"
        role="switch"
        aria-checked={checked}
        data-slot="switch-input"
        {...rest}
      />
      <span
        className={css.SwitchTrack}
        aria-hidden="true"
        data-slot="switch-track"
      >
        <span className={css.SwitchThumb} data-slot="switch-thumb" />
      </span>
    </span>
  );
};
