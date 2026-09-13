import type { ComponentProps } from "react";
import css from "~/components/ui/Table.module.css";

export interface TableProps extends ComponentProps<"table"> {}
export interface TableHeaderProps extends ComponentProps<"thead"> {}
export interface TableBodyProps extends ComponentProps<"tbody"> {}
export interface TableHeadProps extends ComponentProps<"th"> {}
export interface TableRowProps extends ComponentProps<"tr"> {}
export interface TableCellProps extends ComponentProps<"td"> {}
export interface TableFooterProps extends ComponentProps<"tfoot"> {}
export interface TableCaptionProps extends ComponentProps<"caption"> {}

export const Table = (props: TableProps) => {
  const { children, ...rest } = props;
  return (
    <div className={css.TableContainer} data-slot="table-container">
      <table className={css.Table} data-slot="table" {...rest}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader = (props: TableHeaderProps) => {
  const { children, ...rest } = props;
  return (
    <thead className={css.TableHeader} data-slot="table-header" {...rest}>
      {children}
    </thead>
  );
};

export const TableBody = (props: TableBodyProps) => {
  const { children, ...rest } = props;
  return (
    <tbody className={css.TableBody} data-slot="table-body" {...rest}>
      {children}
    </tbody>
  );
};

export const TableHead = (props: TableHeadProps) => {
  const { children, ...rest } = props;
  return (
    <th className={css.TableHead} data-slot="table-head" {...rest}>
      {children}
    </th>
  );
};

export const TableRow = (props: TableRowProps) => {
  const { children, ...rest } = props;
  return (
    <tr className={css.TableRow} data-slot="table-row" {...rest}>
      {children}
    </tr>
  );
};

export const TableCell = (props: TableCellProps) => {
  const { children, ...rest } = props;
  return (
    <td className={css.TableCell} data-slot="table-cell" {...rest}>
      {children}
    </td>
  );
};

export const TableFooter = (props: TableFooterProps) => {
  const { children, ...rest } = props;
  return (
    <tfoot className={css.TableFooter} data-slot="table-footer" {...rest}>
      {children}
    </tfoot>
  );
};

export const TableCaption = (props: TableCaptionProps) => {
  const { children, ...rest } = props;
  return (
    <caption className={css.TableCaption} data-slot="table-caption" {...rest}>
      {children}
    </caption>
  );
};
