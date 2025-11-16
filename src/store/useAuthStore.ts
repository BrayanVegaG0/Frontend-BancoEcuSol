import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Usuario } from '@/types';
import { authService } from '@/services/authService';

interface AuthState {
  isAutenticado: boolean;
  usuario: Usuario | null;
  token: string | null;
  login: (usuario: string, contrasena: string) => Promise<void>;
  logout: () => void;
  registrar: (usuario: string, contrasena: string, nombres: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAutenticado: false,
      usuario: null,
      token: null,

      login: async (username, password) => {
        try {
          const usuarioLogueado = await authService.login(username, password);
          // En un login real, la API devolvería un token
          const tokenSimulado = 'jwt-token-simulado-12345';
          
          set({ 
            isAutenticado: true, 
            usuario: usuarioLogueado, 
            token: tokenSimulado 
          });
        } catch (error) {
          console.error("Error en login store:", error);
          throw error;
        }
      },

      logout: () => {
        set({ isAutenticado: false, usuario: null, token: null });
      },

      registrar: async (username, password, nombres) => {
        try {
          // En un registro real, pasaríamos todos los datos del formulario
          const usuarioRegistrado = await authService.registrar(username, password, nombres);
          const tokenSimulado = 'jwt-token-simulado-54321';
          
          set({
            isAutenticado: true,
            usuario: usuarioRegistrado,
            token: tokenSimulado
          });
        } catch (error) {
           console.error("Error en registro store:", error);
           throw error;
        }
      },
    }),
    {
      name: 'ecusol-auth-storage', // nombre para localStorage
    }
  )
);