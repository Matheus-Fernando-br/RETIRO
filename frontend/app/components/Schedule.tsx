"use client";

import Image from "next/image";

// Substitua/adicione os nomes dos arquivos que você salvou na pasta public/fotos/
const photos = [
  "/fotos/1.PNG",
  "/fotos/2.PNG",
  "/fotos/3.jpeg",
  "/fotos/4.jpeg",
  "/fotos/5.jpeg",
  "/fotos/6.jpeg",
  "/fotos/7.jpeg",
  "/fotos/8.jpeg",
  "/fotos/9.jpeg",
  "/fotos/10.jpeg",
  "/fotos/11.jpeg",
  "/fotos/12.jpeg",
  "/fotos/13.jpeg",
];

export default function AboutUs() {
  return (
    <section id="quem-somos" className="overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto Quem Somos */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              Quem Somos
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
              Nossa Comunidade &
              <br />
              <span className="text-[#F59827]">Propósito.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A{" "}
              <strong className="text-gray-950">
                Igreja Centro Internacional de Avivamento Primavera
              </strong>{" "}
              é uma comunidade que deseja viver a presença de Deus, crescer em
              intimidade com Ele e cooperar com aquilo que o Senhor está fazendo
              em nossa geração.
            </p>
          </div>
        </div>
      </div>

      {/* Carrossel Infinito Suave */}
      <div className="relative mt-20 w-full overflow-hidden">
        {/* Degradê de sombreamento nas pontas do carrossel */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-infinite-scroll gap-6 hover:[animation-play-state:paused]">
          {/* Triplicamos a lista de fotos para garantir o loop infinito sem falhas visuais */}
          {[...photos, ...photos, ...photos].map((src, index) => (
            <div
              key={index}
              className="relative h-64 w-80 shrink-0 overflow-hidden rounded-3xl border border-black/5 shadow-sm sm:h-72 sm:w-96"
            >
              <Image
                src={src}
                alt={`Foto da comunidade ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
