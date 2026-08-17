import {
  Armchair,
  Bath,
  BedDouble,
  BrushCleaning,
  CookingPot,
  Flower2,
  Hammer,
  House,
  Lamp,
  PawPrint,
  Sofa,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Decoração",
    icon: Sparkles,
  },
  {
    name: "Cozinha",
    icon: CookingPot,
  },
  {
    name: "Casa",
    icon: House,
  },
  {
    name: "Organização",
    icon: Armchair,
  },
  {
    name: "Iluminação",
    icon: Lamp,
  },
  {
    name: "Jardim",
    icon: Flower2,
  },
  {
    name: "Móveis",
    icon: Sofa,
  },
  {
    name: "Banheiro",
    icon: Bath,
  },
  {
    name: "Cama, Mesa e Banho",
    icon: BedDouble,
  },
  {
    name: "Limpeza",
    icon: BrushCleaning,
  },
  {
    name: "Ferramentas",
    icon: Hammer,
  },
  {
    name: "Pet",
    icon: PawPrint,
  },
];

export function Categories() {
  return (
    <section className="w-full px-4 md:px-6">
      <div className="mx-auto w-full max-w-350 overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max gap-8 py-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                className="group flex w-18 flex-col items-center gap-2"
              >
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    border border-[#decfc7]
                    bg-white
                    transition-all duration-200
                    group-hover:border-[#6b341e]
                    group-hover:bg-[#faf7f5]
                  "
                >
                  <Icon size={24} strokeWidth={2} className="text-[#6b341e]" />
                </div>

                <span className="whitespace-nowrap text-[11px] font-semibold text-[#222]">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
