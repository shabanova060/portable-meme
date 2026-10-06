import { Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  createSortedRowModel,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";

type Product = {
  id: string;
  sku: string;
  name: string;
  brand: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
  stock: number;
  price: {
    amount: number;
    currency: "USD";
  };
  status: "active" | "hidden" | "inactive";
};

export interface ProductTableProps {
  products: Product[];
}

export const productTableFeatures = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
});

const columnHelper = createColumnHelper<typeof productTableFeatures, Product>();

export const productTableColumns = columnHelper.columns([
  columnHelper.accessor("sku", {
    header: "SKU",
    cell: (row) => {
      <Link to="">{row.getValue()}</Link>;
    },
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
  }),
  columnHelper.accessor("category", {
    header: "Category",
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
  }),
  columnHelper.accessor("price", {
    header: "Price",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
]);

export function ProductTable(props: ProductTableProps) {
  const { products } = props;

  const table = useTable({
    features: productTableFeatures,
    columns: productTableColumns,
    data: products,
  });

  return <Table></Table>;
}
