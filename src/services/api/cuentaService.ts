import { Cuenta } from "@/types";
// import { API_URL } from "../config";

// Versión REAL (actualmente placeholder)
export const getCuentasApi = async (): Promise<Cuenta[]> => {
  console.log("Llamando a API real - getCuentas");
  // const respuesta = await fetch(`${API_URL}/cuentas`, {
  //   headers: { 'Authorization': `Bearer ${token}` }
  // });
  // ...
  await new Promise(resolve => setTimeout(resolve, 500));
  return []; // Devolver vacío para diferenciar del mock
};