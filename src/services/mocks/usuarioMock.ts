import { Usuario } from "@/types";

export const mockUsuario: Usuario = {
  id: "user_01",
  nombres: "Ana María Paredes",
  email: "ana.maria@correo.com"
};

export const loginMock = async (usuario: string, contrasena: string): Promise<Usuario> => {
  console.log("Llamando a MOCK - login");
  await new Promise(resolve => setTimeout(resolve, 300));
  if (usuario === "usuario" && contrasena === "1234") {
    return mockUsuario;
  }
  throw new Error("Credenciales mockeadas incorrectas");
};

export const registrarMock = async (usuario: string, contrasena: string, nombres: string): Promise<Usuario> => {
  console.log("Llamando a MOCK - registrar");
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    id: "user_02",
    nombres: nombres,
    email: `${usuario}@correo.com`
  };
};