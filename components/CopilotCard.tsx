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
          className="w-full h-auto block max-h-[400px] object-cover"
          draggable={false}
        />
      </div>

      {/* Bloco azul */}
<div className="bg-[#292673] text-white px-6 pt-10 pb-10 text-center flex flex-col min-h-[380px] justify-between">
  {/* Seta branca */}
  <div className="flex justify-center">
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V21M12 21L5 14M12 21L19 14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  {/* Texto */}
  <p className="font-black text-[32px] md:text-[36px] leading-tight mt-6">
    PRECISANDO DE <br />
    UM COPILOTO PARA <br />
    TRANSFORMAR SUA <br />
    EMPRESA?
  </p>

  {/* Botão */}
  <div className="pt-6">
    <button className="px-4 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#292673] transition">
      Vamos conversar
    </button>
  </div>
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