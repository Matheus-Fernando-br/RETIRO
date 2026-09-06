const schedule = [
  {
    time: "18:00",
    title: "Chegada e acolhimento",
    description: "Recepção dos participantes e acomodação.",
  },
  {
    time: "19:30",
    title: "Abertura",
    description: "Um momento especial para iniciarmos juntos.",
  },
  {
    time: "21:00",
    title: "Louvor e palavra",
    description: "Tempo de adoração, reflexão e mensagem.",
  },
  {
    time: "23:00",
    title: "Comunhão",
    description: "Momento de convivência e integração.",
  },
];

export default function Schedule() {
  return (
    <section id="programacao" className="bg-white px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              Programação
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
              Cada momento
              <br />
              <span className="text-gray-400">tem um propósito.</span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-gray-500">
              Uma programação preparada para proporcionar momentos de
              aprendizado, comunhão e crescimento.
            </p>
          </div>

          <div className="divide-y divide-black/10">
            {schedule.map((item) => (
              <div
                key={item.time}
                className="grid gap-4 py-7 sm:grid-cols-[100px_1fr]"
              >
                <span className="text-sm font-bold text-gray-400">
                  {item.time}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
