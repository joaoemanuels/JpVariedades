export function formatarPreco(valor: number): string {
  if (valor === 0) return "Grátis";
  return `R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
}
