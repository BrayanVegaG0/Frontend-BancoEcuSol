export interface Usuario {
  id: string;
  nombres: string;
  email: string;
}

export interface Cuenta {
  id: string;
  tipo: string;
  numeroCorto: string; 
  saldo: number;
}

export interface Movimiento {
  id: string;
  fecha: string;
  descripcion: string;
  monto: number; 
  categoria: string;
}