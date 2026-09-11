import css from "~/components/ui/Table.module.css";

export const Table: React.FC<React.ComponentProps<"table">> = ({
  ...props
}): React.JSX.Element => (
  <div className={css.TableContainer} data-slot="table-container">
    <table className={css.Table} data-slot="table" {...props} />
  </div>
);

export const TableHeader: React.FC<React.ComponentProps<"thead">> = ({
  ...props
}): React.JSX.Element => (
  <thead className={css.TableHeader} data-slot="table-header" {...props} />
);

export const TableBody: React.FC<React.ComponentProps<"tbody">> = ({
  ...props
}): React.JSX.Element => (
  <tbody className={css.TableBody} data-slot="table-body" {...props} />
);

export const TableHead: React.FC<React.ComponentProps<"th">> = ({
  ...props
}): React.JSX.Element => (
  <th className={css.TableHead} data-slot="table-head" {...props} />
);

export const TableRow: React.FC<React.ComponentProps<"tr">> = ({
  ...props
}): React.JSX.Element => (
  <tr className={css.TableRow} data-slot="table-row" {...props} />
);

export const TableCell: React.FC<React.ComponentProps<"td">> = ({
  ...props
}): React.JSX.Element => (
  <td className={css.TableCell} data-slot="table-cell" {...props} />
);

export const TableFooter: React.FC<React.ComponentProps<"tfoot">> = ({
  ...props
}): React.JSX.Element => (
  <tfoot className={css.TableFooter} data-slot="table-footer" {...props} />
);

export const TableCaption: React.FC<React.ComponentProps<"caption">> = ({
  ...props
}): React.JSX.Element => (
  <caption className={css.TableCaption} data-slot="table-caption" {...props} />
);
