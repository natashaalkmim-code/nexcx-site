import "./globals.css";

export const metadata = {
  title: "NexCX",
  description: "NexCX",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F4F1E9] antialiased">
        {/* fundo geral */}
        <div className="min-h-screen flex justify-center">
          {/* SITE (largura fixa = imagem) */}
          <div className="w-full max-w-[420px] bg-white overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}