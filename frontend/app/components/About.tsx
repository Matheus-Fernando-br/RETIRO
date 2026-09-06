export default function About() {
  return (
    <section id="sobre" className="bg-white px-6 py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            Sobre o retiro
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Mais do que um evento.
            <br />
            <span className="text-gray-400">Uma experiência com Deus.</span>
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-600">
            O retiro foi preparado para proporcionar um ambiente de comunhão,
            reflexão e crescimento espiritual. Será um momento para deixar a
            rotina de lado e dedicar tempo àquilo que realmente importa.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Durante esses dias, teremos momentos de louvor, mensagens, oração,
            dinâmicas, comunhão e experiências que poderão marcar a nossa
            caminhada.
          </p>
        </div>
      </div>
    </section>
  );
}
