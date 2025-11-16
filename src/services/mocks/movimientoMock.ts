import { Movimiento } from "@/types";

export const mockMovimientos: Movimiento[] = [
  {
    id: "mov_01",
    fecha: "25/11/2025",
    descripcion: "Supermercados TodoHogar",
    monto: -20.00,
    categoria: "Alimentación"
  },
  {
    id: "mov_02",
    fecha: "25/11/2025",
    descripcion: "Medicina S.A.",
    monto: -40.00,
    categoria: "Salud"
  },
  {
    id: "mov_03",
    fecha: "24/11/2025",
    descripcion: "Roberto Derecha",
    monto: 40.00,
    categoria: "Transferencia recibida"
  },
    {
    id: "mov_04",
    fecha: "23/11/2025",
    descripcion: "Roberto Derecha",
    monto: 300.00,
    categoria: "Transferencia recibida"
  }
];

export const getMovimientosRecientesMock = async (): Promise<Movimiento[]> => {
  console.log("Llamando a MOCK - getMovimientosRecientes");
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockMovimientos;
};