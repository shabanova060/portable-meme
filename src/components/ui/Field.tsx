import { Field as BaseField } from "@base-ui/react/field";
import { cn } from "cn";

export interface FieldProps extends BaseField.Root.Props {}

export function Field(props: FieldProps) {
  const { className, ...rest } = props;
  return (
    <BaseField.Root
      className={cn("w-full grid", className)}
      data-slot="field"
      {...rest}
    />
  );
}

export interface FieldLabelProps extends BaseField.Label.Props {}

export function FieldLabel(props: FieldLabelProps) {
  const { className, ...rest } = props;
  return (
    <BaseField.Label
      className={cn(
        "grid text-gray-900 mb-2 cursor-text capitalize max-w-full text-[13px]",
        className,
      )}
      data-slot="field-label"
      {...rest}
    />
  );
}

export interface FieldControlProps extends BaseField.Control.Props {}

export function FieldControl(props: FieldControlProps) {
  const { className, ...rest } = props;
  return (
    <BaseField.Control
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
      data-slot="field-control"
      {...rest}
    />
  );
}

export interface FieldDescriptionProps extends BaseField.Description.Props {}

export function FieldDescription(props: FieldDescriptionProps) {
  const { className, ...rest } = props;
  return (
    <BaseField.Description
      className={cn("text-gray-900 text-sm mt-1", className)}
      data-slot="field-description"
      {...rest}
    />
  );
}

export interface FieldErrorProps extends BaseField.Error.Props {}

export function FieldError(props: FieldErrorProps) {
  const { className, ...rest } = props;
  return (
    <BaseField.Error
      className={cn("text-red-900 text-sm", className)}
      data-slot="field-error"
      {...rest}
    />
  );
}
