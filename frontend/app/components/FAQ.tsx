"use client";

import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Quem pode participar?",
    answer:
      "O retiro é aberto a todos os membros, frequentadores da Igreja Centro Internacional de Avivamento Primavera e visitantes que desejam um tempo de renovação espiritual e comunhão. Jovens, adultos e famílias são muito bem-vindos.",
  },
  {
    question: "O que devo levar para o retiro?",
    answer:
      "Recomendamos levar Bíblia, caderno para anotações, itens de higiene pessoal, toalha de banho, roupas confortáveis para as programações e momentos ao ar livre, documento oficial com foto e seus medicamentos de uso contínuo (se houver).",
  },
  {
    question: "O valor da inscrição inclui alimentação e hospedagem?",
    answer:
      "Sim! O valor do lote cobre a hospedagem completa durante todos os dias do evento, além de todas as refeições diárias (café da manhã, almoço, janta e lanche da noite). Sobre o transporte teremos um ônibus saindo da igreja no dia 06 de fevereiro pela manhã e retornando no dia 08 de fevereiro pós retiro.",
  },
  {
    question: "Como funciona o processo de inscrição e pagamento?",
    answer:
      "O processo é feito em 3 etapas simples pelo site: 1) Preenchimento dos seus dados pessoais; 2) Informações específicas do retiro (tamanho de camisa e necessidades especiais); 3) Escolha da forma de pagamento (PIX direto via WhatsApp ou Cartão de Crédito). Sua vaga é confirmada logo após a validação do pagamento.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#f5f4ef] px-6 py-15 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            Ficou com alguma dúvida?
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Aqui estão algumas respostas para as perguntas mais frequentes sobre
            o retiro. Clique na pergunta para ver a resposta.
          </p>
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
