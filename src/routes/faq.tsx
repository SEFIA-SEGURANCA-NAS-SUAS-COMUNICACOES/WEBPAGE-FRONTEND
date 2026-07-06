import { createFileRoute } from "@tanstack/react-router";
import { Layout, Icon } from "@/components/layout";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.question) {
      setSubmitted(true);
      setFormData({ name: "", email: "", question: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const faqs = [
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
    {
      q: "Como posso denunciar um número suspeito?",
      a: "Através da aplicação móvel ou do nosso portal, basta inserir o número e os detalhes da tentativa de fraude. A informação será analisada e disponibilizada para a rede instantaneamente.",
    },
    {
      q: "A minha identidade é revelada ao fazer uma denúncia?",
      a: "Não. Todas as denúncias são anónimas. O SEFIA protege a identidade dos utilizadores e usa os dados apenas para criar inteligência coletiva contra fraudes.",
    },
  ];

  return (
    <Layout>
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-16 sm:mb-20 pt-10">
          <h1 className="font-heading font-bold text-white mb-4 text-4xl sm:text-5xl">
            Ajuda & Perguntas Frequentes
          </h1>
          <div className="h-1 w-20 bg-primary-fixed-dim mx-auto rounded-full mb-6" />
          <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto">
            Encontre respostas para as suas dúvidas sobre a plataforma ou envie uma nova questão para a nossa equipa.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* FAQ List */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-2xl font-semibold font-heading text-white mb-6">Perguntas Comuns</h2>
            {faqs.map((f, i) => (
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

          {/* Form */}
          <div className="lg:col-span-2 relative">
            <div className="glass-card p-8 rounded-3xl border border-white/10 sticky top-32">
              <h3 className="text-xl font-heading font-bold text-white mb-2">Não encontrou o que procurava?</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Envie a sua pergunta. A nossa equipa de suporte responderá o mais breve possível.
              </p>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-start gap-3">
                  <Icon name="check_circle" className="text-green-500 shrink-0" />
                  <p className="text-sm">A sua questão foi enviada com sucesso! Entraremos em contacto em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-on-surface-variant mb-1">
                      Mensagem / Questão
                    </label>
                    <textarea
                      id="question"
                      required
                      rows={4}
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-fixed-dim transition-all resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-3 px-6 rounded-xl transition-colors mt-2"
                  >
                    Enviar Questão
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
