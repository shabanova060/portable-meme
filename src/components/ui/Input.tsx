import { Input as BaseInput } from "@base-ui/react/input";
import { cn } from "cn";

export interface InputProps extends BaseInput.Props {}

export function Input(props: InputProps) {
  const { className, ...rest } = props;

  return (
    <BaseInput
      className={cn(
        "appearance-none outline-none px-3 h-9 text-sm rounded-md transition-all duration-150",
        "bg-background-100 text-gray-1000 placeholder-gray-700",
        "border border-gray-400 hover:border-gray-500",
        "focus-visible:border-gray-800 focus-visible:ring-3 focus-visible:ring-gray-500",
        "data-valid:border-green-900 data-valid:ring-3 data-valid:ring-green-300",
        "data-valid:hover:ring-green-500",
        "data-valid:focus-within:border-green-900 data-valid:focus-within:ring-3 data-valid:focus-within:ring-green-300",
        "data-invalid:border-red-900 data-invalid:ring-3 data-invalid:ring-red-300",
        "data-invalid:hover:ring-red-500",
        "data-invalid:focus-within:border-red-900 data-invalid:focus-within:ring-3 data-invalid:focus-within:ring-red-300",
        "disabled:cursor-not-allowed disabled:text-gray-700 disabled:bg-gray-100",
        className,
      )}
      data-slot="input"
      {...rest}
    />
  );
}
