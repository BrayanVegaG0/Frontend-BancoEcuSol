import React, { useState, useEffect } from 'react';
import { Boton } from '@/components/common/Boton';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Tarjeta } from '@/components/common/Tarjeta';
import { AlertTriangle, Search, CheckCircle, XCircle } from 'lucide-react';
import { cuentaService } from '@/services/cuentaService';
import { transferenciaService, TransferenciaRequest } from '@/services/transferenciaService';
import { Cuenta } from '@/types';

const PaginaTransferencia: React.FC = () => {
  const [cuentas, setCuentas] = useState<Cuenta[]>([]);
  const [cuentaOrigen, setCuentaOrigen] = useState<string>('');
  const [cuentaDestino, setCuentaDestino] = useState<string>('');
  const [nombreDestinatario, setNombreDestinatario] = useState<string>('');
  const [monto, setMonto] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');

  const [isLoading, setIsLoading] = useState(false);
  const [isValidando, setIsValidando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const cargarCuentasPropias = async () => {
      try {
        const data = await cuentaService.getCuentas();
        setCuentas(data);
        if (data.length > 0) {
          setCuentaOrigen(data[0].numeroCuenta);
        }
      } catch (e) {
        setError("No se pudieron cargar sus cuentas. Intente más tarde.");
      }
    };
    cargarCuentasPropias();
  }, []);

  const handleValidarCuenta = async () => {
    if (!cuentaDestino) {
      setError("Ingrese un número de cuenta de destino.");
      return;
    }
    setIsValidando(true);
    setError(null);
    setNombreDestinatario('');
    try {
      const cuentaValidada = await cuentaService.validarCuenta(cuentaDestino);
      setNombreDestinatario(cuentaValidada.tipoCuenta); 
    } catch (err: any) {
      setError(err.message || "No se pudo validar la cuenta de destino.");
    } finally {
      setIsValidando(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!nombreDestinatario) {
        setError("Debe validar la cuenta de destino antes de transferir.");
        setIsLoading(false);
        return;
    }

    const datosTransferencia: TransferenciaRequest = {
      cuentaOrigen: cuentaOrigen,
      cuentaDestino: cuentaDestino,
      monto: parseFloat(monto),
      descripcion: descripcion
    };

    try {
      const respuesta = await transferenciaService.enviar(datosTransferencia);
      setSuccess(`Transferencia ${respuesta.codigoTransaccion} exitosa. Su nuevo saldo es ${respuesta.saldoDisponibleOrigen}`);
      setCuentaDestino('');
      setNombreDestinatario('');
      setMonto('');
      setDescripcion('');
    } catch (err: any) {
      setError(err.message || "No se pudo completar la transferencia.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Transferencia</h1>
      
      {success && (
        <Tarjeta className="mb-6 border-l-4 border-green-500 bg-green-50">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" />
            <p className="text-green-700 font-medium">{success}</p>
          </div>
        </Tarjeta>
      )}

      {error && (
        <Tarjeta className="mb-6 border-l-4 border-red-500 bg-red-50">
          <div className="flex items-center gap-3">
            <XCircle className="text-red-600" />
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        </Tarjeta>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Tarjeta className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Select 
              id="cuenta_origen" 
              label="Seleccione la cuenta que quiere usar"
              value={cuentaOrigen}
              onChange={(e) => setCuentaOrigen(e.target.value)}
              disabled={cuentas.length === 0}
            >
              {cuentas.map(cuenta => (
                <option key={cuenta.cuentaId} value={cuenta.numeroCuenta}>
                  {cuenta.tipoCuenta} - {cuenta.numeroCuenta} (Saldo: ${cuenta.saldoDisponible})
                </option>
              ))}
            </Select>

            <Input 
              id="banco_destino" 
              label="Banco de Destino"
              value="Banco EcuSol (Transferencia Interna)"
              readOnly
              className="bg-gray-100"
            />
            
            <div className="flex items-end gap-3">
              <Input 
                id="cuenta_destino" 
                label="Número de Cuenta de Destinatario"
                placeholder="0123456789"
                value={cuentaDestino}
                onChange={(e) => setCuentaDestino(e.target.value)}
                className="flex-grow"
              />
              <Boton 
                type="button" 
                variante="secundario"
                onClick={handleValidarCuenta}
                icono={<Search size={16} />}
                disabled={isValidando}
              >
                {isValidando ? 'Validando...' : 'Validar'}
              </Boton>
            </div>
            
            {nombreDestinatario && (
              <Input 
                id="nombre_destinatario"
                label="Destinatario Validado"
                value={nombreDestinatario}
                readOnly
                className="bg-gray-100 border-green-500"
              />
            )}
            
            <Input 
              id="monto" 
              label="Monto"
              type="number"
              placeholder="50.00"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              required
            />
            
            <Input 
              id="descripcion" 
              label="Descripción"
              placeholder="Ej: Pago arriendo"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />

            <Boton type="submit" tamano="grande" className="w-full" disabled={isLoading || !nombreDestinatario}>
              {isLoading ? 'Transfiriendo...' : 'Enviar Dinero'}
            </Boton>
          </form>
        </Tarjeta>

        <div className="space-y-6">
          <Tarjeta className="bg-blue-50 border-l-4 border-ecusol-primario">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-ecusol-primario" size={24} />
              <h4 className="font-bold text-lg">Por su seguridad</h4>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nunca comparta su usuario y clave.</li>
              <li>Revise que el nombre del destinatario sea correcto.</li>
            </ul>
          </Tarjeta>
        </div>
      </div>
    </div>
  );
};

export default PaginaTransferencia;