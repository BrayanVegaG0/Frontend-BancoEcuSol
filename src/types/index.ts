export interface Usuario {
  id: string;
  nombres: string;
  email: string;
}

export interface Cuenta {
  id: string;
  tipo: string;
  numeroCorto: string; // "8415"
  saldo: number;
}

export interface Movimiento {
  id: string;
  fecha: string; // "25/11/2025"
  descripcion: string;
  monto: number; // -20.00 o 40.00
  categoria: string;
}