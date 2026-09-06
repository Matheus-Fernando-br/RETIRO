import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retiro VOLTEMOS 2027 | Igreja CIA Primavera",
  description:
    "Um tempo para parar, ouvir, lembrar e retornar ao Senhor. Garanta sua vaga no Retiro 2027.",

  // URL base oficial do projeto
  metadataBase: new URL("https://retirovoltemos.vercel.app"),

  openGraph: {
    title: "Retiro VOLTEMOS 2027 — Igreja CIA Primavera",
    description:
      "Um tempo para parar, ouvir, lembrar e retornar ao Senhor. Faça sua inscrição online!",
    url: "https://retirovoltemos.vercel.app",
    siteName: "Retiro CIA Primavera",
    images: [
      {
        url: "/og-image.png", // Next.js junta com metadataBase automaticamente
        width: 1200,
        height: 630,
        alt: "Retiro VOLTEMOS 2027",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retiro VOLTEMOS 2027",
    description: "Um tempo para desacelerar e conectar-se com Deus.",
    images: ["https://retirovoltemos.vercel.app/og-image.png"],
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
