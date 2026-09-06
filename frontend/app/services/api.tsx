const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function criarInscricao(data: Inscricao) {
  const response = await fetch(`${API_URL}/api/inscricoes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar inscrição");
  }

  return response.json();
}
