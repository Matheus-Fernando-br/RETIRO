import { ArrowDown, ArrowRight, CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f5f4ef] px-6 pt-24 lg:px-12"
    >
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-black/[0.04] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-black/[0.04] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-600">
            <span className="h-2 w-2 rounded-full bg-black" />
            Retiro Espiritual 2026
          </div>

          <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.05em] text-gray-950 sm:text-7xl lg:text-[6.5rem]">
            Um tempo
            <br />
            <span className="text-gray-400">para Deus.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Um fim de semana para desacelerar, fortalecer a fé, renovar o
            coração e viver momentos inesquecíveis na presença de Deus.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/inscricao/etapa-1"
              className="group flex items-center gap-3 rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:gap-5"
            >
              Quero participar
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#sobre"
              className="rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Conhecer o retiro
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>15 — 17 Nov</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Local do retiro</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-900">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                  Retiro
                </p>

                <p className="mt-3 text-7xl font-black tracking-tight">2026</p>

                <div className="mx-auto mt-6 h-px w-16 bg-white/30" />

                <p className="mt-6 text-sm text-white/60">
                  Fé • Comunhão • Propósito
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Tema
              </p>

              <p className="mt-2 text-xl font-semibold text-white">
                Permanecei em mim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-400 lg:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
