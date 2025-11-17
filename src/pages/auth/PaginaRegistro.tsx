import { Boton } from '@/components/common/Boton';
import { Input } from '@/components/common/Input';
import { LogoEcuSol } from '@/components/common/LogoEcuSol';
import { Select } from '@/components/common/Select';
import { Tarjeta } from '@/components/common/Tarjeta';
import useAuth from '@/hooks/useAuth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaginaRegistro = () => {
  const navigate = useNavigate();
  const { registrar } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await registrar("nuevoUsuario", "password123", "Nuevo Usuario");
      navigate('/app/dashboard');
    } catch (err) {
      setError('No se pudo completar el registro.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] py-12">
      <Tarjeta className="w-full max-w-2xl">
        <LogoEcuSol 
          size={90} 
          className="block mx-auto mb-6 border-2 border-ecusol-secundario" 
        />        <h2 className="text-2xl font-bold text-center mb-2">Crear tu cuenta</h2>
        <p className="text-center text-gray-600 mb-8">Ingresa tus credenciales para poderte crear una Cuenta con Nosotros</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input id="nombres" label="Nombres" placeholder="Ingresa tus nombres" required />
            <Input id="apellidos" label="Apellidos" placeholder="Ingresa tus apellidos" required />
            <Input id="usuario" label="Nombre de usuario" placeholder="Ingresa tu nombre de usuario" required />
            <Input id="email" label="Correo electrónico" type="email" placeholder="ejemplo@correo.com" required />
            <Input id="telefono" label="Número de teléfono" type="tel" placeholder="0991234567" required />
            
            <Select id="pregunta_seguridad" label="Selecciona pregunta de seguridad" required>
              <option value="">Selecciona una...</option>
              <option value="1">¿Nombre de tu primera mascota?</option>
              <option value="2">¿Ciudad de nacimiento?</option>
            </Select>

            <Input id="respuesta_seguridad" label="Respuesta de seguridad" placeholder="Ingresa tu respuesta" required />
            
            <Input id="contrasena" label="Crear tu contraseña" type="password" placeholder="Ingresa tu contraseña" required />
            <Input id="confirmar_contrasena" label="Confirma tu contraseña" type="password" placeholder="Confirma tu contraseña" required />
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <Boton type="submit" className="w-full" tamano="grande">
            Crear Cuenta
          </Boton>
        </form>
        
        <div className="text-center mt-6 text-sm">
          <span className="text-gray-600">¿Ya tienes una cuenta? </span>
          <Link to="/login" className="text-ecusol-azul hover:underline font-medium">
            Iniciar Sesión
          </Link>
        </div>
      </Tarjeta>
    </div>
  );
};

export default PaginaRegistro;