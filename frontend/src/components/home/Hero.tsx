interface HeroSectionProps {
  image: string;
}

export function HeroSection({ image }: HeroSectionProps) {
  return (
    <section className="w-full px-4 md:px-6">
      <div className="relative mx-auto h-71.25 w-full max-w-350 overflow-hidden rounded-xl">
        <img
          src={image}
          alt="Decoração e utensílios para casa"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-white/45" />

        <div className="relative z-10 flex h-full items-start">
          <div className="ml-6 mt-22.5 max-w-107.5 md:ml-10">
            <h1 className="text-[27px] font-bold leading-[1.15] text-[#762800] md:text-[29px]">
              Decore sua casa com estilo
            </h1>

            <p className="mt-3 max-w-97.5 text-[12px] leading-[1.45] text-gray-700 md:text-[13px] py-3">
              Descubra as melhores ofertas em decoração e utensílios para sua
              cozinha. Aproveite descontos exclusivos.
            </p>

            <button
              type="button"
              className="mt-3 rounded-lg bg-[#762800] px-5 py-2 text-[11px] font-semibold text-white transition-all duration-200 hover:bg-[#5f2100] hover:shadow-md"
            >
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
