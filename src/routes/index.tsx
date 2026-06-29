import { createFileRoute } from "@tanstack/react-router";
import sefiaLogo from "@/assets/sefia-logo.png";


export const Route = createFileRoute("/")({
  component: Index,
});

function Icon({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} style={style}>
      {name}
    </span>
  );
}

const HERO_MOCKUP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCPoOcOaSDNPigiG6ZI99U2fsQALpVPsM_xlgJArHBqv5rPYBo9fx19MLu2RzgS3g_HRSjdIx3zAYhZm_9TcZFdfMMGOnoYCeUxugZXEzW68urEAVLnB5kkniO2S1ef2VJ-E4egmMqHEhpWci2EwBNwhbfBBPYzhWQ99JoWGyVsqbuoggb5Ww_ARajF-OTsYj1qfvbfBYWXQykJxh6-L4jx6s4aOcMEq_PP2podPXLrBBdH8Z-0XjXlec1juabnCdPlM9_h8rTn3r1F";

function Index() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopNav */}
      <header className="fixed top-0 w-full z-50 flex justify-center h-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-margin-page">
        <div className="w-full max-w-container-max flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={sefiaLogo}
              alt="SEFIA"
              className="h-9 w-auto transition-transform group-hover:scale-110 drop-shadow-[0_0_12px_rgba(170,199,255,0.25)]"
            />
            <span className="font-display text-2xl font-bold text-white tracking-tight">SEFIA</span>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium text-on-surface hover:text-primary-fixed-dim transition-colors" href="#">Sobre</a>
            <a className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors" href="#como-funciona">Como Funciona</a>
            <a className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors" href="#publico-alvo">Público-Alvo</a>
            <a className="text-sm font-medium text-on-surface-variant hover:text-white transition-colors" href="#">Denunciar</a>
          </nav>
          <div className="md:hidden">
            <Icon name="menu" className="text-white" style={{ fontSize: 28 }} />
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-20 sm:py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 hero-gradient -z-20" />
          <div className="absolute inset-0 security-mesh -z-10" />
          <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-fixed-dim text-xs font-semibold backdrop-blur-md mb-8">
              <span className="font-emoji text-base leading-none">🇦🇴</span>
              <span className="tracking-wide">A PRIMEIRA LINHA DE DEFESA EM ANGOLA</span>
            </div>
            <h1 className="font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
              Segurança Inteligente <br className="hidden md:block" /> para suas Comunicações
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-on-primary-fixed-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              Transformando denúncias em inteligência coletiva. O SEFIA protege cidadãos e instituições através de verificação de ameaças em tempo real.
            </p>
            <div className="relative mb-12 group">
              <span className="font-heading text-base sm:text-lg italic text-white/90 tracking-wide px-4">
                "Mais segurança nas suas comunicações!"
              </span>
              <div className="accent-underline mt-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-4">
              <a className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl border border-white/10 transition-all hover:-translate-y-1 shadow-xl" href="#">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1-60.1L104.6 499l220.7-221.3z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">Disponível no</div>
                  <div className="font-bold text-base sm:text-lg leading-none">Google Play</div>
                </div>
              </a>
              <a className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl border border-white/10 transition-all hover:-translate-y-1 shadow-xl" href="#">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">Baixar na</div>
                  <div className="font-bold text-base sm:text-lg leading-none">App Store</div>
                </div>
              </a>
            </div>
            <div className="mt-12 sm:mt-16 w-full max-w-sm sm:max-w-sm md:max-w-sm mx-auto">
              <img
                alt="SEFIA App Mockup"
                className="phone-mockup phone-mockup-shadow rounded-[3rem] border-8 border-white/5 mx-auto"
                src={HERO_MOCKUP}
              />
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-24 sm:py-32 bg-surface-dim">
          <div className="max-w-container-max mx-auto px-margin-page">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="font-heading font-bold text-white mb-4 text-3xl sm:text-4xl md:text-[36px]">Como Funciona</h2>
              <div className="h-1 w-20 bg-primary-fixed-dim mx-auto rounded-full mb-6" />
              <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto">
                Proteção automatizada que analisa SMS e chamadas em tempo real através de 4 camadas de inteligência.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { n: "01", icon: "call_received", title: "Recepção", desc: "Intercetamos metadados de comunicações recebidas para análise imediata no seu dispositivo." },
                { n: "02", icon: "verified_user", title: "Análise", desc: "Verificação cruzada inteligente com a nossa base de dados global e colaborativa." },
                { n: "03", icon: "rule", title: "Classificação", desc: "O nível de risco é determinado em milissegundos por algoritmos avançados de IA." },
                { n: "04", icon: "notifications_active", title: "Alerta", desc: "Receba uma notificação instantânea clara se uma ameaça for detetada." },
              ].map((s) => (
                <div key={s.n} className="glass-card p-8 sm:p-10 rounded-2xl group hover:border-primary-fixed-dim transition-all hover:-translate-y-2">
                  <div className="text-5xl font-extrabold text-white/5 mb-6 group-hover:text-primary-fixed-dim/20 transition-colors">{s.n}</div>
                  <Icon name={s.icon} className="text-primary-fixed-dim mb-6" style={{ fontSize: 36 }} />
                  <h4 className="font-heading text-white text-xl mb-3">{s.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Público-Alvo */}
        <section id="publico-alvo" className="py-24 sm:py-32 bg-background relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-page relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="font-heading font-bold text-white mb-6 text-3xl sm:text-4xl md:text-[36px] leading-tight">
                  Protegendo todos os <br className="hidden sm:block" />pilares da sociedade
                </h2>
                <p className="text-base sm:text-lg text-on-surface-variant mb-10 sm:mb-12">
                  A rede SEFIA é uma infraestrutura de segurança versátil, desenhada para proteger desde o cidadão comum até as maiores corporações do país.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {[
                    { icon: "person", title: "Cidadãos", desc: "Proteção pessoal contra burlas e phishing diário." },
                    { icon: "business", title: "Empresas", desc: "Proteção contra engenharia social e faturas falsas." },
                    { icon: "account_balance", title: "Bancos", desc: "Prevenção ativa de roubo de credenciais de clientes." },
                    { icon: "cell_tower", title: "Operadoras", desc: "Mitigação de tráfego malicioso na rede nacional." },
                  ].map((t) => (
                    <div key={t.title} className="flex flex-col gap-3">
                      <Icon name={t.icon} className="text-primary-fixed-dim" style={{ fontSize: 30 }} />
                      <h5 className="font-heading text-white text-lg">{t.title}</h5>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
                  <Icon name="verified_user" className="text-white" style={{ fontSize: 300 }} />
                </div>
                <h4 className="font-heading font-bold text-white text-2xl mb-6 relative z-10">Segurança de Nível Institucional</h4>
                <p className="text-on-surface-variant mb-8 sm:mb-10 relative z-10 leading-relaxed">
                  Utilizamos padrões internacionais de encriptação e tratamento ético de dados, garantindo que a inteligência colhida sirva exclusivamente para a proteção da nossa comunidade.
                </p>
                <ul className="space-y-5 relative z-10">
                  {[
                    "Conformidade com a Proteção de Dados",
                    "Encriptação End-to-End Padrão Militar",
                    "Reportes em Tempo Real 24/7",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-primary-fixed-dim/10 flex items-center justify-center group-hover:bg-primary-fixed-dim/20 transition-colors">
                        <Icon name="check" className="text-primary-fixed-dim" style={{ fontSize: 20 }} />
                      </div>
                      <span className="text-white font-medium">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 sm:py-32 bg-surface-dim">
          <div className="max-w-3xl mx-auto px-margin-page">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-heading font-bold text-white mb-4 text-3xl sm:text-4xl md:text-[36px]">Perguntas Frequentes</h2>
              <p className="text-on-surface-variant">Esclareça as suas dúvidas sobre a maior rede de segurança de Angola.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: "O que é o SEFIA?", a: "O SEFIA é o primeiro Sistema de Inteligência Colaborativa Contra Fraudes em Angola. É uma plataforma que utiliza a força da comunidade e inteligência artificial para identificar e alertar sobre fraudes telefónicas e digitais em tempo real.", open: true },
                { q: "Como funciona a análise de SMS?", a: "Ao receber uma mensagem suspeita, o sistema analisa links, padrões de linguagem e o histórico do remetente na nossa base de dados. O utilizador recebe um veredito de risco imediato para evitar cair em burlas." },
                { q: "O SEFIA é gratuito?", a: "Sim, o acesso básico à plataforma para denúncias e consultas de segurança é gratuito para todos os cidadãos angolanos, como parte da nossa missão de utilidade pública e segurança nacional." },
              ].map((f, i) => (
                <details key={i} open={f.open} className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all">
                  <summary className="flex justify-between items-center gap-4 p-6 sm:p-7 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="font-heading text-base sm:text-lg text-white">{f.q}</span>
                    <Icon name="expand_more" className="text-primary-fixed-dim group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-on-surface-variant leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 pt-20 sm:pt-24 pb-12">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-16 sm:mb-20">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <img src={sefiaLogo} alt="SEFIA" className="h-8 w-auto" />
                <span className="font-display text-2xl font-bold text-white tracking-tight">SEFIA</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 sm:mb-8">
                Liderando a luta contra a fraude digital em Angola através da tecnologia de ponta e união nacional.
              </p>
              <a href="mailto:suporte@sefia.ao" className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors group">
                <Icon name="mail" className="text-sm group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">suporte@sefia.ao</span>
              </a>
            </div>

            <div>
              <h5 className="text-white font-heading text-xs uppercase tracking-widest mb-6 sm:mb-8">Plataforma</h5>
              <ul className="space-y-4">
                {["Sobre Nós", "Como Funciona", "Denunciar Burla", "Portal Web"].map((l) => (
                  <li key={l}><a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-heading text-xs uppercase tracking-widest mb-6 sm:mb-8">Suporte & Legal</h5>
              <ul className="space-y-4">
                {["Privacidade", "Termos de Uso", "Prevenção de Fraudes", "Ajuda & FAQ"].map((l) => (
                  <li key={l}><a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-heading text-xs uppercase tracking-widest mb-6 sm:mb-8">Conecte-se</h5>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1 group">
                    <svg className="w-5 h-5 text-on-surface-variant group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
            <p>© 2025 SEFIA. Todos os direitos reservados. Luanda, Angola.</p>
            <p>Desenvolvido com inteligência coletiva <span className="font-emoji">🇦🇴</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
