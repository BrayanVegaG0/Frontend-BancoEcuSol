import React, { useEffect, useState } from 'react';
import { ResumenCuenta } from '@/components/dashboard/ResumenCuenta';
import { cuentaService } from '@/services/cuentaService';
import { Cuenta } from '@/types';

const PaginaCuentas: React.FC = () => {
  const [cuentas, setCuentas] = useState<Cuenta[]>([]);

  useEffect(() => {
    const cargarCuentas = async () => {
      const cuentasData = await cuentaService.getCuentas();
      setCuentas(cuentasData);
    };
    cargarCuentas();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Mis Cuentas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cuentas.map((cuenta) => (
          <ResumenCuenta key={cuenta.id} cuenta={cuenta} />
        ))}
      </div>
    </div>
  );
};

export default PaginaCuentas;