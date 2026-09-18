import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Mechanical Keyboard",
    sku: "KB-902",
    category: "Peripherals",
    stock: 24,
    price: 129.99,
  },
  {
    id: "2",
    name: "Ergonomic Desk Mat",
    sku: "DM-114",
    category: "Accessories",
    stock: 85,
    price: 29.5,
  },
  {
    id: "3",
    name: 'Ultra-Wide 34" Monitor',
    sku: "MN-430",
    category: "Displays",
    stock: 7,
    price: 499.0,
  },
  {
    id: "4",
    name: "Noise-Cancelling Headphones",
    sku: "HP-771",
    category: "Audio",
    stock: 15,
    price: 199.95,
  },
];

export const ProductTable = () => {
  const totalValue = PRODUCTS.reduce(
    (sum, item) => sum + item.price * item.stock,
    0,
  );

  return (
    <Table aria-label="Product Inventory">
      <TableCaption>Current warehouse inventory and stock levels</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead scope="col">Product Name</TableHead>
          <TableHead scope="col">SKU</TableHead>
          <TableHead scope="col">Category</TableHead>
          <TableHead scope="col">Stock</TableHead>
          <TableHead scope="col">Price</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {PRODUCTS.map((product) => (
          <TableRow key={product.id}>
            <TableCell style={{ fontWeight: 500 }}>{product.name}</TableCell>
            <TableCell>{product.sku}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} style={{ fontWeight: 600 }}>
            Total Inventory Value
          </TableCell>
          <TableCell style={{ textAlign: "right", fontWeight: 600 }}>
            $
            {totalValue.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
