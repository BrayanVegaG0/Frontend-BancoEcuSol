import { Boton } from '@/components/common/Boton';
import { Input } from '@/components/common/Input';
import { LogoEcuSol } from '@/components/common/LogoEcuSol';
import { Tarjeta } from '@/components/common/Tarjeta';
import useAuth from '@/hooks/useAuth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaginaLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(usuario, contrasena);
      navigate('/app/dashboard');
    } catch (err) {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] py-12">
      <Tarjeta className="w-full max-w-md">
      <LogoEcuSol 
          size={90} 
          className="block mx-auto mb-6 border-2 border-ecusol-secundario" 
        />        <h2 className="text-2xl font-bold text-center mb-2">Bienvenido a tu Banco</h2>        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            id="usuario"
            label="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingresa tu Usuario"
            required
          />
          <Input
            id="contrasena"
            label="Contraseña"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
          
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <Boton type="submit" className="w-full" tamano="grande">
            Ingresar
          </Boton>
        </form>
        
        <div className="text-center mt-6 text-sm text-ecusol-azul space-y-2">
          <Link to="/registro" className="block hover:underline">Regístrarse</Link>
          {/*<Link to="#" className="block hover:underline">¿Olvidaste tu Usuario?</Link>
          <Link to="#" className="block hover:underline">¿Olvidaste tu Contraseña?</Link>*/}
        </div>
      </Tarjeta>
    </div>
  );
};

export default PaginaLogin;