import React, { useState } from 'react'; // Importamos useState
import { Boton } from '@/components/common/Boton';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Tarjeta } from '@/components/common/Tarjeta';
import { AlertTriangle, Search } from 'lucide-react';

const PaginaTransferencia: React.FC = () => {
  // 1. Estado para guardar el nombre del destinatario validado
  const [nombreDestinatario, setNombreDestinatario] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // 2. Función simulada para validar la cuenta
  const handleValidarCuenta = async () => {
    setLoading(true);
    // En un futuro, aquí se llamaría al BFF:
    // const data = await bff.post('/api/validar-cuenta', { numero: numeroDeCuenta });
    // setNombreDestinatario(data.nombreCompleto);
    
    // Simulación
    await new Promise(resolve => setTimeout(resolve, 750)); 
    setNombreDestinatario('Juan Roberto Perez Alcivar'); // Nombre de ejemplo
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Transferencia</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulario Principal */}
        <Tarjeta className="md:col-span-2">
          <form className="space-y-6">
            <Select id="cuenta_origen" label="Seleccione la cuenta que quiere usar">
              <option value="ahorros">Cuenta de Ahorros ($ 2,540.00)</option>
              <option value="corriente">Cuenta Corriente ($ 1,200.00)</option>
            </Select>

            <Input 
              id="banco_destino" 
              label="Especifique el banco al cual quiere realizar la transferencia"
              placeholder="Ej: Banco Pichincha"
            />
            
            {/* --- SECCIÓN DE VALIDACIÓN --- */}
            <div className="flex items-end gap-3">
              <Input 
                id="cuenta_destino" 
                label="Número de Cuenta de Destinatario"
                placeholder="0123456789"
                className="flex-grow"
              />
              <Boton 
                type="button" 
                variante="secundario"
                onClick={handleValidarCuenta}
                icono={<Search size={16} />}
                disabled={loading}
              >
                {loading ? 'Validando...' : 'Validar'}
              </Boton>
            </div>
            
            {/* 3. Campo de solo lectura para el nombre validado */}
            {nombreDestinatario && (
              <Input 
                id="nombre_destinatario"
                label="Destinatario"
                value={nombreDestinatario}
                readOnly
                className="bg-gray-100"
              />
            )}
            {/* --- FIN SECCIÓN --- */}
            
            <Input 
              id="cedula_destino" 
              label="Cédula de destinatario"
              placeholder="1712345678"
            />

            <Input 
              id="monto" 
              label="Monto (Adicional)"
              type="number"
              placeholder="50.00"
            />
            
            <Input 
              id="descripcion" 
              label="Descripción"
              placeholder="Ej: Pago arriendo"
            />

            {/* 4. CAMPO DE CÓDIGO ELIMINADO */}

            <Boton type="submit" tamano="grande" className="w-full">
              Enviar Dinero
            </Boton>
          </form>
        </Tarjeta>

        {/* Panel de Seguridad */}
        <div className="space-y-6">
          <Tarjeta className="bg-blue-50 border-l-4 border-ecusol-primario">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-ecusol-primario" size={24} />
              <h4 className="font-bold text-lg">Por su seguridad</h4>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nunca comparta su usuario y clave con desconocidos.</li>
              <li>Revise bien la transferencia.</li>
            </ul>
          </Tarjeta>
        </div>
      </div>
    </div>
  );
};

export default PaginaTransferencia;