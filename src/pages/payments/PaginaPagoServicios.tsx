import { Boton } from '@/components/common/Boton';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Tarjeta } from '@/components/common/Tarjeta';
import { AlertTriangle } from 'lucide-react';


const PaginaPagoServicios = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Pago de Servicios</h1>
      <p className="text-gray-600 mb-8">Tus pagos más seguros aquí.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formulario Principal */}
        <Tarjeta className="md:col-span-2">
          <form className="space-y-6">
            <Select id="empresa" label="Seleccione a la empresa que quiere pagar">
              <option value="">Selecciona una...</option>
              <option value="luz">Empresa Eléctrica</option>
              <option value="agua">Agua Potable</option>
              <option value="internet">Internet</option>
            </Select>
            
            <Input 
              id="cedula" 
              label="Ingrese su número de cédula"
              placeholder="1712345678"
            />
            
            <Input 
              id="codigo_verificacion" 
              label="Ingrese código de verificación"
              placeholder="123456"
            />
            
            <Input 
              id="ruc" 
              label="RUC"
              placeholder="Opcional"
            />
            
             <Input 
              id="id_estudiante" 
              label="ID Estudiante"
              placeholder="Opcional"
            />

            <Input 
              id="monto" 
              label="Monto"
              type="number"
              placeholder="25.00"
            />
            
            <Input 
              id="descripcion" 
              label="Descripción"
              placeholder="Ej: Pago luz mes de Noviembre"
            />

            <Boton type="submit" tamano="grande" className="w-full">
              Pagar Servicio
            </Boton>
          </form>
        </Tarjeta>

        {/* Panel de Seguridad */}
        <div className="space-y-6">
          <Tarjeta className="bg-blue-50 border-l-4 border-ecusol-azul">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-ecusol-azul" size={24} />
              <h4 className="font-bold text-lg">Por su seguridad</h4>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nunca comparta su usuario y clave.</li>
              <li>Confío en Ecuasol para que maneje mi dinero.</li>
            </ul>
          </Tarjeta>
        </div>
      </div>
    </div>
  );
};

export default PaginaPagoServicios;