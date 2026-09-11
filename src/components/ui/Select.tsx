import css from "~/components/ui/Select.module.css";

export interface SelectProps extends Omit<
  React.ComponentProps<"select">,
  "size"
> {
  size?: "small" | "medium" | "large";
}

export const Select: React.FC<SelectProps> = ({
  size = "medium",
  ...props
}): React.JSX.Element => (
  <select
    className={css.Select}
    data-size={size}
    data-slot="select"
    {...props}
  />
);

export const SelectOptGroup: React.FC<React.ComponentProps<"optgroup">> = ({
  ...props
}): React.JSX.Element => (
  <optgroup
    className={css.SelectOptGroup}
    data-slot="select-optgroup"
    {...props}
  />
);

export const SelectOption: React.FC<React.ComponentProps<"option">> = ({
  ...props
}): React.JSX.Element => (
  <option className={css.SelectOption} data-slot="select-option" {...props} />
);
