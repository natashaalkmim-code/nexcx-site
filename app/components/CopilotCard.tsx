// components/CopilotCard.tsx

"use client";

export default function CopilotCard() {
  return (
    <div className="w-full max-w-[392px] mx-auto rounded-[34px] overflow-hidden shadow-lg">
      {/* Ilustração Topo */}
      <div className="relative w-full h-auto">
        <img
          src="/imagens/Ilustracao.png"
          alt="Ilustração NexCX"
          className="w-full h-auto block"
          draggable={false}
        />
      </div>

      {/* Bloco Azul com texto e botão */}
      <div className="bg-[#292673] text-white px-6 pt-6 pb-10 text-center flex flex-col min-h-[380px]">
        <div className="mb-4 text-3xl md:text-[32px] font-black leading-tight uppercase">
          Precisando de <br />
          um copiloto para <br />
          transformar sua <br />
          empresa?
        </div>

        <div className="mt-auto">
          <a
            href="#contato"
            className="inline-block border-2 border-white text-white px-6 py-2 rounded-full text-sm font-extrabold hover:bg-white hover:text-[#292673] transition"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </div>
  );
}