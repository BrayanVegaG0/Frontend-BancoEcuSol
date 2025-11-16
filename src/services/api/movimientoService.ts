import { Movimiento } from "@/types";
// import { API_URL } from "../config";

// Versión REAL (actualmente placeholder)
export const getMovimientosRecientesApi = async (): Promise<Movimiento[]> => {
  console.log("Llamando a API real - getMovimientosRecientes");
  // const respuesta = await fetch(`${API_URL}/movimientos/recientes`, { ... });
  // ...
  await new Promise(resolve => setTimeout(resolve, 500));
  return [];
};