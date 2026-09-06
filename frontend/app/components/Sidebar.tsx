"use client";

import {
  CalendarDays,
  Church,
  Home,
  Info,
  MessageCircleQuestion,
  X,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "O Retiro", href: "#sobre", icon: Info },
  { label: "Informações", href: "#informacoes", icon: Church },
  { label: "Programação", href: "#programacao", icon: CalendarDays },
  { label: "Dúvidas", href: "#faq", icon: MessageCircleQuestion },
  {
    label: "Admin",
    href: "/admin/login",
    icon: ShieldCheck,
  },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <button
          aria-label="Fechar menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-[280px]
          border-r border-black/5 bg-white
          transition-transform duration-300
          lg:w-20 lg:translate-x-0 lg:bg-white/80 lg:backdrop-blur-xl
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full w-full flex-col">
          {/* Logo / topo */}
          <div className="flex h-20 items-center justify-between border-b border-black/5 px-5 lg:h-24 lg:justify-center lg:px-0">
            <a
              href="#inicio"
              onClick={onClose}
              className="flex items-center gap-3 lg:justify-center"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                <Church size={21} />
              </div>

              <div className="lg:hidden">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Retiro
                </p>
                <p className="text-sm font-bold text-gray-950">2026</p>
              </div>
            </a>

            {/* Fechar no mobile */}
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-gray-200 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navegação */}
          <nav className="mt-6 flex flex-col gap-2 px-3 lg:mt-8 lg:items-center lg:px-0">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="
                    group flex w-full items-center gap-4 rounded-2xl
                    px-4 py-3.5 text-gray-500
                    transition hover:bg-black hover:text-white
                    lg:w-16 lg:flex-col lg:gap-1.5 lg:px-2 lg:py-3
                  "
                >
                  <Icon size={20} />

                  <span className="text-sm font-medium lg:text-[10px]">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
