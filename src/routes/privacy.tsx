import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <Layout>
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-blue max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading mb-8 text-white">
            Política de Privacidade e Proteção de Dados — SEFIA
          </h1>
          <p className="mb-10 text-on-surface-variant text-lg leading-relaxed">
            No SEFIA, a privacidade e a segurança dos dados dos nossos utilizadores são pilares fundamentais. Esta
            Política de Privacidade explica como recolhemos, processamos, armazenamos e protegemos os seus dados, em
            estrito cumprimento da <strong className="text-white">Lei n.º 22/11 (Lei da Proteção de Dados de Caráter Pessoal)</strong> de Angola.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            1. Princípio da Minimização e Propósito
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA recolhe apenas os dados estritamente necessários para o funcionamento e melhoria do ecossistema de
            proteção coletiva. Não vendemos, comercializamos nem partilhamos os seus dados pessoais com terceiros para
            fins publicitários.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            2. Que Dados Recolhemos e Como os Utilizamos?
          </h2>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-4">
            <li>
              <strong className="text-white">Dados de Identificação de Chamadas e SMS:</strong> Para fornecer alertas em
              tempo real e análise inteligente, a aplicação processa os números de chamadas recebidas e o texto de
              mensagens SMS suspeitas.
            </li>
            <li>
              <strong className="text-white">Dados de Denúncias:</strong> Quando reporta um número ou uma burla,
              recolhemos o número denunciado, o tipo de fraude (Burla, <em>Phishing</em>, Fraude Financeira, Links
              Suspeitos) e eventuais evidências textuais que decida partilhar.
            </li>
            <li>
              <strong className="text-white">Metadados Técnicos:</strong> Informações básicas sobre o dispositivo
              (modelo, sistema operativo) para garantir a estabilidade e segurança da aplicação.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            3. Como Protegemos os Seus Dados?
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Implementamos uma arquitetura de segurança avançada concebida para proteger a integridade das comunicações em
            Angola:
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-4">
            <li>
              <strong className="text-white">Anonimização e Pseudonimização:</strong> Os dados recolhidos para análise
              de reputação são desassociados da identidade do utilizador que os enviou. A comunidade sabe que um número
              foi denunciado <em>X</em> vezes, mas nunca saberá <em>quem</em> o denunciou.
            </li>
            <li>
              <strong className="text-white">Criptografia de Ponta a Ponta:</strong> Toda a transmissão de dados entre o
              seu dispositivo e os nossos servidores é encriptada utilizando protocolos seguros (HTTPS/TLS).
            </li>
            <li>
              <strong className="text-white">Processamento Inteligente Isolado:</strong> A análise de SMS por
              Inteligência Artificial é feita em ambientes seguros e isolados. O conteúdo dos SMS legítimos não é
              armazenado nem lido por humanos; serve apenas para o veredicto imediato do algoritmo de segurança.
            </li>
            <li>
              <strong className="text-white">Controlo de Acesso Estrito:</strong> O acesso às bases de dados consolidadas
              é limitado exclusivamente a engenheiros autorizados e equipas de segurança do SEFIA, sob rigorosos acordos
              de confidencialidade.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            4. Partilha Legítima de Dados
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Como plataforma de inteligência coletiva, o SEFIA transforma dados isolados em segurança pública. Poderemos
            partilhar dados estatísticos e padrões de fraude consolidados com:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-3">
            <li>Autoridades policiais e reguladoras (em caso de mandado legal ou investigação de crimes cibernéticos);</li>
            <li>
              Instituições financeiras e operadoras de telecomunicações parceiras, com o objetivo exclusivo de bloquear
              redes de fraude e proteger a sociedade.
            </li>
          </ul>
          <p className="mb-10 text-on-surface-variant text-sm italic">
            *Nota: Nestas partilhas, os dados pessoais dos utilizadores denunciantes permanecem totalmente anónimos.*
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            5. Direitos do Utilizador
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            De acordo com a legislação angolana, assiste-lhe o direito de:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-3">
            <li>Aceder aos dados pessoais que possuímos sobre si;</li>
            <li>Solicitar a retificação ou atualização de dados incorretos;</li>
            <li>Solicitar a eliminação da sua conta e dos dados pessoais a ela associados.</li>
          </ul>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Para exercer estes direitos, basta contactar a nossa equipa de Proteção de Dados através do e-mail de
            suporte disponibilizado na plataforma.
          </p>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            6. Retenção de Dados
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Os dados de denúncias são mantidos na nossa base de dados ativa enquanto forem necessários para proteger a
            comunidade contra ameaças ativas. Se um número for considerado seguro após verificações, o seu histórico será
            atualizado ou removido.
          </p>

          <p className="mb-10 text-on-surface-variant leading-relaxed font-medium">
            Ao utilizar o SEFIA, consente com o processamento dos dados nos moldes aqui estabelecidos.
          </p>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-on-surface-variant/60 italic">Última atualização: Julho de 2026.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
