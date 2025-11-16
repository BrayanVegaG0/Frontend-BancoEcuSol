import { Cuenta } from "@/types";

export const mockCuentas: Cuenta[] = [
  {
    id: "cta_ahorros_01",
    tipo: "Cuenta De Ahorros",
    numeroCorto: "8415",
    saldo: 2540.00
  },
  {
    id: "cta_corriente_01",
    tipo: "Cuenta Corriente",
    numeroCorto: "8065",
    saldo: 1200.00
  }
];

export const getCuentasMock = async (): Promise<Cuenta[]> => {
  console.log("Llamando a MOCK - getCuentas");
  await new Promise(resolve => setTimeout(resolve, 200));
  return mockCuentas;
};