export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              Retiro 2026
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Um tempo para Deus.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
              Um momento para desacelerar, conectar-se com Deus e viver
              experiências que permanecem.
            </p>
          </div>

          <a
            href="#inicio"
            className="text-sm font-semibold text-white/60 transition hover:text-white"
          >
            Voltar ao início ↑
          </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/30">
          © 2026 • Igreja • Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
