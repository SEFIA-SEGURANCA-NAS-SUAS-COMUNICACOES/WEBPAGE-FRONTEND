import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <Layout>
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-blue max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-8 text-white">
            Termos e Condições de Uso — SEFIA
          </h1>
          <p className="mb-10 text-on-surface-variant text-lg leading-relaxed">
            Bem-vindo ao SEFIA (Sistema de Inteligência Colaborativa Contra Fraudes). Ao aceder ou utilizar a nossa
            plataforma, aplicações móveis e serviços, concorda em cumprir e vincular-se aos seguintes Termos e
            Condições de Uso. Se não concordar com algum dos termos descritos, não deverá utilizar os nossos
            serviços.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            1. Descrição do Serviço
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA é uma plataforma colaborativa concebida para combater fraudes telefónicas e digitais através da
            participação ativa da comunidade. O serviço permite aos utilizadores:
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-3">
            <li>Consultar a reputação de números telefónicos reportados;</li>
            <li>Denunciar atividades suspeitas (chamadas e mensagens fraudulentas);</li>
            <li>Receber alertas em tempo real sobre possíveis fraudes e ameaças digitais;</li>
            <li>
              Beneficiar da análise inteligente de SMS baseada em Inteligência Artificial para identificação de
              tentativas de burla (<em>phishing</em>).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            2. Elegibilidade e Registo
          </h2>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Para utilizar certas funcionalidades do SEFIA, poderá ser necessário criar uma conta ou fornecer dados de
            validação. O utilizador compromete-se a fornecer informações exatas, atuais e completas, sendo o único
            responsável por manter a confidencialidade das suas credenciais de acesso.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            3. Utilização Responsável e Colaborativa
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA baseia-se num modelo de <strong>inteligência coletiva</strong>. Ao submeter uma denúncia, o
            utilizador garante que:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-3">
            <li>
              A informação partilhada é verídica, factual e baseada na sua experiência real ou em evidências claras de
              tentativa de fraude;
            </li>
            <li>
              Não submeterá denúncias falsas, de má-fé, difamatórias ou com o intuito de prejudicar a reputação de
              terceiros legítimos;
            </li>
            <li>
              Não utilizará a plataforma para fins comerciais não autorizados ou engenharia reversa do sistema de
              deteção.
            </li>
          </ul>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            O SEFIA reserva-se o direito de suspender ou banir utilizadores que abusem do sistema de denúncias ou
            violem estas regras.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            4. Isenção de Responsabilidade
          </h2>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-5">
            <li>
              <strong className="text-white">Base de Dados Comunitária:</strong> Os alertas e reputações exibidos
              refletem o histórico de denúncias submetidas pela comunidade e o processamento algorítmico do SEFIA. O
              SEFIA atua como um facilitador de segurança, mas não garante a infalibilidade das classificações.
            </li>
            <li>
              <strong className="text-white">Decisão Final:</strong> A decisão de atender uma chamada, responder a um
              SMS ou efetuar uma transação financeira é sempre do utilizador. O SEFIA não se responsabiliza por
              prejuízos resultantes de fraudes que não tenham sido detetadas pelo sistema ou por ações tomadas com base
              nos alertas emitidos.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            5. Propriedade Intelectual
          </h2>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Todos os direitos de propriedade intelectual associados à plataforma SEFIA (incluindo software, algoritmos
            de IA, design, marcas, logótipos e tecnologia de análise) são de propriedade exclusiva dos seus criadores e
            parceiros licenciados.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            6. Modificações dos Termos
          </h2>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Reservamo-nos o direito de atualizar estes Termos e Condições a qualquer momento. As alterações entrarão em
            vigor imediatamente após a sua publicação no site ou aplicação. O uso continuado da plataforma constitui a
            aceitação dos novos termos.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            7. Lei Aplicável e Foro
          </h2>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Estes Termos são regidos e interpretados de acordo com as leis da República de Angola. Para a resolução de
            qualquer litígio emergente do presente contrato, é eleito o foro da Comarca de Luanda.
          </p>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-on-surface-variant/60 italic">Última atualização: Julho de 2026.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
