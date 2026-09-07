"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RegistrationProgress from "@/app/components/RegistrationProgress";

export default function RegistrationStepOne() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });

  // CPF: exatamente 11 dígitos numéricos
  function formatCPF(value: string) {
    const raw = value.replace(/\D/g, "").slice(0, 11);

    return raw
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  // Telefone: de 10 a 11 dígitos numéricos (Atende fixo e celular)
  function formatPhone(value: string) {
    const raw = value.replace(/\D/g, "").slice(0, 11);

    if (raw.length <= 10) {
      return raw
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return raw
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setError("");

    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = formatCPF(value);
    }

    if (name === "telefone") {
      formattedValue = formatPhone(value);
    }

    setForm((previous) => ({
      ...previous,
      [name]: formattedValue,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Validação de Min/Max em dígitos limpos
    const cpfDigits = form.cpf.replace(/\D/g, "");
    const phoneDigits = form.telefone.replace(/\D/g, "");

    if (cpfDigits.length !== 11) {
      setError("Por favor, digite um CPF válido com 11 dígitos.");
      return;
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setError("Por favor, digite um telefone válido (DDD + número).");
      return;
    }

    sessionStorage.setItem("retiro-participante", JSON.stringify(form));
    router.push("/inscricao/etapa-2");
  }

  return (
    <main className="page-background">
      <div className="page-container">
        {/* Cabeçalho */}
        <div className="registration-header">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="registration-back"
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

          <h1 className="registration-title">Faça sua inscrição.</h1>

          <p className="registration-description">
            Preencha seus dados para participar do Retiro 2026. Leva apenas
            alguns minutos.
          </p>
        </div>

        {/* Progresso */}
        <RegistrationProgress currentStep={1} />

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-header">
            <p className="form-section-label">Dados do participante</p>

            <h2 className="form-section-title">Vamos começar</h2>
          </div>

          <div className="form-fields">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="form-label">
                1. Nome completo
                <span className="form-required">*</span>
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                required
                minLength={3}
                maxLength={100}
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className="form-input"
              />
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="form-label">
                2. E-mail
                <span className="form-required">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="seuemail@email.com"
                autoComplete="email"
                className="form-input"
              />
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="form-label">
                3. Telefone
                <span className="form-required">*</span>
              </label>

              <input
                id="telefone"
                name="telefone"
                type="tel"
                inputMode="tel"
                required
                minLength={14} // Ex: (31) 3333-3333
                maxLength={15} // Ex: (31) 99999-9999
                value={form.telefone}
                onChange={handleChange}
                placeholder="(31) 99999-9999"
                className="form-input"
              />
            </div>

            {/* CPF */}
            <div>
              <label htmlFor="cpf" className="form-label">
                4. CPF
                <span className="form-required">*</span>
              </label>

              <input
                id="cpf"
                name="cpf"
                type="text"
                inputMode="numeric"
                required
                minLength={14} // Ex: 000.000.000-00
                maxLength={14}
                value={form.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                className="form-input"
              />
            </div>
          </div>

          {/* Mensagem de Erro de Validação */}
          {error && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Continuar */}
          <button type="submit" className="form-button mt-6">
            Continuar
            <ArrowRight size={18} className="form-button-icon" />
          </button>
        </form>

        <p className="form-footer-text">
          Seus dados serão utilizados exclusivamente para fins relacionados à
          organização do retiro.
        </p>
      </div>
    </main>
  );
}
