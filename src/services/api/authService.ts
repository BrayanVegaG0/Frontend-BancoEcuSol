//import { API_URL } from "../config";
import { Usuario } from "@/types";

// Versión REAL (actualmente placeholder)
export const loginApi = async (usuario: string, contrasena: string): Promise<Usuario> => {
  console.log("Llamando a API real - login");
  // const respuesta = await fetch(`${API_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ usuario, contrasena }),
  // });
  // if (!respuesta.ok) throw new Error("Error en login");
  // return await respuesta.json();
  
  // Simulación de error (comentada)
  // throw new Error("API Login Fallido");
  
  // Simulación de éxito
  await new Promise(resolve => setTimeout(resolve, 500));
  return { id: "1", nombres: "Ana María Paredes", email: "ana.maria@correo.com" }; 
};

export const registrarApi = async (datos: any): Promise<Usuario> => {
  console.log("Llamando a API real - registro");
  // const respuesta = await fetch(`${API_URL}/auth/register`, { ... });
  // ...
  await new Promise(resolve => setTimeout(resolve, 500));
  return { id: "2", nombres: datos.nombres, email: datos.email };
};