import "./globals.css";

export const metadata = {
  title: "Lucro Invisível",
  description: "Diagnóstico financeiro moderno"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
