"use client";

import {
  ArrowLeft,
  CheckCircle,
  Clock,
  CreditCard,
  RefreshCw,
  XCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Inscricao {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  camisa: string;
  membresia: string;
  igreja: string | null;
  pagamento: string | null;
  pagamento_status: string;
  created_at: string;
}

type FiltroPagamento = "todos" | "pendente" | "pago" | "cancelado";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function getAdminToken() {
  return sessionStorage.getItem("retiro-admin-token");
}

export default function AdminPage() {
  const router = useRouter();

  const [authChecking, setAuthChecking] = useState(true);
  const [filtroPagamento, setFiltroPagamento] =
    useState<FiltroPagamento>("todos");

  // DECLARAÇÃO DO ESTADO PRIMEIRO
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  // O FILTRO É CALCULADO APÓS A DECLARAÇÃO DO ESTADO
  const inscricoesFiltradas = inscricoes.filter((inscricao) => {
    if (filtroPagamento === "todos") {
      return true;
    }

    return inscricao.pagamento_status === filtroPagamento;
  });

  async function loadInscricoes() {
    try {
      setLoading(true);
      setError("");

      const token = getAdminToken();

      const response = await fetch(`${API_URL}/api/inscricoes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Não foi possível carregar as inscrições.");
      }

      const data = await response.json();

      setInscricoes(data);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error ? error.message : "Erro ao carregar inscrições.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      setUpdatingId(id);

      const token = getAdminToken();

      const response = await fetch(`${API_URL}/api/inscricoes/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pagamento_status: status,
        }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível atualizar o pagamento.");
      }

      const updated = await response.json();

      setInscricoes((previous) =>
        previous.map((inscricao) =>
          inscricao.id === id ? updated : inscricao,
        ),
      );
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error ? error.message : "Erro ao atualizar pagamento.",
      );
    } finally {
      setUpdatingId(null);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("retiro-admin-token");
    sessionStorage.removeItem("retiro-admin-auth");

    router.replace("/");
  }

  useEffect(() => {
    async function checkAuthentication() {
      const token = sessionStorage.getItem("retiro-admin-token");

      console.log("TOKEN:", token);

      if (!token) {
        router.replace("/admin/login");
        return;
      }

      setAuthChecking(false);

      await loadInscricoes();
    }

    void checkAuthentication();
  }, [router]);

  if (authChecking) {
    return (
      <main className="admin-background">
        <div className="flex flex-col items-center justify-center text-center">
          <RefreshCw size={28} className="animate-spin text-gray-400" />

          <p className="mt-4 text-sm text-gray-500">Verificando acesso...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f4ef] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-950 hover:bg-gray-950 hover:text-white active:translate-y-0"
        >
          Sair
        </button>
        {/* Cabeçalho */}
        <div className="mt-8 mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              Administração
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-950">
              Inscrições
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Gerencie os participantes e os pagamentos.
            </p>
          </div>
          <button
            type="button"
            onClick={loadInscricoes}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800 disabled:opacity-50"
          >
            <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
            Atualizar
          </button>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFiltroPagamento("todos")}
            className={`rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
              filtroPagamento === "todos"
                ? "bg-black text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-400"
            }`}
          >
            Todos
          </button>

          <button
            type="button"
            onClick={() => setFiltroPagamento("pendente")}
            className={`rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
              filtroPagamento === "pendente"
                ? "bg-black text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-400"
            }`}
          >
            Pendente pagamento
          </button>

          <button
            type="button"
            onClick={() => setFiltroPagamento("pago")}
            className={`rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
              filtroPagamento === "pago"
                ? "bg-black text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-400"
            }`}
          >
            Pago
          </button>

          <button
            type="button"
            onClick={() => setFiltroPagamento("cancelado")}
            className={`rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
              filtroPagamento === "cancelado"
                ? "bg-black text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-400"
            }`}
          >
            Cancelados
          </button>
        </div>
        {/* Erro */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
        {/* Loading */}
        {loading && (
          <div className="rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-sm">
            <RefreshCw
              size={28}
              className="mx-auto animate-spin text-gray-400"
            />

            <p className="mt-4 text-sm text-gray-500">
              Carregando inscrições...
            </p>
          </div>
        )}
        {/* Sem inscrições */}
        {!loading && inscricoesFiltradas.length === 0 && (
          <div className="rounded-[2rem] border border-black/5 bg-white p-10 text-center shadow-sm">
            <p className="font-bold text-gray-900">
              Nenhuma inscrição encontrada para este filtro.
            </p>
          </div>
        )}
        {/* Inscrições */}
        {!loading && inscricoesFiltradas.length > 0 && (
          <div className="space-y-4">
            {inscricoesFiltradas.map((inscricao) => {
              const isUpdating = updatingId === inscricao.id;

              return (
                <div
                  key={inscricao.id}
                  className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Dados */}
                    <div className="min-w-0">
                      <h2 className="text-xl font-black text-gray-950">
                        {inscricao.nome}
                      </h2>

                      <div className="mt-3 grid gap-1 text-sm text-gray-500 sm:grid-cols-2">
                        <p>E-mail: {inscricao.email}</p>

                        <p>Telefone: {inscricao.telefone}</p>

                        <p>CPF: {inscricao.cpf}</p>

                        <p>Camisa: {inscricao.camisa}</p>

                        <p>Membresia: {inscricao.membresia}</p>

                        <p>Igreja: {inscricao.igreja || "Não informado"}</p>

                        <p>
                          Pagamento: {inscricao.pagamento || "Não informado"}
                        </p>
                      </div>
                    </div>

                    {/* Pagamento */}
                    <div className="w-full shrink-0 lg:w-64">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                        Status do pagamento
                      </p>

                      <div className="mb-3 flex items-center gap-2">
                        {inscricao.pagamento_status === "pago" && (
                          <>
                            <CheckCircle size={18} className="text-green-600" />

                            <span className="font-bold text-green-700">
                              Pago
                            </span>
                          </>
                        )}

                        {inscricao.pagamento_status === "pendente" && (
                          <>
                            <Clock size={18} className="text-yellow-600" />

                            <span className="font-bold text-yellow-700">
                              Pendente
                            </span>
                          </>
                        )}

                        {inscricao.pagamento_status === "cancelado" && (
                          <>
                            <XCircle size={18} className="text-red-600" />

                            <span className="font-bold text-red-700">
                              Cancelado
                            </span>
                          </>
                        )}
                      </div>

                      <select
                        value={inscricao.pagamento_status}
                        disabled={isUpdating}
                        onChange={(event) =>
                          updateStatus(inscricao.id, event.target.value)
                        }
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 outline-none focus:border-black"
                      >
                        <option value="pendente">Pendente</option>

                        <option value="pago">Pago</option>

                        <option value="cancelado">Cancelado</option>
                      </select>

                      {isUpdating && (
                        <p className="mt-2 text-xs text-gray-400">
                          Atualizando...
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
