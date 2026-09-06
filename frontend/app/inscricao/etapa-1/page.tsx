"use client";

import { ArrowLeft, ArrowRight, Church } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import RegistrationProgress from "@/app/components/RegistrationProgress";

export default function RegistrationStepOne() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

          <div className="registration-logo">
            <Church size={19} />
          </div>
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
                value={form.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                className="form-input"
              />
            </div>
          </div>

          {/* Continuar */}
          <button type="submit" className="form-button">
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
