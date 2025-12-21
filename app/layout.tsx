import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NexCX Site",
  description: "Landing page institucional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
