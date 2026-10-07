import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cn } from "cn";

export interface RadioGroupProps extends BaseRadioGroup.Props {}

export function RadioGroup(props: RadioGroupProps) {
  const { className, ...rest } = props;

  return (
    <BaseRadioGroup
      className={cn("grid w-full gap-2", className)}
      data-slot="radio-group"
      {...rest}
    />
  );
}

export interface RadioProps extends BaseRadio.Root.Props {}

export function Radio(props: RadioProps) {
  const { className, ...rest } = props;

  return (
    <BaseRadio.Root
      className={cn(
        "group relative size-4 cursor-pointer rounded-full border transition-colors duration-200 ease-in",
        "bg-background-100 border-gray-700",
        "hover:border-gray-900 not-data-checked:hover:bg-gray-200",
        "data-checked:border-gray-1000 data-checked:active:border-gray-600",
        "active:border-gray-500 hover:active:bg-background-100",
        "data-disabled:border-gray-500",
        className,
      )}
      data-slot="radio"
      {...rest}
    >
      <BaseRadio.Indicator
        className="flex size-4 items-center justify-center"
        data-slot="radio-indicator"
      >
        <span
          className="size-2 rounded-full bg-gray-1000 transition-colors duration-200 group-data-disabled:bg-gray-500 group-active:bg-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          data-slot="radio-indicator-icon"
        />
      </BaseRadio.Indicator>
    </BaseRadio.Root>
  );
}
