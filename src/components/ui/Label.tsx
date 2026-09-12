import css from "~/components/ui/Label.module.css";

export interface LabelProps extends React.ComponentProps<"label"> {}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  ...props
}) => {
  return (
    <label className={css.Label} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};
