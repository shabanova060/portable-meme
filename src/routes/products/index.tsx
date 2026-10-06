import { createFileRoute } from "@tanstack/react-router";
import { ProductTable } from "~/components/ProductTable";

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

export const productsData: Product[] = [
  {
    id: "01925b60-84a1-7d12-9c3f-846114b3d7a1",
    sku: "KB-MECH-PRO-01",
    name: "Apex Pro TKL Mechanical Keyboard",
    brand: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a2",
      name: "Apex Peripherals",
    },
    category: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a3",
      name: "Computer Accessories",
    },
    stock: 45,
    price: {
      amount: 179.99,
      currency: "USD",
    },
    status: "active",
  },
  {
    id: "01925b60-a2b3-7e45-812d-a31bf9412e8c",
    sku: "AUD-NC-HD700",
    name: "Aura Silence ANC Wireless Headphones",
    brand: {
      id: "01925b60-a2b3-7e45-812d-a31bf9412e8d",
      name: "Auralis Audio",
    },
    category: {
      id: "01925b60-a2b3-7e45-812d-a31bf9412e8e",
      name: "Audio & Headphones",
    },
    stock: 18,
    price: {
      amount: 299.5,
      currency: "USD",
    },
    status: "active",
  },
  {
    id: "01925b60-c3d5-7f56-be11-9f20c15647a9",
    sku: "MON-4K-CRV34",
    name: "UltraView 34-Inch Curved OLED Monitor",
    brand: {
      id: "01925b60-c3d5-7f56-be11-9f20c15647aa",
      name: "ViewMax",
    },
    category: {
      id: "01925b60-c3d5-7f56-be11-9f20c15647ab",
      name: "Displays & Monitors",
    },
    stock: 0,
    price: {
      amount: 849.0,
      currency: "USD",
    },
    status: "inactive",
  },
  {
    id: "01925b60-e4f7-7a23-895c-7d9e48231012",
    sku: "CH-ERG-MESH-GR",
    name: "Vantage Ergonomic Mesh Task Chair",
    brand: {
      id: "01925b60-e4f7-7a23-895c-7d9e48231013",
      name: "Zenith Workspace",
    },
    category: {
      id: "01925b60-e4f7-7a23-895c-7d9e48231014",
      name: "Office Furniture",
    },
    stock: 12,
    price: {
      amount: 420.0,
      currency: "USD",
    },
    status: "hidden",
  },
  {
    id: "01925b61-0518-7b34-934d-16a7f80459c3",
    sku: "HUB-TB4-12P",
    name: "Streamline 12-in-1 Thunderbolt 4 Dock",
    brand: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a2",
      name: "Apex Peripherals",
    },
    category: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a3",
      name: "Computer Accessories",
    },
    stock: 62,
    price: {
      amount: 229.95,
      currency: "USD",
    },
    status: "active",
  },
  {
    id: "01925b62-1a4f-7e89-8d14-3a7c6f012b45",
    sku: "MS-WL-ERG-02",
    name: "Precision Glide Wireless Vertical Mouse",
    brand: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a2",
      name: "Apex Peripherals",
    },
    category: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a3",
      name: "Computer Accessories",
    },
    stock: 85,
    price: {
      amount: 89.99,
      currency: "USD",
    },
    status: "active",
  },
  {
    id: "01925b62-3c81-7f9a-9e25-4b8d7a123c56",
    sku: "DSK-ST-ELEC-BK",
    name: "Elevate Pro Dual-Motor Standing Desk (60x30)",
    brand: {
      id: "01925b60-e4f7-7a23-895c-7d9e48231013",
      name: "Zenith Workspace",
    },
    category: {
      id: "01925b60-e4f7-7a23-895c-7d9e48231014",
      name: "Office Furniture",
    },
    stock: 14,
    price: {
      amount: 649.0,
      currency: "USD",
    },
    status: "active",
  },
  {
    id: "01925b62-5e92-7aab-af36-5c9e8b234d67",
    sku: "MIC-USB-COND-X",
    name: "VoiceCraft Studio Condenser Microphone",
    brand: {
      id: "01925b60-a2b3-7e45-812d-a31bf9412e8d",
      name: "Auralis Audio",
    },
    category: {
      id: "01925b60-a2b3-7e45-812d-a31bf9412e8e",
      name: "Audio & Headphones",
    },
    stock: 37,
    price: {
      amount: 149.5,
      currency: "USD",
    },
    status: "active",
  },
  {
    id: "01925b62-7f03-7bcc-b047-6daf9c345e78",
    sku: "LGT-MON-BAR-RGB",
    name: "Lumina ScreenBar Pro Monitor Light",
    brand: {
      id: "01925b62-7f03-7bcc-b047-6daf9c345e79",
      name: "Lumina Illumination",
    },
    category: {
      id: "01925b60-84a1-7d12-9c3f-846114b3d7a3",
      name: "Computer Accessories",
    },
    stock: 0,
    price: {
      amount: 65.0,
      currency: "USD",
    },
    status: "inactive",
  },
  {
    id: "01925b62-9a14-7cdd-c158-7eb0ad456f89",
    sku: "ARM-DSK-DUAL-GAS",
    name: "Horizon Dual Gas-Spring Monitor Arm",
    brand: {
      id: "01925b60-c3d5-7f56-be11-9f20c15647aa",
      name: "ViewMax",
    },
    category: {
      id: "01925b60-c3d5-7f56-be11-9f20c15647ab",
      name: "Displays & Monitors",
    },
    stock: 22,
    price: {
      amount: 119.99,
      currency: "USD",
    },
    status: "hidden",
  },
];

export const Route = createFileRoute("/products/")({
  component: () => (
    <>
      <h1 className="text-heading-40">Products</h1>
      <section className="material-base">
        <ProductTable products={productsData} />
      </section>
    </>
  ),
});
