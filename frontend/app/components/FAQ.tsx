"use client";

import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Quem pode participar?",
    answer:
      "Todos que desejarem participar do retiro e estiverem dentro das condições definidas pela organização.",
  },
  {
    question: "O que devo levar?",
    answer:
      "Roupas confortáveis, itens de higiene pessoal, Bíblia, documento pessoal e tudo aquilo que for informado pela organização.",
  },
  {
    question: "O valor inclui alimentação?",
    answer:
      "Sim. A inscrição contempla a estrutura e alimentação durante o período do retiro.",
  },
  {
    question: "Como faço minha inscrição?",
    answer:
      "Clique no botão de inscrição e preencha o formulário com seus dados.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f5f4ef] px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            FAQ
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Ficou com alguma dúvida?
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-black/5 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 [&[open]]:bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-lg font-bold text-gray-950 select-none">
                <span>{item.question}</span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 transition-transform duration-300 group-open:rotate-180 group-open:bg-black group-open:text-white">
                  <ChevronDown size={20} />
                </div>
              </summary>

              <p className="mt-4 max-w-2xl leading-relaxed text-gray-500 transition-all">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
