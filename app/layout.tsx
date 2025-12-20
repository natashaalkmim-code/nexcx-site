import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "NexCX",
  description: "NexCX",
  viewport,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[var(--background)]">
        <div className="min-h-screen flex items-start justify-center py-6">
          <div className="w-full max-w-[420px] bg-white rounded-[22px] overflow-hidden shadow-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
