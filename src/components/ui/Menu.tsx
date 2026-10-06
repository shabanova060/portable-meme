import { Menu as BaseMenu } from "@base-ui/react/menu";
import { cn } from "cn";
import { ChevronRightIcon } from "lucide-react";

export const Menu = BaseMenu.Root;

export interface MenuPortal extends BaseMenu.Portal.Props {}

export function MenuPortal(props: MenuPortal) {
  const { className, ...rest } = props;
  return (
    <BaseMenu.Portal className={className} data-slot="menu-portal" {...rest} />
  );
}

export interface MenuTrigger extends BaseMenu.Trigger.Props {}

export function MenuTrigger(props: MenuTrigger) {
  const { className, ...rest } = props;
  return (
    <BaseMenu.Trigger
      className={className}
      data-slot="menu-trigger"
      {...rest}
    />
  );
}

export interface MenuContentProps
  extends
    BaseMenu.Popup.Props,
    Pick<
      BaseMenu.Positioner.Props,
      "align" | "alignOffset" | "side" | "sideOffset"
    > {}

export function MenuContent(props: MenuContentProps) {
  const {
    align = "start",
    alignOffset = 0,
    side = "bottom",
    sideOffset = 4,
    className,
    ...rest
  } = props;

  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <BaseMenu.Popup
          className={cn(
            "z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin)",
            "overflow-x-hidden overflow-y-auto rounded-lg bg-background-100 p-1.5 text-gray-1000 shadow-menu duration-100 outline-none",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
            "data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95",
            className,
          )}
          data-slot="dropdown-menu-content"
          {...rest}
        />
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export interface MenuGroupProps extends BaseMenu.Group.Props {}

export function MenuGroup(props: MenuGroupProps) {
  const { className, ...rest } = props;
  return (
    <BaseMenu.Group className={className} data-slot="menu-group" {...rest} />
  );
}

export interface MenuGroupLabelProps extends BaseMenu.GroupLabel.Props {}

export function MenuGroupLabel(props: MenuGroupLabelProps) {
  const { className, ...rest } = props;
  return (
    <BaseMenu.GroupLabel
      className={cn(
        "grid text-gray-900 mb-2 cursor-text capitalize max-w-full text-[13px]",
        className,
      )}
      data-slot="menu-group-label"
      {...rest}
    />
  );
}

export interface MenuItemProps extends BaseMenu.Item.Props {}

export function MenuItem(props: MenuItemProps) {
  const { className, ...rest } = props;

  return (
    <BaseMenu.Item
      className={cn(
        "group/menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none",
        "data-highlighted:bg-gray-100",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="menu-item"
      {...rest}
    />
  );
}

export interface MenuLinkItemProps extends BaseMenu.LinkItem.Props {}

export function MenuLinkItem(props: MenuLinkItemProps) {
  const { closeOnClick = true, className, ...rest } = props;

  return (
    <BaseMenu.LinkItem
      className={cn(
        "group/menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none",
        "data-highlighted:bg-gray-200 focus:**:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      closeOnClick={closeOnClick}
      data-slot="menu-link-item"
      {...rest}
    />
  );
}

export const MenuSubmenu = BaseMenu.SubmenuRoot;

export interface MenuSubmenuTriggerProps
  extends BaseMenu.SubmenuTrigger.Props {}

export function MenuSubmenuTrigger(props: MenuSubmenuTriggerProps) {
  const { className, children, ...rest } = props;

  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none",
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground",
        "data-popup-open:bg-background-200 data-popup-open:text-gray-900",
        "data-open:bg-background-200 data-open:text-gray-900",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      data-slot="menu-submenu-trigger"
      {...rest}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </BaseMenu.SubmenuTrigger>
  );
}

export interface MenuSubmenuContentProps extends MenuContentProps {}

export function MenuSubmenuContent(props: MenuSubmenuContentProps) {
  const {
    align = "start",
    alignOffset = -3,
    side = "right",
    sideOffset = 0,
    className,
    ...rest
  } = props;

  return (
    <MenuContent
      className={cn(
        "w-auto min-w-24 rounded-lg bg-background-100 p-1.5 text-gray-1000 shadow-menu ring-1 ring-foreground/10 duration-100",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
        "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className,
      )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      data-slot="menu-submenu-content"
      {...rest}
    />
  );
}

export interface MenuSeparatorProps extends BaseMenu.Separator.Props {}

export function MenuSeparator(props: MenuSeparatorProps) {
  const { className, ...rest } = props;

  return (
    <BaseMenu.Separator
      className={cn("-mx-1 my-1 h-px bg-gray-400", className)}
      data-slot="menu-separator"
      {...rest}
    />
  );
}
