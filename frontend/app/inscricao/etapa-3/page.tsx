"use client";

import {
  ArrowLeft,
  CreditCard,
  LoaderCircle,
  MessageCircle,
  Tag,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RegistrationProgress from "@/app/components/RegistrationProgress";

export default function RegistrationStepThree() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loteAtual, setLoteAtual] = useState("");
  const [valorInscricao, setValorInscricao] = useState<number | null>(null);
  const [loadingConfiguracao, setLoadingConfiguracao] = useState(true);
  async function finishRegistration(paymentMethod: "pix" | "cartao") {
    setLoading(true);
    setError("");

    try {
      const storedRegistration = sessionStorage.getItem("retiro-inscricao");

      if (!storedRegistration) {
        throw new Error("Dados da inscrição não encontrados.");
      }

      const registration = JSON.parse(storedRegistration);

      const payload = {
        nome: registration.nome,
        email: registration.email,
        telefone: registration.telefone,
        cpf: registration.cpf,

        restricao_medicamentos: registration.restricaoMedicamentos,

        membresia: registration.membresia,
        igreja: registration.igreja || null,
        camisa: registration.camisa,
        voluntariado: registration.voluntariado,

        pagamento: paymentMethod,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

      const response = await fetch(`${apiUrl}/api/inscricoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();

        throw new Error(
          data.detail || "Não foi possível realizar sua inscrição.",
        );
      }

      const savedRegistration = await response.json();

      sessionStorage.setItem("retiro-inscricao-id", savedRegistration.id);

      sessionStorage.setItem("retiro-pagamento", paymentMethod);

      if (paymentMethod === "pix") {
        window.open(
          "https://wa.me/553173139892?text=Ol%C3%A1%20Gilson%2C%20fiz%20minha%20inscri%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20pagar%20pelo%20pix%20o%20retiro%21",
          "_blank",
        );
      }

      if (paymentMethod === "cartao") {
        window.open(
          "https://link.infinitepay.io/renan_patrick_andrade/VC1D-8jgKErCsFT-200,00",
          "_blank",
        );
      }

      router.push("/inscricao/sucesso");
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao realizar sua inscrição.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function loadConfiguracao() {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

      const response = await fetch(`${apiUrl}/api/configuracoes`);

      if (!response.ok) {
        throw new Error("Não foi possível carregar o valor da inscrição.");
      }

      const data = await response.json();

      setLoteAtual(data.lote_atual);
      setValorInscricao(Number(data.valor_inscricao));
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Erro ao carregar o valor da inscrição.",
      );
    } finally {
      setLoadingConfiguracao(false);
    }
  }

  useEffect(() => {
    async function loadConfiguracao() {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

        const response = await fetch(`${apiUrl}/api/configuracoes`);

        if (!response.ok) {
          throw new Error("Não foi possível carregar o valor da inscrição.");
        }

        const data = await response.json();

        setLoteAtual(data.lote_atual);
        setValorInscricao(Number(data.valor_inscricao));
      } catch (error) {
        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "Erro ao carregar o valor da inscrição.",
        );
      } finally {
        setLoadingConfiguracao(false);
      }
    }

    loadConfiguracao();
  }, []);

  return (
    <main className="page-background">
      <div className="page-container">
        {/* Cabeçalho */}
        <div className="registration-header">
          <button
            type="button"
            onClick={() => router.back()}
            className="registration-back"
            disabled={loading}
          >
            <ArrowLeft size={17} />
            Voltar
          </button>

          <Image
            src="/CIA.PNG"
            alt="Logo do Retiro"
            width={80}
            height={50}
            style={{ borderRadius: 5 }}
          />
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

          {/* Card do Lote / Valor */}
          <div className="mb-6 flex items-center justify-between rounded-2xl border border-black/5 bg-[#f5f4ef] p-5">
            {loadingConfiguracao ? (
              <div className="text-sm text-gray-500">
                Carregando valor da inscrição...
              </div>
            ) : valorInscricao !== null ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                    <Tag size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {loteAtual}
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-600">
                      Valor da inscrição
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xl font-black text-gray-950">
                    {valorInscricao.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </>
            ) : (
              <div className="text-sm text-red-500">
                Não foi possível carregar o valor da inscrição.
              </div>
            )}
          </div>

          <div className="payment-options">
            {/* PIX */}
            <button
              type="button"
              onClick={() => finishRegistration("pix")}
              disabled={loading}
              className="payment-option disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="payment-option-content">
                <div className="payment-option-icon">
                  {loading ? (
                    <LoaderCircle size={22} className="animate-spin" />
                  ) : (
                    <MessageCircle size={22} />
                  )}
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
              onClick={() => finishRegistration("cartao")}
              disabled={loading}
              className="payment-option disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="payment-option-content">
                <div className="payment-option-icon">
                  {loading ? (
                    <LoaderCircle size={22} className="animate-spin" />
                  ) : (
                    <CreditCard size={22} />
                  )}
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

          {/* Erro */}
          {error && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
              {error}
            </div>
          )}
        </div>

        <p className="form-footer-text">
          Seus dados serão enviados com segurança para concluir sua inscrição.
        </p>
      </div>
    </main>
  );
}
