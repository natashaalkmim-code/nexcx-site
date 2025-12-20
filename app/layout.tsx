import "./globals.css";

export const metadata = {
  title: "NexCX",
  description: "NexCX",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#F4F1E9]">
        <div className="min-h-screen flex justify-center px-3 py-6">
          <div className="w-full max-w-[420px] bg-white rounded-[28px] overflow-hidden shadow-md">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
