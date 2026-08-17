import type { LucideIcon } from "lucide-react";
import {
  ChefHat,
  Flower2,
  Lightbulb,
  Rows3,
  Sofa,
  Sparkle,
} from "lucide-react";

export interface Categoria {
  id: string;
  nome: string;
  icone: LucideIcon;
  href: string;
}

export const categorias: Categoria[] = [
  { id: "moveis", nome: "Móveis", icone: Sofa, href: "/produtos/moveis" },
  {
    id: "iluminacao",
    nome: "Iluminação",
    icone: Lightbulb,
    href: "/produtos/iluminacao",
  },
  { id: "texteis", nome: "Têxteis", icone: Rows3, href: "/produtos/texteis" },
  {
    id: "decoracao",
    nome: "Decoração",
    icone: Sparkle,
    href: "/produtos/decoracao",
  },
  { id: "cozinha", nome: "Cozinha", icone: ChefHat, href: "/produtos/cozinha" },
  { id: "jardim", nome: "Jardim", icone: Flower2, href: "/produtos/jardim" },
];
