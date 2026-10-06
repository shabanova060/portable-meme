import { Select as BaseSelect } from "@base-ui/react/select";
import { cn } from "cn";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export const Select = BaseSelect.Root;

export interface SelectGroupProps extends BaseSelect.Group.Props {}

export function SelectGroup(props: SelectGroupProps) {
  const { className, ...rest } = props;
  return (
    <BaseSelect.Group
      className={cn("scroll-my-1", className)}
      data-slot="select-group"
      {...rest}
    />
  );
}

export interface SelectValueProps extends BaseSelect.Value.Props {}

export function SelectValue(props: SelectValueProps) {
  const { className, ...rest } = props;
  return (
    <BaseSelect.Value
      className={cn("flex flex-1 text-left", className)}
      data-slot="select-value"
      {...rest}
    />
  );
}

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {}

export function SelectTrigger(props: SelectTriggerProps) {
  const { className, children, ...rest } = props;
  return (
    <BaseSelect.Trigger
      className={cn(
        "flex w-fit items-center justify-between gap-2 whitespace-nowrap select-none appearance-none outline-none px-3 h-9 text-sm rounded-md transition-all duration-150",
        "bg-background-100 text-gray-1000 data-placeholder:text-gray-1000",
        "border border-gray-400 hover:border-gray-500",
        "focus-visible:border-gray-800 focus-visible:ring-3 focus-visible:ring-gray-500",
        "data-popup-open:border-gray-800 data-popup-open:ring-3 data-popup-open:ring-gray-500",
        "data-valid:border-green-900 data-valid:ring-3 data-valid:ring-green-300",
        "data-valid:hover:ring-green-500",
        "data-valid:focus-visible:border-green-900 data-valid:focus-visible:ring-3 data-valid:focus-visible:ring-green-300",
        "data-invalid:border-red-900 data-invalid:ring-3 data-invalid:ring-red-300",
        "data-invalid:hover:ring-red-500",
        "data-invalid:focus-visible:border-red-900 data-invalid:focus-visible:ring-3 data-invalid:focus-visible:ring-red-300",
        "data-disabled:cursor-not-allowed data-disabled:text-gray-700 data-disabled:bg-gray-100",
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="select-trigger"
      {...rest}
    >
      {children}
      <BaseSelect.Icon
        render={
          <ChevronDownIcon className="pointer-events-none size-4 text-gray-700" />
        }
        data-slot="select-icon"
      />
    </BaseSelect.Trigger>
  );
}

export interface SelectContentProps
  extends
    BaseSelect.Popup.Props,
    Pick<
      BaseSelect.Positioner.Props,
      "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
    > {}

export function SelectContent(props: SelectContentProps) {
  const {
    className,
    side = "bottom",
    sideOffset = 6,
    align = "center",
    alignOffset = 0,
    alignItemWithTrigger = false,
    children,
    ...rest
  } = props;
  return (
    <BaseSelect.Portal data-slot="select-portal">
      <BaseSelect.Positioner
        className="isolate z-50"
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        data-slot="select-positioner"
      >
        <BaseSelect.Popup
          className={cn(
            "relative isolate z-50 max-h-(--available-height) w-(--anchor-width) p-1.5 min-w-36 origin-(--transform-origin) outline-none overflow-x-hidden overflow-y-auto rounded-xl bg-background-100 text-gray-1000 shadow-menu duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className,
          )}
          data-align-trigger={alignItemWithTrigger}
          data-slot="select-content"
          {...rest}
        >
          <SelectScrollUpButton data-slot="select-scroll-up-button" />
          <BaseSelect.List data-slot="select-list">{children}</BaseSelect.List>
          <SelectScrollDownButton data-slot="select-scroll-down-button" />
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export interface SelectLabelProps extends BaseSelect.GroupLabel.Props {}

export function SelectLabel(props: SelectLabelProps) {
  const { className, ...rest } = props;
  return (
    <BaseSelect.GroupLabel
      className={cn(
        "grid text-gray-900 mb-2 cursor-text capitalize max-w-full text-[13px]",
        className,
      )}
      data-slot="select-label"
      {...rest}
    />
  );
}

export interface SelectItemProps extends BaseSelect.Item.Props {}

export function SelectItem(props: SelectItemProps) {
  const { className, children, ...rest } = props;
  return (
    <BaseSelect.Item
      className={cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-highlighted:bg-gray-400 not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      data-slot="select-item"
      {...rest}
    >
      <BaseSelect.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </BaseSelect.ItemText>
      <BaseSelect.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
            <CheckIcon className="pointer-events-none" />
          </span>
        }
      />
    </BaseSelect.Item>
  );
}

export interface SelectSeparatorProps extends BaseSelect.Separator.Props {}

export function SelectSeparator(props: SelectSeparatorProps) {
  const { className, ...rest } = props;
  return (
    <BaseSelect.Separator
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
      data-slot="select-separator"
      {...rest}
    />
  );
}

export interface SelectScrollUpButtonProps
  extends BaseSelect.ScrollUpArrow.Props {}

export function SelectScrollUpButton(props: SelectScrollUpButtonProps) {
  const { className, ...rest } = props;
  return (
    <BaseSelect.ScrollUpArrow
      className={cn(
        "top-0 z-10 grid w-full cursor-default place-items-center bg-background-100 py-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="select-scroll-up-button"
      {...rest}
    >
      <ChevronUpIcon />
    </BaseSelect.ScrollUpArrow>
  );
}

export interface SelectScrollDownButtonProps
  extends BaseSelect.ScrollDownArrow.Props {}

export function SelectScrollDownButton(props: SelectScrollDownButtonProps) {
  const { className, ...rest } = props;
  return (
    <BaseSelect.ScrollDownArrow
      className={cn(
        "bottom-0 z-10 grid w-full cursor-default place-items-center bg-background-100 py-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="select-scroll-down-button"
      {...rest}
    >
      <ChevronDownIcon />
    </BaseSelect.ScrollDownArrow>
  );
}
