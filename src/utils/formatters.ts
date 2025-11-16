/**
 * Formatea un número como moneda USD.
 * @param monto El monto a formatear.
 * @returns String formateado (ej. $ 2,540.00)
 */
export const formatCurrency = (monto: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(monto);
};