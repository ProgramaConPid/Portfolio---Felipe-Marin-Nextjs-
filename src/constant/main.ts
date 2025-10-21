interface Product {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  marca: string;
  descripcion: string;
}

const products: Product[] = [
  {
    id: 1,
    nombre: "Laptop Lenovo IdeaPad 5",
    categoria: "Computadores",
    precio: 3200,
    stock: 15,
    marca: "Lenovo",
    descripcion: "Laptop con procesador AMD Ryzen 5, 16GB RAM y SSD de 512GB."
  },
  {
    id: 2,
    nombre: "iPhone 15 Pro",
    categoria: "Smartphones",
    precio: 5600,
    stock: 8,
    marca: "Apple",
    descripcion: "Teléfono con chip A17 Pro, pantalla OLED y cámara de 48MP."
  },
  {
    id: 3,
    nombre: "Samsung Galaxy Tab S9",
    categoria: "Tablets",
    precio: 2800,
    stock: 12,
    marca: "Samsung",
    descripcion: "Tablet AMOLED de 11 pulgadas con 8GB de RAM y S-Pen incluido."
  },
  {
    id: 4,
    nombre: "Auriculares Sony WH-1000XM5",
    categoria: "Audio",
    precio: 1600,
    stock: 20,
    marca: "Sony",
    descripcion: "Auriculares inalámbricos con cancelación de ruido activa."
  },
  {
    id: 5,
    nombre: "Smartwatch Garmin Venu 3",
    categoria: "Wearables",
    precio: 1100,
    stock: 10,
    marca: "Garmin",
    descripcion: "Reloj inteligente con monitoreo de salud y GPS integrado."
  },
  {
    id: 6,
    nombre: "Monitor LG UltraGear 27”",
    categoria: "Periféricos",
    precio: 1450,
    stock: 9,
    marca: "LG",
    descripcion: "Monitor gaming QHD 165Hz con tiempo de respuesta de 1ms."
  },
  {
    id: 7,
    nombre: "Teclado Mecánico Logitech G Pro X",
    categoria: "Accesorios",
    precio: 650,
    stock: 25,
    marca: "Logitech",
    descripcion: "Teclado mecánico intercambiable con switches GX Blue."
  },
  {
    id: 8,
    nombre: "Disco SSD Samsung 970 EVO Plus 1TB",
    categoria: "Almacenamiento",
    precio: 700,
    stock: 30,
    marca: "Samsung",
    descripcion: "SSD NVMe de alta velocidad con lectura hasta 3500 MB/s."
  },
  {
    id: 9,
    nombre: "Router TP-Link Archer AX6000",
    categoria: "Redes",
    precio: 950,
    stock: 18,
    marca: "TP-Link",
    descripcion: "Router Wi-Fi 6 con 8 antenas y velocidad combinada de 6Gbps."
  },
  {
    id: 10,
    nombre: "Cámara GoPro Hero 12 Black",
    categoria: "Cámaras",
    precio: 1800,
    stock: 7,
    marca: "GoPro",
    descripcion: "Cámara de acción 5.3K con estabilización avanzada y resistencia al agua."
  }
];

export default products;
