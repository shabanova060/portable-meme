import type { ComponentProps } from "react";
import css from "~/components/ui/Textarea.module.css";

export interface TextareaProps extends ComponentProps<"textarea"> {}

export const Textarea = (props: TextareaProps) => {
  const { ...rest } = props;
  return <textarea className={css.Textarea} data-slot="textarea" {...rest} />;
};
