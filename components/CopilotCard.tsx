'use client';

import Image from 'next/image';
import Illustration from '/public/illustration.png'; // Confirme se o nome está certo

export default function CopilotCard() {
  return (
    <div className="w-[392px] rounded-[34px] shadow-md border border-neutral-300 overflow-hidden">
      <Image
        src={Illustration}
        alt="Ilustração"
        className="w-full h-auto"
        priority
      />
      <div className="bg-[#1E197E] px-6 py-10 flex flex-col items-start justify-between gap-4 min-h-[380px]">
        <div className="w-full text-center">
          <div className="text-white text-xl md:text-[36px] font-black leading-tight">
            PRECISANDO DE<br />
            UM COPILOTO PARA<br />
            TRANSFORMAR SUA<br />
            EMPRESA?
          </div>
        </div>
        <div className="w-full text-center">
          <button className="border border-white rounded-full px-4 py-1 text-white text-xs font-medium hover:bg-white hover:text-[#1E197E] transition">
            Vamos conversar
          </button>
        </div>
      </div>
    </div>
  );
}
