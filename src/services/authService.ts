import { MODO_BACKEND, API_URL } from "./config";
import { UsuarioAutenticado } from "@/types";

const loginApi = async (usuario: string, clave: string): Promise<UsuarioAutenticado> => {
  const respuesta = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      nombreUsuario: usuario, 
      password: clave 
    }),
    credentials: 'include'
  });

  if (!respuesta.ok) {
    const errorData = await respuesta.json().catch(() => ({}));
    throw new Error(errorData.message || "Credenciales inválidas");
  }
  
  return await respuesta.json(); 
};

const loginMock = async (usuario: string, clave: string): Promise<UsuarioAutenticado> => {
  if (usuario === "usuario" && clave === "1234") {
    return {
      usuarioWebId: 1,
      clienteId: 12,
      nombreUsuario: "usuario_mock",
      emailContacto: "mock@mail.com",
      ultimoAcceso: new Date().toISOString()
    };
  }
  throw new Error("Credenciales mockeadas incorrectas");
};

export const authService = {
  login: MODO_BACKEND ? loginApi : loginMock,
};