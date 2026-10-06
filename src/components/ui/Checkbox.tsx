import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { cn } from "cn";
import { CheckIcon } from "lucide-react";

export interface CheckboxProps extends BaseCheckbox.Root.Props {}

export function Checkbox(props: CheckboxProps) {
  const { className, ...rest } = props;
  return (
    <BaseCheckbox.Root
      className={cn(
        "size-4 relative grid place-content-center bg-background-100 hover:bg-gray-200 border border-gray-700 rounded-sm transition-all duration-200 data-checked:bg-gray-1000 data-checked:border-gray-1000 cursor-pointer data-disabled:bg-gray-100 data-disabled:border-gray-500 data-disabled:data-checked:bg-gray-600 data-disabled:data-checked:border-gray-600 data-disabled:cursor-not-allowed",
        className,
      )}
      data-slot="checkbox"
      {...rest}
    >
      <BaseCheckbox.Indicator
        className="grid place-content-center data-checked:text-gray-100 transition-none [&>svg]:size-3"
        data-slot="checkbox-indicator"
      >
        <CheckIcon data-slot="checkbox-indicator-icon" />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
