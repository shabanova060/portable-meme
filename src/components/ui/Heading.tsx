import type { ComponentProps } from "react";
import css from "~/components/ui/Heading.module.css";

export interface HeadingProps extends ComponentProps<"h1"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "1" | "2" | "3" | "4" | "5" | "6";
}

export const Heading = (props: HeadingProps) => {
  const {
    as: Component = "h1",
    size = "1",
    className,
    children,
    ...rest
  } = props;
  return (
    <Component className={css.Heading} data-size={size} {...rest}>
      {children}
    </Component>
  );
};
