import { Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  createSortedRowModel,
  rowSortingFeature,
  type SortFn,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "~/components/ui/Button";
import { Select, SelectOption } from "~/components/ui/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";

type Product = {
  id: string;
  image: string;
  sku: string;
  name: string;
  brand: {
    id: string;
    name: string;
  };
  price: number;
  stock: number;
  status: "active" | "inactive" | "hidden";
};

const productTableFeatures = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
  },
});

const sortStatusFn: SortFn<typeof productTableFeatures, Product> = (
  rowA,
  rowB,
) => {
  const statusA = rowA.original.status;
  const statusB = rowB.original.status;
  const statusOrder = ["active", "inactive", "hidden"];
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
};

const columnHelper = createColumnHelper<typeof productTableFeatures, Product>();

const productTableColumns = columnHelper.columns([
  columnHelper.accessor("image", {
    header: "Image",
    cell: (info) => (
      <img
        src={info.getValue()}
        alt={info.row.original.name}
        height={56}
        width={56}
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("sku", {
    header: "SKU",
    cell: (info) => (
      <Link
        to="/products/$productId"
        params={{ productId: info.row.original.id }}
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => (
      <Link
        to="/products/$productId"
        params={{ productId: info.row.original.id }}
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
    cell: (info) => (
      <Link to="/brands/$brandId" params={{ brandId: info.getValue().id }}>
        {info.getValue().name}
      </Link>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <Select
        defaultValue={info.getValue()}
        name={`status[${info.row.original.id}]`}
        aria-label={`Status for ${info.row.original.name}`}
        data-size="small"
      >
        <SelectOption value="active">Active</SelectOption>
        <SelectOption value="inactive">Inactive</SelectOption>
        <SelectOption value="hidden">Hidden</SelectOption>
      </Select>
    ),
    sortFn: sortStatusFn,
  }),
]);

export const ProductTable = ({ products }: { products: Array<Product> }) => {
  const [productTableData, _setProductTableData] = useState(products);

  const productTable = useTable(
    {
      features: productTableFeatures,
      columns: productTableColumns,
      data: productTableData,
    },
    (state) => state,
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {productTable.getLeafHeaders().map((header) => (
            <TableHead key={header.id}>
              {header.isPlaceholder ? null : header.column.getCanSort() ? (
                <Button
                  type="button"
                  data-variant="tertiary"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <productTable.FlexRender header={header} />
                  {header.column.getIsSorted() === "asc" && " 🔼"}
                  {header.column.getIsSorted() === "desc" && " 🔽"}
                </Button>
              ) : (
                <productTable.FlexRender header={header} />
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {productTable.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                <productTable.FlexRender cell={cell} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
};
