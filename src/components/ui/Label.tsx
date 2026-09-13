import css from "~/components/ui/Label.module.css";

export const Label: React.FC<React.ComponentProps<"label">> = (props) => {
  const { htmlFor, children, ...rest } = props;
  return (
    <label className={css.Label} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};
