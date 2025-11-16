import { Boton } from '@/components/common/Boton';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Tarjeta } from '@/components/common/Tarjeta';
const PaginaSimulacionCredito = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Simulación de Créditos</h1>
      <p className="text-gray-600 mb-8">Por favor siga este pequeño simulador y póngase en contacto con Nosotros.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario de Simulación */}
        <Tarjeta>
          <form className="space-y-6">
            <Select id="tipo_prestamo" label="Tipo de Préstamo">
              <option value="">Seleccione...</option>
              <option value="consumo">Consumo</option>
              <option value="vivienda">Vivienda</option>
              <option value="vehiculo">Vehículo</option>
            </Select>

            <Select id="tipo_interes" label="Tipo de cobro de interés">
              <option value="">Seleccione...</option>
              <option value="fijo">Fijo</option>
              <option value="variable">Variable</option>
            </Select>
            
            <Input 
              id="plazo" 
              label="Plazo (en meses)"
              type="number"
              placeholder="24"
            />
            
            <Input 
              id="cedula" 
              label="Número de Cédula"
              placeholder="1712345678"
            />

            <Input 
              id="monto" 
              label="Monto"
              type="number"
              placeholder="5000.00"
            />
            
            <Input 
              id="descripcion" 
              label="Descripción"
              placeholder="Ej: Compra de vehículo"
            />

            <Boton type="submit" tamano="grande" className="w-full">
              Simular Crédito
            </Boton>
          </form>
        </Tarjeta>

        {/* Tabla de Amortización (Placeholder) */}
        <Tarjeta>
          <h3 className="font-semibold text-lg mb-4">Tabla de Amortización (Ejemplo)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 px-6">Mes</th>
                  <th scope="col" className="py-3 px-6">Capital</th>
                  <th scope="col" className="py-3 px-6">Interés</th>
                  <th scope="col" className="py-3 px-6">Cuota</th>
                  <th scope="col" className="py-3 px-6">Saldo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6">1</td>
                  <td className="py-4 px-6">$198.00</td>
                  <td className="py-4 px-6">$50.00</td>
                  <td className="py-4 px-6">$248.00</td>
                  <td className="py-4 px-6">$4802.00</td>
                </tr>
                 <tr className="bg-gray-50 border-b">
                  <td className="py-4 px-6">2</td>
                  <td className="py-4 px-6">$200.00</td>
                  <td className="py-4 px-6">$48.00</td>
                  <td className="py-4 px-6">$248.00</td>
                  <td className="py-4 px-6">$4602.00</td>
                </tr>
                 <tr className="bg-white border-b">
                  <td className="py-4 px-6">3</td>
                  <td className="py-4 px-6">$202.00</td>
                  <td className="py-4 px-6">$46.00</td>
                  <td className="py-4 px-6">$248.00</td>
                  <td className="py-4 px-6">$4400.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tarjeta>
      </div>
    </div>
  );
};

export default PaginaSimulacionCredito;