import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authService } from '@/services/authService';
import { UsuarioAutenticado } from '@/types';

interface AuthState {
  isAutenticado: boolean;
  usuario: UsuarioAutenticado | null;
  login: (usuario: string, contrasena: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAutenticado: false,
      usuario: null,

      login: async (username, password) => {
        const usuarioLogueado = await authService.login(username, password);
        set({ 
          isAutenticado: true, 
          usuario: usuarioLogueado
        });
      },

      logout: () => {
        set({ isAutenticado: false, usuario: null });
      },
    }),
    {
      name: 'ecusol-auth-storage',
    }
  )
);