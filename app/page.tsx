const WHATSAPP_NUMBER = "5511939479749"; // +55 11 93947-9749

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Topbar */}
      <header className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black/30">
            {/* sua logo: coloque em /public/logo.png */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Lucro Invisível" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Lucro Invisível</p>
            <p className="text-xs text-white/60">Diagnóstico financeiro moderno</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Quero entrar como fundador no Lucro Invisível.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            WhatsApp
          </a>
          <a
            href="#fundadores"
            className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            Quero ser fundador
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            Turma fechada • 100 fundadores
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Saia do sufoco financeiro com um{" "}
            <span className="text-emerald-400">diagnóstico simples</span> e missões semanais.
          </h1>

          <p className="mt-4 text-white/70">
            Você entra, faz o diagnóstico e recebe a primeira missão grátis. Depois,
            liberamos as próximas semana a semana para membros.
          </p>

          <div id="fundadores" className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Quero entrar como fundador (R$ 9,90/mês). Me manda o passo a passo.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-bold text-black hover:opacity-90"
            >
              Entrar como fundador agora
            </a>
            <a
              href={waLink("Quero entrar na lista de reserva gratuita do Lucro Invisível.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              Lista de reserva grátis
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Fundadores</p>
              <p className="mt-1 text-2xl font-extrabold">100</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Preço fundador</p>
              <p className="mt-1 text-2xl font-extrabold">R$ 9,90</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Plano anual</p>
              <p className="mt-1 text-2xl font-extrabold">R$ 97</p>
            </div>
          </div>
        </div>

        {/* Visual forte (imagem + cards) */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.25),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="relative">
            <p className="text-sm font-semibold text-white/80">
              Visual do problema (pra bater na emoção)
            </p>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-white/60">Cenário comum</p>
                <p className="mt-1 text-sm">
                  Boletos vencendo, cartão estourado, ansiedade e zero clareza do que pagar primeiro.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Meta do método</p>
                  <p className="mt-1 text-lg font-bold text-emerald-300">clareza + ação</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs text-white/60">Ritmo</p>
                  <p className="mt-1 text-lg font-bold">1 missão/semana</p>
                </div>
              </div>

              <a
                href={waLink("Quero fazer o diagnóstico financeiro moderno agora.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-bold text-black hover:opacity-90"
              >
                Fazer o diagnóstico agora (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé simples */}
      <footer className="mt-14 border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} Lucro Invisível. Todos os direitos reservados.
      </footer>
    </main>
  );
}
