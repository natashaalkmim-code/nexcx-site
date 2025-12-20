"use client";

import { useMemo, useState } from "react";

type ToggleItem = {
  title: string;
  body: string;
};

export default function Home() {
  const services = useMemo<ToggleItem[]>(
    () => [
      {
        title: "Mapeamento de processos",
        body:
          "A gente desenha o fluxo real (o que acontece de verdade), encontra gargalos e define o caminho mais curto pra tirar ruído do sistema.",
      },
      {
        title: "Rotina operacional + rituais de acompanhamento",
        body:
          "Estruturamos cadências, responsáveis e checkpoints pra decisão parar de depender de memória, feeling e urgência.",
      },
      {
        title: "Experiência do cliente (CX) aplicada",
        body:
          "Ajuste de jornada, comunicação e handoffs. Menos atrito, menos retrabalho, mais clareza pro time e pro cliente.",
      },
    ],
    []
  );

  const [openService, setOpenService] = useState<number | null>(0);

  return (
    <main className="max-w-[392px] mx-auto bg-white min-h-screen">
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
        {/* seta em cima, alinhada à esquerda */}
        <img
          src="/imagens/Seta.png"
          alt=""
          className="w-6 h-auto"
          draggable={false}
        />

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

      {/* O QUE FAZEMOS */}
      <section className="px-8 py-12 space-y-6">
        <h2 className="text-[#292673] text-[18px] font-semibold">
          O que fazemos
        </h2>

        <p className="text-[15px] leading-6">
          Transformamos os <strong>processos internos</strong> e a{" "}
          <strong>experiência dos clientes</strong> com clareza, método e
          acompanhamento real.
        </p>

        <p className="text-[15px] leading-6">
          Enquanto você dirige, a NexCX lê o painel, aponta riscos e ajusta o
          trajeto.
        </p>
      </section>

      {/* SERVIÇOS (FUNDO AZUL + CARDS BRANCOS COM TOGGLE) */}
      <section className="bg-[#292673] px-6 py-10">
        <div className="space-y-3">
          {services.map((item, idx) => {
            const isOpen = openService === idx;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenService(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="text-[#292673] font-semibold text-[15px]">
                    {item.title}
                  </span>

                  <span
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    {/* chevron */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#292673]"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] leading-6 text-[#292673]/90">
                    {item.body}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTATO (sem título "Contatos", com logo no lugar do nome) */}
      <section id="contato" className="px-8 py-12 space-y-6">
        <div className="flex items-center">
          <img
            src="/imagens/Logo.png"
            alt="NexCX"
            className="h-8 w-auto"
            draggable={false}
          />
        </div>

        <div className="space-y-3">
          <a
            href="#"
            className="block rounded-2xl border border-[#292673]/20 px-4 py-3 text-[#292673] font-medium"
          >
            WhatsApp
          </a>
          <a
            href="#"
            className="block rounded-2xl border border-[#292673]/20 px-4 py-3 text-[#292673] font-medium"
          >
            E-mail
          </a>
          <a
            href="#"
            className="block rounded-2xl border border-[#292673]/20 px-4 py-3 text-[#292673] font-medium"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
