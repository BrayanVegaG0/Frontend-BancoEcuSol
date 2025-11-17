export interface UsuarioAutenticado {
  usuarioWebId: number;
  clienteId: number;
  nombreUsuario: string;
  emailContacto: string;
  ultimoAcceso: string;
}

export interface Cuenta {
  cuentaId: number;
  numeroCuenta: string;
  tipoCuenta: string;
  saldoDisponible: number;
  saldoContable: number;
  estado: string;
}

export interface Movimiento {
  fecha: string;
  tipoTransaccion: string;
  monto: number;
  descripcion: string;
  saldoPosterior: number;
  canal: string;
}

export interface TransferenciaResponse {
  codigoTransaccion: string;
  fecha: string;
  saldoDisponibleOrigen: number;
  saldoDisponibleDestino: number;
}