export function formatPrice(valor: number): string {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
