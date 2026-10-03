import { cn } from "cn";
import type { ComponentProps } from "react";

export interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  const { className, ...rest } = props;
  return (
    <div
      className="relative w-full overflow-x-auto"
      data-slot="table-container"
    >
      <table
        className={cn("text-sm text-gray-900 w-full caption-bottom", className)}
        data-slot="table"
        {...rest}
      />
    </div>
  );
}

export interface TableHeaderProps extends ComponentProps<"thead"> {}

export function TableHeader(props: TableHeaderProps) {
  const { className, ...rest } = props;
  return (
    <thead
      className={cn("[&_tr]:border-gray-400 [&_tr]:border-b", className)}
      data-slot="table-header"
      {...rest}
    />
  );
}

export interface TableBodyProps extends ComponentProps<"tbody"> {}

export function TableBody(props: TableBodyProps) {
  const { className, ...rest } = props;
  return (
    <tbody
      className={cn(
        "[&_tr:where(:nth-child(odd))]:bg-background-200 [&_td:first-child]:rounded-l-md [&_td:last-child]:rounded-r-md [&_tr:hover]:bg-gray-100",
        className,
      )}
      data-slot="table-body"
      {...rest}
    />
  );
}

export interface TableHeadProps extends ComponentProps<"th"> {}

export function TableHead(props: TableHeadProps) {
  const { className, ...rest } = props;
  return (
    <th
      className={cn(
        "h-9 border-gray-400 px-2 font-medium text-gray-900 has-[[role=checkbox]]:pr-0 text-left align-middle whitespace-nowrap last:text-right *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      data-slot="table-head"
      {...rest}
    />
  );
}

export interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps) {
  const { className, ...rest } = props;
  return (
    <tr
      className={cn("transition-colors", className)}
      data-slot="table-row"
      {...rest}
    />
  );
}

export interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  const { className, ...rest } = props;
  return (
    <td
      className={cn(
        "px-2 py-2.5 has-data-[cell-link=true]:p-0 has-[[role=checkbox]]:pr-0 align-middle whitespace-nowrap last:text-right *:[[role=checkbox]]:translate-y-0.5",
        className,
      )}
      data-slot="table-cell"
      {...rest}
    />
  );
}

export interface TableFooterProps extends ComponentProps<"tfoot"> {}

export function TableFooter(props: TableFooterProps) {
  const { className, ...rest } = props;
  return (
    <tfoot
      className={cn(
        "border-gray-400 font-medium border-t [&>tr]:last:border-b-0",
        className,
      )}
      data-slot="table-footer"
      {...rest}
    />
  );
}

export interface TableCaptionProps extends ComponentProps<"caption"> {}

export function TableCaption(props: TableCaptionProps) {
  const { className, ...rest } = props;
  return (
    <caption
      className={cn("mt-4 text-sm text-gray-400", className)}
      data-slot="table-caption"
      {...rest}
    />
  );
}
