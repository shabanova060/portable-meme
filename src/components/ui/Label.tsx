import css from "~/components/ui/Label.module.css";

export const Label: React.FC<React.ComponentProps<"label">> = ({
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
