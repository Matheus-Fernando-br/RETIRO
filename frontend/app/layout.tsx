import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Título que aparece na aba do navegador
  title: "Retiro VOLTEMOS 2027 | Igreja CIA Primavera",

  // Descrição que aparece no Google e no compartilhamento
  description:
    "Um tempo para parar, ouvir, lembrar e retornar ao Senhor. Garanta sua vaga no Retiro 2027.",

  // URL oficial do seu site
  metadataBase: new URL("https://seu-dominio.com.br"),

  // O que aparece quando compartilha o link (WhatsApp, Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Retiro VOLTEMOS 2027 — Igreja CIA Primavera",
    description:
      "Um tempo para parar, ouvir, lembrar e retornar ao Senhor. Faça sua inscrição online!",
    url: "https://seu-dominio.com.br",
    siteName: "Retiro CIA Primavera",
    images: [
      {
        url: "/og-image.png", // Imagem que vai aparecer no card do WhatsApp
        width: 1200,
        height: 630,
        alt: "Retiro VOLTEMOS 2027",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // O que aparece quando compartilha no Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Retiro VOLTEMOS 2027",
    description: "Um tempo para desacelerar e conectar-se com Deus.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
