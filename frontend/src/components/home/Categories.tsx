import { categories } from "../../data/database.data";

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
