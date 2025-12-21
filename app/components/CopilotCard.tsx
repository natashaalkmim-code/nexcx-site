// components/CopilotCard.tsx
"use client";

export default function CopilotCard() {
  return (
    <div className="w-full max-w-[392px] mx-auto rounded-[34px] overflow-hidden shadow-xl bg-white">
      {/* Ilustração no topo */}
      <div className="w-full h-auto">
        <img
          src="/imagens/Ilustracao.png"
          alt="Ilustração NexCX"
          className="w-full h-auto block"
          draggable={false}
        />
      </div>

      {/* Bloco azul */}
      <div className="bg-[#292673] text-white px-6 pt-10 pb-10 text-center flex flex-col min-h-[380px]">
        {/* Seta branca */}
        <div className="flex justify-center mb-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Texto grande */}
        <div className="mb-6 text-[28px] leading-tight font-extrabold uppercase tracking-wide">
          Precisando de <br />
          um copiloto para <br />
          transformar sua <br />
          empresa?
        </div>

        {/* Botão */}
        <div className="mt-auto">
          <a
            href="#contato"
            className="inline-block border-2 border-white px-6 py-2 rounded-full text-sm font-extrabold hover:bg-white hover:text-[#292673] transition"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </div>
  );
}
2. 📄 page.tsx deve importar e renderizar o CopilotCard:
tsx
Copiar código
import CopilotCard from "../components/CopilotCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] flex items-center justify-center p-6">
      <CopilotCard />
    </main>
  );
}