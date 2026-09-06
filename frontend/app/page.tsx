"use client";

import { useState } from "react";

import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Info from "@/app/components/Info";
import Schedule from "@/app/components/Schedule";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="lg:pl-20">
        <Header onMenuClick={() => setMenuOpen(true)} />

        <main>
          <Hero />
          <About />
          <Info />
          <Schedule />
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
}
