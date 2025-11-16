import { MODO_BACKEND } from "./config";
import * as Api from "./api/movimientoService";
import * as Mock from "./mocks/movimientoMock";

// Esta línea es la que soluciona el error.
// Exporta la variable 'movimientoService' que tu otro archivo necesita.
export const movimientoService = {
  getMovimientosRecientes: MODO_BACKEND ? Api.getMovimientosRecientesApi : Mock.getMovimientosRecientesMock,
};