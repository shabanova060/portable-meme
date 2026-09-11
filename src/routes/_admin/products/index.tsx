import { createFileRoute } from "@tanstack/react-router";
import { ProductTable } from "~/components/ProductTable";

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

const BRANDS = {
  soundpulse: {
    id: "7b2e3f41-a189-4d37-8f52-87db39f801a1",
    name: "SoundPulse",
  },
  audiocraft: {
    id: "e4a7c1b2-9d8e-4f33-b671-5c8e23f902b2",
    name: "AudioCraft",
  },
  keystrike: {
    id: "3c9d1a8f-7e2b-45a0-9831-2f0c7a4b03c3",
    name: "KeyStrike",
  },
  luminaView: {
    id: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
    name: "LuminaView",
  },
  sitwell: {
    id: "a1b2c3d4-e5f6-4a5b-8c7d-9e0f1a2b3c4d",
    name: "SitWell",
  },
  aerotech: {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "AeroTech",
  },
  packcraft: {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "PackCraft",
  },
  beanFlow: {
    id: "d9428888-122b-4667-b763-18b14c329e1a",
    name: "BeanFlow",
  },
  purehaven: {
    id: "c83b7f14-3a9d-4e20-9f5b-61e892c4b5d6",
    name: "PureHaven",
  },
};

const productData: Array<Product> = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    sku: "SND-AUR-001",
    name: "Aurora Wireless ANC Headphones",
    brand: BRANDS.soundpulse,
    price: 199.99,
    stock: 45,
    status: "active",
  },
  {
    id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    sku: "SND-VRX-002",
    name: "Vortex Bass Portable Speaker",
    brand: BRANDS.soundpulse,
    price: 79.5,
    stock: 120,
    status: "active",
  },
  {
    id: "2c8d7cae-cc0e-4c3e-8c6e-bc9e0cce5cfe",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    sku: "AUD-MIC-101",
    name: "Studio Pro USB Microphone",
    brand: BRANDS.audiocraft,
    price: 129.0,
    stock: 18,
    status: "active",
  },
  {
    id: "3d9e8dbf-dd1f-4d4f-9d7f-cd0f1ddf6d0f",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    sku: "KEY-ZNT-87K",
    name: "Zenith TKL Mechanical Keyboard",
    brand: BRANDS.keystrike,
    price: 119.95,
    stock: 64,
    status: "active",
  },
  {
    id: "4e0f9ec0-ee20-4e50-ae80-de102ee07e10",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    sku: "MOU-GLD-004",
    name: "Glide Ultra-Light Wireless Mouse",
    brand: BRANDS.keystrike,
    price: 64.99,
    stock: 85,
    status: "active",
  },
  {
    id: "5f10afd1-ff31-4f61-bf91-ef213ff18f21",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    sku: "DSP-OPT-274",
    name: "Optic Pro 27-inch 4K Monitor",
    brand: BRANDS.luminaView,
    price: 349.0,
    stock: 22,
    status: "active",
  },
  {
    id: "6021b0e2-0042-4072-80a2-f03240029032",
    image: "https://images.unsplash.com/photo-1534972195531-a756b1126f24",
    sku: "LGT-BAR-012",
    name: "ScreenBar LED Monitor Light",
    brand: BRANDS.luminaView,
    price: 49.99,
    stock: 0,
    status: "inactive",
  },
  {
    id: "7132c1f3-1153-4183-91b3-01435113a143",
    image: "https://images.unsplash.com/photo-1580481077198-c847ad436177",
    sku: "CHR-ERG-900",
    name: "ErgoMesh Executive Chair",
    brand: BRANDS.sitwell,
    price: 289.0,
    stock: 14,
    status: "active",
  },
  {
    id: "8243d204-2264-4294-a2c4-12546224b254",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c",
    sku: "DSK-MOT-140",
    name: "Rise Electric Standing Desk 140cm",
    brand: BRANDS.sitwell,
    price: 450.0,
    stock: 9,
    status: "active",
  },
  {
    id: "9354e315-3375-43a5-b3d5-23657335c365",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    sku: "WCH-CHR-TIT",
    name: "Chrono Smartwatch Titanium Edition",
    brand: BRANDS.aerotech,
    price: 279.99,
    stock: 31,
    status: "active",
  },
  {
    id: "a465f426-4486-44b6-84e6-34768446d476",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
    sku: "PWR-GAN-100",
    name: "HyperCharge 100W GaN 4-Port Charger",
    brand: BRANDS.aerotech,
    price: 54.99,
    stock: 140,
    status: "active",
  },
  {
    id: "b5760537-5597-45c7-95f7-45879557e587",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    sku: "BAG-VLT-020",
    name: "Vault 20L Weatherproof Commuter Backpack",
    brand: BRANDS.packcraft,
    price: 89.95,
    stock: 50,
    status: "active",
  },
  {
    id: "c6871648-66a8-46d8-a608-5698a668f698",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
    sku: "BAG-SLG-003",
    name: "Sling Mini Everyday Crossbody",
    brand: BRANDS.packcraft,
    price: 34.0,
    stock: 75,
    status: "active",
  },
  {
    id: "d7982759-77b9-47e9-b719-67a9b77907a9",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
    sku: "COF-KET-800",
    name: "Precision Pour Electric Gooseneck Kettle",
    brand: BRANDS.beanFlow,
    price: 95.0,
    stock: 28,
    status: "active",
  },
  {
    id: "e8a9386a-88ca-48fa-882a-78bac88a18ba",
    image: "https://images.unsplash.com/photo-1517668808822-9ebd02ae4a44",
    sku: "COF-GRD-040",
    name: "Aroma conical Burr Grinder",
    brand: BRANDS.beanFlow,
    price: 135.0,
    stock: 12,
    status: "active",
  },
  {
    id: "f9ba497b-99db-490b-993b-89cbd99b29cb",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
    sku: "HOM-AIR-300",
    name: "Breeze True HEPA Air Purifier",
    brand: BRANDS.purehaven,
    price: 159.0,
    stock: 37,
    status: "active",
  },
  {
    id: "0acb5a8c-aaec-4a1c-aa4c-9aceeaac3adc",
    image: "https://images.unsplash.com/photo-1614036417651-efe5912149d8",
    sku: "HOM-HUM-002",
    name: "Mist Ultrasonic Room Humidifier",
    brand: BRANDS.purehaven,
    price: 42.5,
    stock: 0,
    status: "inactive",
  },
  {
    id: "1bdc6b9d-bbfd-4b2d-bb5d-abdfbbbd4bed",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    sku: "LGT-TAB-010",
    name: "Lumos Smart Ambient Table Lamp",
    brand: BRANDS.luminaView,
    price: 58.0,
    stock: 42,
    status: "active",
  },
  {
    id: "2ced7cae-cc0e-4c3e-8c6e-bce0ccce5cfe",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
    sku: "WCH-FIT-001",
    name: "PulseFit Fitness Tracker Band",
    brand: BRANDS.aerotech,
    price: 39.99,
    stock: 110,
    status: "active",
  },
  {
    id: "3dfe8dbf-dd1f-4d4f-9d7f-cdf1dddf6d0f",
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6",
    sku: "ACC-MAG-31",
    name: "MagStand 3-in-1 Wireless Dock",
    brand: BRANDS.aerotech,
    price: 69.99,
    stock: 58,
    status: "active",
  },
  {
    id: "4e0f9ec0-ee20-4e50-ae80-de02eeee7e10",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    sku: "SND-EAR-009",
    name: "Drift Low-Latency Gaming Earbuds",
    brand: BRANDS.soundpulse,
    price: 49.0,
    stock: 62,
    status: "active",
  },
  {
    id: "5f10afd1-ff31-4f61-bf91-ef13ffff8f21",
    image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2",
    sku: "ACC-MAT-LEA",
    name: "Apex Vegan Leather Desk Mat",
    brand: BRANDS.keystrike,
    price: 29.99,
    stock: 95,
    status: "active",
  },
  {
    id: "6021b0e2-0042-4072-80a2-f02400009032",
    image: "https://images.unsplash.com/photo-1587826227412-fbf7960ea575",
    sku: "CAM-ORB-4K",
    name: "Orbit Ultra 4K Conference Webcam",
    brand: BRANDS.luminaView,
    price: 149.0,
    stock: 19,
    status: "active",
  },
  {
    id: "7132c1f3-1153-4183-91b3-01351111a143",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    sku: "COF-MUG-050",
    name: "Nomad Insulated Tumbler 500ml",
    brand: BRANDS.beanFlow,
    price: 24.5,
    stock: 135,
    status: "active",
  },
  {
    id: "8243d204-2264-4294-a2c4-12462222b254",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    sku: "KEY-STL-PRT",
    name: "Stealth Silent Mechanical Board (Beta)",
    brand: BRANDS.keystrike,
    price: 159.0,
    stock: 5,
    status: "hidden",
  },
];

export const Route = createFileRoute("/_admin/products/")({
  component: (): React.JSX.Element => (
    <main>
      <h1 className="Heading" data-size="1">
        Products
      </h1>
      <section className="Material" data-size="base">
        <ProductTable products={productData} />
      </section>
    </main>
  ),
});
