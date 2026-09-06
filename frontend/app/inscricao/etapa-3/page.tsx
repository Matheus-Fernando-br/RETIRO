"use client";

import { ArrowLeft, Church, CreditCard, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import RegistrationProgress from "@/app/components/RegistrationProgress";

export default function RegistrationStepThree() {
  const router = useRouter();

  function handlePix() {
    // TODO: substituir pelo número/link real do WhatsApp
    window.open(
      "https://wa.me/553173139892?text=Ol%C3%A1%20Gilson%2C%20fiz%20minha%20inscri%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20pagar%20pelo%20pix%20o%20retiro%21",
      "_blank",
    );
  }

  function handleCard() {
    // TODO: substituir pelo link real da plataforma de pagamento
    window.open(
      "https://link.infinitepay.io/renan_patrick_andrade/VC1D-8jgKErCsFT-200,00",
      "_blank",
    );
  }

  return (
    <main className="page-background">
      <div className="page-container">
        {/* Cabeçalho */}
        <div className="registration-header">
          <button
            type="button"
            onClick={() => router.back()}
            className="registration-back"
          >
            <ArrowLeft size={17} />
            Voltar
          </button>

          <div className="registration-logo">
            <Church size={19} />
          </div>
        </div>

        {/* Título */}
        <div className="mb-8">
          <p className="registration-eyebrow">Inscrição</p>

          <h1 className="registration-title">Última etapa.</h1>

          <p className="registration-description">
            Escolha a forma de pagamento para concluir sua inscrição no Retiro
            2026.
          </p>
        </div>

        {/* Progresso */}
        <RegistrationProgress currentStep={3} />

        {/* Pagamento */}
        <div className="form-card">
          <div className="form-header">
            <p className="form-section-label">Pagamento</p>

            <h2 className="form-section-title">Como você deseja pagar?</h2>
          </div>

          <div className="payment-options">
            {/* PIX */}
            <button
              type="button"
              onClick={handlePix}
              className="payment-option"
            >
              <div className="payment-option-content">
                <div className="payment-option-icon">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <p className="payment-option-title">PIX</p>

                  <p className="payment-option-description">
                    Fale com a organização pelo WhatsApp para realizar o
                    pagamento.
                  </p>
                </div>
              </div>

              <span className="text-xl text-gray-400">→</span>
            </button>

            {/* Cartão */}
            <button
              type="button"
              onClick={handleCard}
              className="payment-option"
            >
              <div className="payment-option-content">
                <div className="payment-option-icon">
                  <CreditCard size={22} />
                </div>

                <div>
                  <p className="payment-option-title">Cartão</p>

                  <p className="payment-option-description">
                    Acesse o link externo para realizar o pagamento com cartão.
                  </p>
                </div>
              </div>

              <span className="text-xl text-gray-400">→</span>
            </button>
          </div>
        </div>

        <p className="form-footer-text">
          Após realizar o pagamento, sua inscrição será encaminhada para a
          organização do retiro.
        </p>
      </div>
    </main>
  );
}
