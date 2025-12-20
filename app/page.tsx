"use client";

import { useMemo, useState } from "react";

type ToggleItem = {
  title: string;
  body: string;
};

export default function Home() {
  // ... seu useMemo + state (services, openService, etc.)

  return (
    <main className="min-h-screen bg-[#F4F1E9]">
      {/* CONTAINER que define a “largura do site” */}
      <div className="mx-auto w-full max-w-[420px] bg-white">
        {/* HERO IMAGE (SEM CORTE) */}
        <section className="w-full">
          <img
            src="/imagens/Ilustracao.png"
            alt="Ilustração NexCX"
            className="w-full h-auto block"
            draggable={false}
          />
        </section>

        {/* BLOCO AZUL */}
        <section className="bg-[#292673] text-white px-8 py-10 space-y-6">
          <img src="/imagens/Seta.png" alt="" className="w-6 h-auto" draggable={false} />

          <h2 className="uppercase leading-snug tracking-wide text-[22px]">
            Precisando de
            <br />
            um copiloto para
            <br />
            transformar sua
            <br />
            empresa?
          </h2>

          <a
            href="#contato"
            className="inline-flex items-center justify-center border border-white rounded-full px-4 py-2 text-sm font-semibold"
          >
            Vamos conversar
          </a>
        </section>

        {/* resto do seu conteúdo aqui dentro... */}
      </div>
    </main>
  );
}
