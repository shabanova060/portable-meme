import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import { cn } from "cn";
import { Minus } from "lucide-react";

export interface OTPFieldProps extends BaseOTPField.Root.Props {}

export function OTPField(props: OTPFieldProps) {
  const { className, ...rest } = props;
  return (
    <BaseOTPField.Root
      className={cn(
        "grid grid-flow-col auto-cols-max place-items-center w-full gap-2",
        className,
      )}
      data-slot="otp-field"
      {...rest}
    />
  );
}

export interface OTPFieldInputProps extends BaseOTPField.Input.Props {}

export function OTPFieldInput(props: OTPFieldInputProps) {
  const { className, ...rest } = props;
  return (
    <BaseOTPField.Input
      className={cn(
        "appearance-none outline-none px-3 size-12 grid place-items-center text-md font-bold rounded-md transition-all duration-150",
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
      data-slot="otp-field-input"
      {...rest}
    />
  );
}

export interface OTPFieldSeparatorProps extends BaseOTPField.Separator.Props {}

export function OTPFieldSeparator(props: OTPFieldSeparatorProps) {
  const { className, ...rest } = props;
  return (
    <BaseOTPField.Separator
      className={cn("text-gray-600", className)}
      data-slot="otp-field-separator"
      {...rest}
    >
      <Minus data-slot="otp-field-separator-icon" />
    </BaseOTPField.Separator>
  );
}
