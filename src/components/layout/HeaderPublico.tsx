import React from 'react'; // Necesario para React.FC
import { LogoEcuSol } from '@/components/common/LogoEcuSol';
import { NavLink, useNavigate } from 'react-router-dom';
import { Boton } from '../common/Boton';

const enlacesPublicos = [
  { nombre: 'Principal', ruta: '/' },
  { nombre: 'Créditos', ruta: '/simular-credito' },
  { nombre: 'Acerca de', ruta: '/acerca-de' },
  { nombre: 'Ayuda', ruta: '/ayuda' },
];

export const HeaderPublico = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <LogoEcuSol className="text-3xl" />
        <div className="hidden md:flex items-center space-x-6">
          {enlacesPublicos.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              className={({ isActive }) =>
                `font-medium text-gray-600 hover:text-ecusol-azul ${isActive ? 'text-ecusol-azul' : ''}`
              }
            >
              {enlace.nombre}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <Boton onClick={() => navigate('/login')} variante="secundario" tamano="mediano">
            Log in
          </Boton>
          <Boton onClick={() => navigate('/registro')} variante="primario" tamano="mediano">
            Sign Up
          </Boton>
        </div>
      </nav>
    </header>
  );
};