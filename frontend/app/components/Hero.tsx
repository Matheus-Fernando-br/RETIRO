import { ArrowDown, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f3e1] px-6 pt-24 lg:px-12"
    >
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-black/[0.04] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-black/[0.04] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Lado Esquerdo - Informações */}
        <div>
          <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.05em] text-gray-950 sm:text-7xl lg:text-[6.5rem]">
            VOLTEMOS
            <br />
            <span className="text-gray-400">RETIRO 2027</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            O Retiro Anual da Igreja Centro Internacional de Avivamento
            Primavera chega no próximo ano com um convite simples, mas profundo:
            Voltemos.
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
              href="https://youtu.be/aJkcXB6O_To?is=IpkoyVi-1KQHB_Sg"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Conhecer o retiro
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <span>06 — 09 Fev</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Sítio Reduto Dos Anjos - Petrópolis, Timóteo </span>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem TEMA (Visível no mobile e no desktop) */}
        <div className="relative block w-full">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-xl">
            <Image
              src="/TEMA.PNG"
              alt="Tema do Retiro"
              fill
              priority
              className="object-cover"
            />
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
