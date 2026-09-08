import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Retiro VOLTEMOS 2027 | Igreja CIA Primavera",

  description:
    "Um tempo para parar, ouvir, lembrar e retornar ao Senhor. Garanta sua vaga no Retiro 2027.",

  metadataBase: new URL("https://retirovoltemos.vercel.app"),

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Retiro VOLTEMOS 2027 — Igreja CIA Primavera",

    description:
      "Um tempo para parar, ouvir, lembrar e retornar ao Senhor. Faça sua inscrição online!",

    url: "https://retirovoltemos.vercel.app",

    siteName: "Retiro CIA Primavera",

    images: [
      {
        url: "/og-image.jpeg",
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

    images: ["https://retirovoltemos.vercel.app/og-image.jpeg"],
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
