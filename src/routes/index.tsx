import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import sefiaLogo from "@/assets/sefia-logo.png";
import smartphone from "@/assets/smartphones.png";
import mulher from "@/assets/mulher.png";
import { DownloadModal } from "@/components/download-modal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Icon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`material-symbols-outlined ${className ?? ""}`} style={style}>
      {name}
    </span>
  );
}

function Index() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((value) => !value);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Público-Alvo", href: "#publico-alvo" },
    { label: "Perguntas-Frequentes", href: "#faq" },
    { label: "Denunciar", href: "#" },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopNav */}
      <header className="fixed top-0 w-full z-50 flex justify-center h-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-margin-page">
        <div className="w-full max-w-container-max flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={sefiaLogo}
              alt="SEFIA"
              className="h-18 w-auto transition-transform group-hover:scale-110 drop-shadow-[0_0_12px_rgba(170,199,255,0.25)]"
            />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.label === "Denunciar" ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={openDownloadModal}
                  aria-haspopup="dialog"
                  className="text-sm font-medium text-on-surface hover:text-primary-fixed-dim transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  className="text-sm font-medium text-on-surface hover:text-primary-fixed-dim transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-full p-2 text-white focus:outline-none"
            >
              <Icon
                name={mobileMenuOpen ? "close" : "menu"}
                className="text-white"
                style={{ fontSize: 28 }}
              />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        >
          <div className="absolute right-0 top-0 h-full w-[90vw] max-w-[320px] bg-surface p-6 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Fechar menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim focus:ring-offset-2 focus:ring-offset-surface"
              >
                <Icon name="close" className="text-white" style={{ fontSize: 24 }} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.label === "Denunciar" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => {
                      closeMobileMenu();
                      openDownloadModal();
                    }}
                    aria-haspopup="dialog"
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-on-surface hover:bg-white/5 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    onClick={closeMobileMenu}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-on-surface hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>
          </div>
        </div>
      ) : null}

      <main className="pt-20">
        <DownloadModal open={downloadModalOpen} onClose={closeDownloadModal} />
        {/* Hero */}
        <section className="relative min-h-[90vh] py-20 sm:py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 hero-gradient -z-20" />
          <div className="absolute inset-0 security-mesh -z-10" />

          <div className="max-w-container-max mx-auto px-margin-page relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end mb-10 lg:mb-0">
                <div className="relative w-[280px] sm:w-[340px] md:w-[460px] lg:w-[520px]">
                  {/* LIGHT FOCUS (vindo do centro do smartphone) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[60%] h-[60%] bg-primary-fixed/30 blur-[45px] rounded-full" />
                  </div>

                  {/* CORE LIGHT (mais intenso no centro) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[30%] h-[30%] bg-primary-fixed/40 blur-[25px] rounded-full" />
                  </div>

                  {/* IMAGE */}
                  <img
                    src={smartphone}
                    alt="SEFIA App Mockup"
                    className="relative w-full h-auto mx-auto md:mx-0 md:scale-105 lg:scale-110"
                  />
                </div>
              </div>

              <div className="order-2 lg:order-1 text-center lg:text-left lg:pr-8">
                <h1 className="font-display font-extrabold text-white mb-6 leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-5xl lg:text-[60px]">
                  Proteja-se Antes da Fraude Acontecer
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-on-primary-fixed-variant max-w-xl mx-auto lg:mx-0 mb-5 leading-relaxed">
                  Cada denúncia torna a comunidade mais segura. O SEFIA identifica ameaças e combate
                  fraudes em tempo real.
                </p>

                <div className="mb-6 flex justify-center lg:justify-start">
                  <span className="font-heading text-base sm:text-lg italic text-white/90 tracking-wide px-4">
                    "Mais segurança nas suas comunicações!"
                  </span>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-4">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={openDownloadModal}
                    className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl border border-white/10 transition-all hover:-translate-y-1 shadow-xl"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1-60.1L104.6 499l220.7-221.3z" />
                    </svg>

                    <div className="text-center lg:text-left">
                      <div className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">
                        Disponível no
                      </div>
                      <div className="font-bold text-base sm:text-lg leading-none">Google Play</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={openDownloadModal}
                    className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl border border-white/10 transition-all hover:-translate-y-1 shadow-xl"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>

                    <div className="text-center lg:text-left">
                      <div className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">
                        Baixar na
                      </div>
                      <div className="font-bold text-base sm:text-lg leading-none">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-24 sm:py-32 bg-surface-dim">
          <div className="max-w-container-max mx-auto px-margin-page">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="font-heading font-bold text-white mb-4 text-3xl sm:text-4xl md:text-[36px]">
                Como Funciona
              </h2>
              <div className="h-1 w-20 bg-primary-fixed-dim mx-auto rounded-full mb-6" />
              <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto">
                Proteção automatizada que analisa SMS e chamadas em tempo real através de 4 camadas
                de inteligência.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  n: "01",
                  icon: "call_received",
                  title: "Recepção",
                  desc: "Quando recebe uma chamada ou SMS, o SEFIA inicia automaticamente a análise do contacto.",
                },
                {
                  n: "02",
                  icon: "verified_user",
                  title: "Verificação",
                  desc: "O número é comparado com denúncias, listas de risco e informações da comunidade.",
                },
                {
                  n: "03",
                  icon: "rule",
                  title: "Avaliação",
                  desc: "As camadas de inteligência calculam o nível de confiança e risco do contacto.",
                },
                {
                  n: "04",
                  icon: "notifications_active",
                  title: "Alerta",
                  desc: "Se houver sinais de fraude ou atividade suspeita, recebe um aviso em tempo real.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="glass-card p-8 sm:p-10 rounded-2xl group hover:border-primary-fixed-dim transition-all hover:-translate-y-2"
                >
                  <div className="text-5xl font-extrabold text-white/5 mb-6 group-hover:text-primary-fixed-dim/20 transition-colors">
                    {s.n}
                  </div>
                  <Icon
                    name={s.icon}
                    className="text-primary-fixed-dim mb-6"
                    style={{ fontSize: 36 }}
                  />
                  <h4 className="font-heading text-white text-xl mb-3">{s.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Público-Alvo */}
        <section
          id="publico-alvo"
          className="pt-24 sm:pt-32 pb-0 lg:py-32 bg-background relative overflow-hidden"
        >
          <div className="max-w-container-max mx-auto px-margin-page relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Texto */}
              <div className="order-1">
                <h2 className="font-heading font-bold text-white mb-6 text-3xl sm:text-4xl md:text-[36px] leading-tight">
                  Protegendo todos os <br className="hidden sm:block" />
                  pilares da sociedade
                </h2>

                <p className="text-base sm:text-lg text-on-surface-variant mb-10 sm:mb-12">
                  A rede SEFIA é uma infraestrutura de segurança versátil, desenhada para proteger
                  desde o cidadão comum até as maiores corporações do país.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  {[
                    {
                      icon: "person",
                      title: "Cidadãos",
                      desc: "Proteção no dia a dia contra chamadas, SMS e links suspeitos que tentam enganar ou roubar dados.",
                    },
                    {
                      icon: "business",
                      title: "Empresas",
                      desc: "Defesa contra fraudes digitais, falsas cobranças e tentativas de manipular funcionários.",
                    },
                    {
                      icon: "account_balance",
                      title: "Bancos",
                      desc: "Redução de ataques que tentam capturar credenciais e enganar clientes através de engenharia social.",
                    },
                    {
                      icon: "cell_tower",
                      title: "Operadoras",
                      desc: "Identificação de padrões suspeitos e bloqueio de tráfego malicioso na rede.",
                    },
                  ].map((t) => (
                    <div key={t.title} className="flex flex-col gap-3">
                      <Icon
                        name={t.icon}
                        className="text-primary-fixed-dim"
                        style={{ fontSize: 30 }}
                      />
                      <h5 className="font-heading text-white text-lg">{t.title}</h5>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagem */}
              <div className="order-2 mt-1 lg:mt-0 flex justify-center lg:justify-end -mx-6 sm:mx-0">
                <div className="w-full sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px]">
                  <img
                    src={mulher}
                    alt="Usuária SEFIA"
                    className="w-full h-auto object-cover rounded-t-[2rem] lg:rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 sm:py-32 bg-surface-dim" id="faq">
          <div className="max-w-3xl mx-auto px-margin-page">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-heading font-bold text-white mb-4 text-3xl sm:text-4xl md:text-[36px]">
                Perguntas Frequentes
              </h2>
              <p className="text-on-surface-variant">
                Esclareça as suas dúvidas sobre a maior rede de segurança de Angola.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "O que é o SEFIA?",
                  a: "O SEFIA é uma plataforma de segurança digital em Angola que usa IA e colaboração da comunidade para detetar e prevenir fraudes em tempo real.",
                  open: true,
                },
                {
                  q: "Como funciona a análise de chamadas?",
                  a: "O sistema verifica se o número já foi reportado, cruza dados da comunidade e atribui um nível de risco à chamada antes de atender.",
                },
                {
                  q: "Como funciona a análise de SMS?",
                  a: "A mensagem é analisada em busca de links suspeitos, padrões de fraude e histórico do remetente, gerando um alerta de risco imediato.",
                },
                {
                  q: "O SEFIA é gratuito?",
                  a: "Sim. As principais funcionalidades, como consulta e denúncia de fraudes, são totalmente gratuitas para os utilizadores.",
                },
              ].map((f, i) => (
                <details
                  key={i}
                  open={f.open}
                  className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all"
                >
                  <summary className="flex justify-between items-center gap-4 p-6 sm:p-7 cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="font-heading text-base sm:text-lg text-white">{f.q}</span>
                    <Icon
                      name="expand_more"
                      className="text-primary-fixed-dim group-open:rotate-180 transition-transform shrink-0"
                    />
                  </summary>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-on-surface-variant leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Baixe o nosso aplicativo */}
        <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient/20 -z-20" />

          <div className="max-w-container-max mx-auto px-margin-page relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              {/* IMAGEM (ESQUERDA) */}
              <div className="order-1 lg:order-1 flex items-center justify-center lg:justify-start">
                <div className="relative w-[260px] sm:w-[340px] md:w-[460px] lg:w-[520px]">
                  {/* GLOW / BLUR FOCADO NO SMARTPHONE */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[55%] h-[55%] bg-primary-fixed/30 blur-[50px] rounded-full" />
                  </div>

                  {/* CORE LIGHT */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[30%] h-[30%] bg-primary-fixed/40 blur-[30px] rounded-full" />
                  </div>

                  <img
                    src={smartphone}
                    alt="SEFIA App Mockup"
                    className="relative w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* TEXTO (DIREITA) */}
              <div className="order-2 lg:order-2 text-center lg:text-left">
                <h2 className="font-heading font-extrabold text-white mb-4 text-3xl sm:text-4xl md:text-[40px]">
                  Baixe o nosso Aplicativo
                </h2>

                <p className="text-on-surface-variant mb-6 max-w-lg">
                  O SEFIA ajuda a identificar chamadas, mensagens e links suspeitos, reduzindo o
                  risco de fraudes digitais em Angola.
                </p>

                {/* BOTÕES */}
               
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-4">
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={openDownloadModal}
                    className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl border border-white/10 transition-all hover:-translate-y-1 shadow-xl"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1-60.1L104.6 499l220.7-221.3z" />
                    </svg>

                    <div className="text-center lg:text-left">
                      <div className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">
                        Disponível no
                      </div>
                      <div className="font-bold text-base sm:text-lg leading-none">Google Play</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={openDownloadModal}
                    className="flex items-center gap-3 bg-black hover:bg-zinc-900 text-white px-6 py-3 rounded-xl border border-white/10 transition-all hover:-translate-y-1 shadow-xl"
                  >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>

                    <div className="text-center lg:text-left">
                      <div className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-0.5">
                        Baixar na
                      </div>
                      <div className="font-bold text-base sm:text-lg leading-none">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-dim border-t border-white/5 pt-20 sm:pt-24 pb-12">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-16 sm:mb-20">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <img src={sefiaLogo} alt="SEFIA" className="h-8 w-auto" />
                <span className="font-display text-2xl font-bold text-white tracking-tight">
                  SEFIA
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 sm:mb-8">
                Unindo tecnologia e comunidade para identificar ameaças e fortalecer a segurança
                digital nacional.
              </p>
              <a
                href="mailto:team.sefia@sefia.ao"
                className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors group"
              >
                <Icon name="mail" className="text-sm group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">team.sefia@sefia.ao</span>
              </a>
            </div>

            <div>
              <h5 className="text-white font-heading text-xs uppercase tracking-widest mb-6 sm:mb-8">
                Plataforma
              </h5>
              <ul className="space-y-4">
                {["Sobre Nós", "Como Funciona", "Público-Alvo", "Denunciar"].map((l) => {
                  const href =
                    l === "Como Funciona"
                      ? "#como-funciona"
                      : l === "Público-Alvo"
                        ? "#publico-alvo"
                        : l === "Denunciar"
                          ? "#denunciar"
                          : "#";

                  return (
                    <li key={l}>
                      {l === "Denunciar" ? (
                        <button
                          type="button"
                          onClick={openDownloadModal}
                          aria-haspopup="dialog"
                          className="text-on-surface-variant hover:text-white transition-colors text-sm"
                        >
                          {l}
                        </button>
                      ) : (
                        <a
                          href={href}
                          className="text-on-surface-variant hover:text-white transition-colors text-sm"
                        >
                          {l}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-heading text-xs uppercase tracking-widest mb-6 sm:mb-8">
                Suporte & Legal
              </h5>
              <ul className="space-y-4">
                {["Privacidade", "Termos de Uso", "Ajuda & FAQ"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-on-surface-variant hover:text-white transition-colors text-sm"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-heading text-xs uppercase tracking-widest mb-6 sm:mb-8">
                Conecte-se
              </h5>
              <div className="flex gap-3 sm:gap-4">
                {[
                  {
                    label: "Facebook",
                    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  },
                  {
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    label: "LinkedIn",
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1 group"
                  >
                    <svg
                      className="w-5 h-5 text-on-surface-variant group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-left gap-4 text-xs text-on-surface-variant">
            <p>
              © {new Date().getFullYear()} SEFIA. <br /> Todos os direitos reservados. <br />{" "}
              Luanda, Angola.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
