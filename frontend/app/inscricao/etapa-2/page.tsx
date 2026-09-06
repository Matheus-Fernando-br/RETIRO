"use client";

import { ArrowLeft, ArrowRight, Check, Church } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import RegistrationProgress from "@/app/components/RegistrationProgress";

export default function RegistrationStepTwo() {
  const router = useRouter();

  const [form, setForm] = useState({
    restricaoMedicamentos: "",
    membresia: "",
    igreja: "",
    camisa: "",
    voluntariado: false,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const participant = JSON.parse(
      sessionStorage.getItem("retiro-participante") || "{}",
    );

    const registration = {
      ...participant,
      ...form,
    };

    sessionStorage.setItem("retiro-inscricao", JSON.stringify(registration));

    router.push("/inscricao/etapa-3");
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

          <h1 className="registration-title">Quase lá.</h1>

          <p className="registration-description">
            Agora precisamos de algumas informações importantes para a
            organização do retiro.
          </p>
        </div>

        {/* Progresso */}
        <RegistrationProgress currentStep={2} />

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-header">
            <p className="form-section-label">Informações do retiro</p>

            <h2 className="form-section-title">Algumas informações</h2>
          </div>

          <div className="form-fields">
            {/* 5 */}
            <div>
              <label htmlFor="restricao" className="form-label">
                5. Você possui alguma restrição alimentar ou faz uso de
                medicamentos?
                <span className="form-required">*</span>
              </label>

              <textarea
                id="restricao"
                required
                value={form.restricaoMedicamentos}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    restricaoMedicamentos: event.target.value,
                  }))
                }
                placeholder="Informe, por gentileza. Caso não possua, escreva 'Não'."
                rows={4}
                className="form-textarea"
              />
            </div>

            {/* 6 */}
            <div>
              <p className="form-label">
                6. Você faz parte da nossa membresia?
                <span className="form-required">*</span>
              </p>

              <div className="form-options">
                {["Sim", "Não"].map((option) => {
                  const selected = form.membresia === option;

                  return (
                    <label
                      key={option}
                      className={`form-option ${
                        selected ? "form-option-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="membresia"
                        value={option}
                        required
                        checked={selected}
                        onChange={(event) =>
                          setForm((previous) => ({
                            ...previous,
                            membresia: event.target.value,
                          }))
                        }
                        className="sr-only"
                      />

                      <span
                        className={`form-option-radio ${
                          selected ? "form-option-radio-selected" : ""
                        }`}
                      >
                        {selected && <span className="form-option-radio-dot" />}
                      </span>

                      <span className="font-semibold">{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 7 */}
            <div>
              <label htmlFor="igreja" className="form-label">
                7. Caso a resposta acima for Não, qual é a sua igreja?
                <span className="form-optional">Opcional</span>
              </label>

              <input
                id="igreja"
                type="text"
                value={form.igreja}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    igreja: event.target.value,
                  }))
                }
                placeholder="Nome da igreja"
                className="form-input"
              />
            </div>

            {/* 8 */}
            <div>
              <p className="form-label">
                8. Informe o tamanho da sua camisa.
                <span className="form-required">*</span>
              </p>

              <div className="shirt-options">
                {["P", "M", "G", "GG", "XG", "XXG"].map((size) => {
                  const selected = form.camisa === size;

                  return (
                    <label
                      key={size}
                      className={`shirt-option ${
                        selected ? "shirt-option-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="camisa"
                        value={size}
                        required
                        checked={selected}
                        onChange={(event) =>
                          setForm((previous) => ({
                            ...previous,
                            camisa: event.target.value,
                          }))
                        }
                        className="sr-only"
                      />

                      {size}
                    </label>
                  );
                })}
              </div>

              <p className="form-help">
                Não possuímos tamanho P Blue. Os tamanhos disponíveis são do P
                ao XXG.
              </p>
            </div>

            {/* 9 */}
            <div className="terms-card">
              <p className="terms-label">Termo de ciência e voluntariado</p>

              <p className="terms-text">
                9. Estou ciente de que a cultura da igreja e do evento é sobre
                servirmos uns aos outros e, por isso, estou de acordo em me
                voluntariar para ser escalado(a) para fins de organização e
                limpeza durante o evento.
              </p>

              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  required
                  checked={form.voluntariado}
                  onChange={(event) =>
                    setForm((previous) => ({
                      ...previous,
                      voluntariado: event.target.checked,
                    }))
                  }
                  className="sr-only"
                />

                <span
                  className={`checkbox-box ${
                    form.voluntariado ? "checkbox-box-selected" : ""
                  }`}
                >
                  {form.voluntariado && <Check size={16} />}
                </span>

                <span className="checkbox-text">Estou de acordo</span>
              </label>
            </div>
          </div>

          {/* Continuar */}
          <button type="submit" className="form-button">
            Continuar
            <ArrowRight size={18} className="form-button-icon" />
          </button>
        </form>

        <p className="form-footer-text">
          Ao continuar, suas informações serão mantidas para concluir sua
          inscrição.
        </p>
      </div>
    </main>
  );
}
