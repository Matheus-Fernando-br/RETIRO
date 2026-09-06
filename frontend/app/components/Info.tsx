import {
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
  Wallet,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Info() {
  return (
    <section id="informacoes" className="bg-[#f5f4ef] px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            Informações
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Tudo que você
            <br />
            <span className="text-gray-400">precisa saber.</span>
          </h2>
        </div>

        {/* Cards de Informações Principais (Data, Horário e Primeiro Lote) */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
              <CalendarDays size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
              Data
            </p>

            <p className="mt-2 text-lg font-bold text-gray-950">
              6 a 9 de Fevereiro de 2027
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
              <Clock3 size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
              Horário
            </p>

            <p className="mt-2 text-lg font-bold text-gray-950">
              A partir das 18h
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
              <Wallet size={21} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
              Primeiro Lote
            </p>

            <p className="mt-2 text-lg font-bold text-gray-950">R$ 205,00</p>
          </div>
        </div>

        {/* Card do Local com Mapa Incorporado e Botão para Vídeo */}
        <div className="mt-4 rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-black/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                <MapPin size={21} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                Local
              </p>

              <p className="mt-1 text-xl font-bold text-gray-950 sm:text-2xl">
                Sítio Reduto Dos Anjos - Petrópolis, Timóteo
              </p>
            </div>

            {/* Botão de Conhecer o Espaço no Vídeo do YouTube */}
            <a
              href="https://youtu.be/aJkcXB6O_To?is=IpkoyVi-1KQHB_Sg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Conheça o espaço do retiro
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Google Maps Incorporado */}
          <div className="mt-6 h-72 w-full overflow-hidden rounded-2xl border border-black/5">
            <iframe
              title="Google Maps - Sítio Reduto Dos Anjos"
              src="https://maps.google.com/maps?q=S%C3%ADtio%20Reduto%20Dos%20Anjos,%20Petr%C3%B3polis,%20Tim%C3%B3teo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Botão de Inscrição em Destaque no Final da Seção */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <a
            href="/inscricao/etapa-1"
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-black px-10 py-5 text-base font-bold text-white shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-gray-900 active:scale-95"
          >
            <span>Garantir minha vaga agora</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
          <p className="mt-3 text-xs font-semibold text-gray-400">
            Vagas limitadas • Primeiro lote por R$ 205,00
          </p>
        </div>
      </div>
    </section>
  );
}
