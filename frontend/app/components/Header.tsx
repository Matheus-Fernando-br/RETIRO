"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-xl lg:left-20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        {/* Identificação */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-xs sm:tracking-[0.25em]">
            Retiro 2026
          </p>

          <p className="text-sm font-semibold text-gray-900 sm:text-base">
            Um tempo para Deus
          </p>
        </div>

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
