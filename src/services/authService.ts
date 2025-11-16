import { MODO_BACKEND } from "./config";
import * as Api from "./api/authService";
import * as Mock from "./mocks/usuarioMock";

export const authService = {
  login: MODO_BACKEND ? Api.loginApi : Mock.loginMock,
  registrar: MODO_BACKEND ? Api.registrarApi : Mock.registrarMock,
};