import React from 'react';
// Importa la imagen del logo desde la carpeta de assets
import logoEcuSol from '@/assets/logo.jpg'; 
interface LogoEcuSolProps {
  className?: string;
  width?: number;
}

// Este componente ahora renderiza la imagen del logo
export const LogoEcuSol: React.FC<LogoEcuSolProps> = ({ className = '', width = 150 }) => {
  return (
    <img 
      src={logoEcuSol} 
      alt="Logo Banco EcuSol" 
      className={className}
      style={{ width: `${width}px` }} 
    />
  );
};