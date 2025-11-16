import { MODO_BACKEND } from "./config";
import * as Api from "./api/cuentaService";
import * as Mock from "./mocks/cuentaMock";

// Esta es la línea que faltaba
export const cuentaService = {
  getCuentas: MODO_BACKEND ? Api.getCuentasApi : Mock.getCuentasMock,
};