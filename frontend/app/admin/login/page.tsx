"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Usuário ou senha incorretos.");
      }
      if (!data.authenticated) {
        throw new Error("Não foi possível autenticar.");
      }
      sessionStorage.setItem("retiro-admin-auth", "true");
      router.push("/admin");
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error ? error.message : "Erro ao realizar login.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-background">
      <div className="admin-container">
        <div className="admin-card">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="registration-back"
          >
            <ArrowLeft size={17} />
            Voltar
          </button>

          <p className="registration-eyebrow mt-6">Administração</p>

          <h1 className="admin-title">Acesso restrito.</h1>

          <p className="admin-description">
            Entre com suas credenciais para acessar o painel de inscrições.
          </p>

          <form onSubmit={handleSubmit} className="admin-fields">
            {/* Usuário */}
            <div>
              <label htmlFor="usuario" className="form-label">
                Usuário
              </label>

              <input
                id="usuario"
                type="text"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                placeholder="Digite seu usuário"
                autoComplete="username"
                required
                className="form-input"
              />
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="senha" className="form-label">
                Senha
              </label>

              <div className="relative">
                <input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  required
                  className="form-input pl-11"
                />
              </div>
            </div>

            {/* Erro */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Entrar */}
            <button type="submit" className="admin-button">
              Entrar
              <ArrowRight size={18} className="ml-2" />
            </button>
          </form>
        </div>

        <p className="form-footer-text">
          Área exclusiva para organização do Retiro 2026.
        </p>
      </div>
    </main>
  );
}
