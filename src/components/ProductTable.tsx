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
import { Input } from "~/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";
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
    cell: ({ row, getValue }) => (
      <Link to="/products/$productId" params={{ productId: row.original.id }}>
        {getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: ({ row, getValue }) => (
      <Link to="/products/$productId" params={{ productId: row.original.id }}>
        {getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
    cell: ({ getValue }) => (
      <Link to="/brands/$brandId" params={{ brandId: getValue().id }}>
        {getValue().name}
      </Link>
    ),
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: ({ getValue }) => (
      <Link to="/categories/$categoryId" params={{ categoryId: getValue().id }}>
        {getValue().name}
      </Link>
    ),
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
    cell: ({ row, getValue }) => (
      <Input
        className="w-18 px-2 text-center"
        value={getValue()}
        aria-label={`Stock for ${row.original.name}`}
      />
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: ({ row, getValue }) => (
      <div className="flex items-center gap-1.5">
        <Input
          className="w-18 px-2 text-center"
          value={getValue().amount}
          aria-label={`Price for ${row.original.name}`}
        />
        <span>{getValue().currency}</span>
      </div>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ getValue }) => (
      <Select defaultValue={getValue()}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder={getValue()} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {[
              { label: "Active", value: "active" },
              { label: "Hidden", value: "hidden" },
              { label: "Inactive", value: "inactive" },
            ].map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    ),
  }),
]);

export function ProductTable(props: ProductTableProps) {
  const { products } = props;

  const table = useTable({
    features: productTableFeatures,
    columns: productTableColumns,
    data: products,
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {table.getLeafHeaders().map((header) => (
            <TableHead key={header.id}>
              {header.isPlaceholder ? null : (
                <table.FlexRender header={header} />
              )}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                <table.FlexRender cell={cell} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
