"use client";

import {
  ArrowLeft,
  CreditCard,
  LoaderCircle,
  MessageCircle,
  Tag,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RegistrationProgress from "@/app/components/RegistrationProgress";

interface Inscricao {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  restricao_medicamentos: string;
  membresia: string;
  igreja: string | null;
  camisa: string;
  voluntariado: boolean;
  pagamento: string | null;
  pagamento_status: string;
  created_at?: string;
}

export default function RegistrationStepThree() {
  const router = useRouter();

  const [inscricao, setInscricao] = useState<Inscricao | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingPagamento, setLoadingPagamento] = useState(false);
  const [error, setError] = useState("");

  const [loteAtual, setLoteAtual] = useState("");
  const [valorInscricao, setValorInscricao] = useState<number | null>(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        setLoading(true);
        setError("");

        const inscricaoId = sessionStorage.getItem("retiro-inscricao-id");

        if (!inscricaoId) {
          throw new Error("Não encontramos os dados da sua inscrição.");
        }

        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

        /*
         * BUSCA A INSCRIÇÃO
         */
        const response = await fetch(
          `${apiUrl}/api/inscricoes/public/${inscricaoId}`,
        );

        if (!response.ok) {
          const data = await response.json().catch(() => null);

          throw new Error(
            data?.detail || "Não foi possível carregar os dados da inscrição.",
          );
        }

        const data = await response.json();

        setInscricao(data);

        /*
         * BUSCA CONFIGURAÇÃO DO LOTE / VALOR
         */
        const configuracaoResponse = await fetch(`${apiUrl}/api/configuracoes`);

        if (!configuracaoResponse.ok) {
          throw new Error("Não foi possível carregar o valor da inscrição.");
        }

        const configuracao = await configuracaoResponse.json();

        setLoteAtual(configuracao.lote_atual);
        setValorInscricao(Number(configuracao.valor_inscricao));
      } catch (error) {
        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao carregar sua inscrição.",
        );
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  async function continuarPagamento(paymentMethod: "pix" | "cartao") {
    setLoadingPagamento(true);
    setError("");

    try {
      if (!inscricao) {
        throw new Error("Dados da inscrição não encontrados.");
      }

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
          : "Ocorreu um erro ao continuar.",
      );
    } finally {
      setLoadingPagamento(false);
    }
  }

  if (loading) {
    return (
      <main className="page-background">
        <div className="page-container flex min-h-[60vh] items-center justify-center">
          <div className="flex items-center gap-3 text-gray-500">
            <LoaderCircle size={22} className="animate-spin" />
            Carregando sua inscrição...
          </div>
        </div>
      </main>
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
            disabled={loadingPagamento}
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

          <h1 className="registration-title">Confira seus dados.</h1>

          <p className="registration-description">
            Verifique se todas as informações estão corretas antes de escolher a
            forma de pagamento.
          </p>
        </div>

        <RegistrationProgress currentStep={3} />

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
            {error}
          </div>
        )}

        {inscricao && (
          <>
            {/* DADOS DA INSCRIÇÃO */}
            <div className="form-card mb-6">
              <div className="form-header">
                <p className="form-section-label">Seus dados</p>

                <h2 className="form-section-title">Dados da inscrição</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Nome
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.nome}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    E-mail
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Telefone
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.telefone}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    CPF
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.cpf}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Membresia
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.membresia}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Igreja
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.igreja || "Não informado"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Camisa
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.camisa}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Voluntariado
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.voluntariado ? "Sim" : "Não"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Restrição a medicamentos
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {inscricao.restricao_medicamentos || "Nenhuma"}
                  </p>
                </div>
              </div>
            </div>

            {/* PAGAMENTO */}
            <div className="form-card">
              <div className="form-header">
                <p className="form-section-label">Pagamento</p>

                <h2 className="form-section-title">Como você deseja pagar?</h2>
              </div>

              {/* LOTE */}
              <div className="mb-6 flex items-center justify-between rounded-2xl border border-black/5 bg-[#f5f4ef] p-5">
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
                    {valorInscricao !== null
                      ? valorInscricao.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : "--"}
                  </span>
                </div>
              </div>

              {/* FORMAS DE PAGAMENTO */}
              <div className="payment-options">
                {/* PIX */}
                <button
                  type="button"
                  onClick={() => continuarPagamento("pix")}
                  disabled={loadingPagamento}
                  className="payment-option disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <div className="payment-option-content">
                    <div className="payment-option-icon">
                      {loadingPagamento ? (
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

                {/* CARTÃO */}
                <button
                  type="button"
                  onClick={() => continuarPagamento("cartao")}
                  disabled={loadingPagamento}
                  className="payment-option disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <div className="payment-option-content">
                    <div className="payment-option-icon">
                      {loadingPagamento ? (
                        <LoaderCircle size={22} className="animate-spin" />
                      ) : (
                        <CreditCard size={22} />
                      )}
                    </div>

                    <div>
                      <p className="payment-option-title">Cartão</p>

                      <p className="payment-option-description">
                        Acesse o link externo para realizar o pagamento com
                        cartão.
                      </p>
                    </div>
                  </div>

                  <span className="text-xl text-gray-400">→</span>
                </button>
              </div>
            </div>
          </>
        )}

        <p className="form-footer-text">
          Seus dados serão enviados com segurança para concluir sua inscrição.
        </p>
      </div>
    </main>
  );
}
