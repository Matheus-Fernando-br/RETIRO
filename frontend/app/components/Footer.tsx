import { ArrowRight, Church, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 pt-24 pb-12 text-white lg:px-12">
      {/* Efeitos visuais de iluminação no fundo */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Bloco do Manifesto Espiritual */}
        <div className="grid gap-12 border-b border-white/10 pb-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Chamado
            </p>

            <div className="mt-6 space-y-2 text-2xl font-black tracking-tight text-white/90 sm:text-3xl">
              <p className="text-white/40">Voltemos ao lugar de ouvir.</p>
              <p className="text-white/60">
                Voltemos ao lugar de arrependimento.
              </p>
              <p className="text-white/80">Voltemos ao lugar de oração.</p>
              <p className="text-white">Voltemos ao primeiro amor.</p>
              <p className="text-white font-extrabold text-3xl sm:text-4xl underline decoration-white/20 underline-offset-8">
                Voltemos ao Senhor.
              </p>
            </div>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60">
              Este retiro será um tempo para parar, ouvir, lembrar, discernir e
              retornar. Um tempo para que, como igreja, possamos novamente
              colocar o coração diante de Deus e responder àquilo que Ele tem
              nos dito.
            </p>
          </div>

          {/* Versículo de Destaque */}
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
            <Heart size={28} className="text-white/40" />

            <blockquote className="mt-6 text-xl font-bold italic leading-relaxed text-white/90 sm:text-2xl">
              “Examinemos os nossos caminhos e voltemos para o Senhor.”
            </blockquote>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Lamentações 3:40
            </p>
          </div>
        </div>

        {/* Chamada para Ação Principal (Botão de Inscrição) */}
        <div className="my-16 flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-gradient-to-r from-neutral-900 via-neutral-950 to-black p-8 border border-white/10 md:flex-row md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Inscrições Abertas
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Pronto para viver essa experiência?
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Garanta a sua vaga no primeiro lote por apenas R$ 205,00.
            </p>
          </div>

          <a
            href="/inscricao/etapa-1"
            className="group flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100 active:scale-95"
          >
            <span>Fazer minha inscrição</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Rodapé Final com Navegação */}
        <div className="flex flex-col justify-between gap-8 pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <Church size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Centro Internacional de Avivamento
              </p>
              <p className="text-xs text-white/40">Retiro 2026 • VOLTEMOS</p>
            </div>
          </div>

          <a
            href="#inicio"
            className="text-xs font-bold uppercase tracking-widest text-white/50 transition hover:text-white"
          >
            Voltar ao topo ↑
          </a>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-white/30 md:text-left">
          © 2027 • Igreja Centro Internacional de Avivamento Primavera. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}
