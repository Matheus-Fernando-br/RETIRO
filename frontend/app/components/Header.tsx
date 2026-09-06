"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-xl lg:left-20">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-10">
        {/* 1. Esquerda - Logo */}
        <div className="flex items-center">
          <Image
            src="/CIA.PNG"
            alt="Logo"
            width={80}
            height={60}
            style={{ borderRadius: 5 }}
          />
        </div>

        {/* 2. Centro - Título do Retiro */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-xs sm:tracking-[0.25em]">
            Retiro 2027
          </p>
          <p className="text-sm font-semibold text-gray-900 sm:text-base">
            VOLTEMOS
          </p>
        </div>

        {/* 3. Direita - Ações/Menu */}
        <div className="flex items-center gap-3">
          {/* Desktop */}
          <a
            href="/inscricao/etapa-1"
            className="hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:block"
          >
            Quero participar
          </a>

          {/* Mobile */}
          <button
            onClick={onMenuClick}
            aria-label="Abrir menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition hover:bg-gray-200 lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
