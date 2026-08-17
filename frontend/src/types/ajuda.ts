import type { LucideIcon } from "lucide-react";

export interface TopicoAjuda {
  id: string;
  titulo: string;
  descricao: string;
  icone: LucideIcon;
  corIcone: string;
  corFundoIcone: string;
  href: string;
}
