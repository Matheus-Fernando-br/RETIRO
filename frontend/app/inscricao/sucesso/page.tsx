"use client";

import { Check, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegistrationSuccess() {
  const router = useRouter();

  return (
    <main className="page-background">
      <div className="page-container">
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="w-full max-w-xl text-center">
            {/* Ícone */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
              <Check size={36} strokeWidth={2.5} />
            </div>

            {/* Texto */}
            <p className="registration-eyebrow mt-8">Inscrição realizada</p>

            <h1 className="registration-title">Tudo certo!</h1>

            <p className="registration-description mx-auto">
              Sua solicitação de inscrição para o Retiro 2026 foi registrada com
              sucesso.
            </p>

            {/* Informação */}
            <div className="mt-8 rounded-[2rem] border border-black/5 bg-white p-6 text-left shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="font-black text-gray-950">Próximo passo</h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Agora é só realizar o pagamento conforme a opção escolhida.
                    A organização irá confirmar sua inscrição após a
                    identificação do pagamento e te notificar via e-mail.
                  </p>
                </div>
              </div>
            </div>

            {/* Botão */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="form-button"
            >
              Voltar para o início
              <Home size={18} className="form-button-icon" />
            </button>

            <p className="form-footer-text">
              Obrigado por fazer parte do Retiro 2026.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
