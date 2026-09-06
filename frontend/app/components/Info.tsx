import { CalendarDays, Clock3, MapPin, Wallet } from "lucide-react";

const information = [
  {
    icon: CalendarDays,
    title: "Data",
    text: "15 a 17 de novembro",
  },
  {
    icon: MapPin,
    title: "Local",
    text: "Local do retiro",
  },
  {
    icon: Clock3,
    title: "Horário",
    text: "A partir das 18h",
  },
  {
    icon: Wallet,
    title: "Investimento",
    text: "R$ 150,00",
  },
];

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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {information.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                  <Icon size={21} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                  {item.title}
                </p>

                <p className="mt-2 text-lg font-bold text-gray-950">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
