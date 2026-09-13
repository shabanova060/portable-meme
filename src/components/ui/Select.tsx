import type { ComponentProps } from "react";
import css from "~/components/ui/Select.module.css";

export interface SelectProps extends Omit<ComponentProps<"select">, "size"> {
  size?: "small" | "medium" | "large";
}

export const Select = (props: SelectProps) => {
  const { size = "medium", className, children, ...rest } = props;
  return (
    <select
      className={css.Select}
      data-size={size}
      data-slot="select"
      {...rest}
    >
      {children}
    </select>
  );
};
export interface SelectOptGroupProps extends ComponentProps<"optgroup"> {}

export const SelectOptGroup = (props: SelectOptGroupProps) => {
  const { children, ...rest } = props;
  return (
    <optgroup
      className={css.SelectOptGroup}
      data-slot="select-optgroup"
      {...rest}
    >
      {children}
    </optgroup>
  );
};

export interface SelectOptionProps extends ComponentProps<"option"> {}

export const SelectOption = (props: SelectOptionProps) => {
  const { children, ...rest } = props;
  return (
    <option className={css.SelectOption} data-slot="select-option" {...rest}>
      {children}
    </option>
  );
};
