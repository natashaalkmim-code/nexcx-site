import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NexCX",
  description: "NexCX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Fundo geral (fora do “site”) */}
        <div className="app-shell">
          {/* “Site” = mesma largura da ilustração */}
          <div className="app-frame">{children}</div>
        </div>
      </body>
    </html>
  );
}