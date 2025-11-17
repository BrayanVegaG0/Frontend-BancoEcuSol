import React, { useEffect, useState } from 'react';
import { ResumenCuenta } from '@/components/dashboard/ResumenCuenta';
import { cuentaService } from '@/services/cuentaService';
import { Cuenta } from '@/types';
import { Tarjeta } from '@/components/common/Tarjeta';

const PaginaCuentas: React.FC = () => {
  const [cuentas, setCuentas] = useState<Cuenta[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarCuentas = async () => {
      try {
        setIsLoading(true);
        const cuentasData = await cuentaService.getCuentas();
        setCuentas(cuentasData);
        setError(null);
      } catch (err: any) {
        setError(err.message || "No se pudo cargar la información de las cuentas.");
      } finally {
        setIsLoading(false);
      }
    };
    cargarCuentas();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Mis Cuentas</h1>
      
      {isLoading && <p>Cargando cuentas...</p>}
      
      {error && <Tarjeta className="border-red-500 border-l-4"><p className="text-red-600">{error}</p></Tarjeta>}
      
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuentas.map((cuenta) => (
            <ResumenCuenta key={cuenta.cuentaId} cuenta={cuenta} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginaCuentas;