"use client";

import { useEffect, useState } from "react";

interface RetiroConfigData {
  lote_atual: string;
  valor_inscricao: number;
}

export function useRetiroConfig() {
  const [configuracao, setConfiguracao] = useState<RetiroConfigData | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadConfiguracao() {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

        const response = await fetch(`${apiUrl}/api/configuracoes`);

        if (!response.ok) {
          throw new Error("Não foi possível carregar a configuração.");
        }

        const data = await response.json();

        setConfiguracao(data);
      } catch (error) {
        console.error("Erro ao carregar configuração do retiro:", error);
      } finally {
        setLoading(false);
      }
    }

    loadConfiguracao();
  }, []);

  return {
    configuracao,
    loading,
  };
}
