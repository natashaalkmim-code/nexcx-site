// CopilotCard.tsx
export default function CopilotCard() {
  return (
    <div className="max-w-[392px] rounded-[34px] overflow-hidden shadow-md bg-white mx-auto">
      <div className="relative h-[260px] bg-orange-500 flex items-center justify-center">
        {/* Aqui você pode inserir um SVG ou imagem */}
        {/* Imagem/ícones decorativos */}
        <span className="absolute top-4 left-4 w-10 h-10 bg-blue-900 rounded-full"></span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">🚗</span>
      </div>

      <div className="bg-[#1d1a5e] text-white px-6 py-8 text-center">
        <div className="text-2xl md:text-[32px] font-black mb-6 leading-tight">
          PRECISANDO DE <br />
          UM COPILOTO PARA <br />
          TRANSFORMAR SUA <br />
          EMPRESA?
        </div>

        <a
          href="#"
          className="inline-block border border-white text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#1d1a5e] transition"
        >
          Vamos conversar
        </a>
      </div>
    </div>
  );
}