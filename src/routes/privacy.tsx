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
            Política de Privacidade e Proteção de Dados
          </h1>

          {/* Introdução */}
          <p className="mb-10 text-on-surface-variant text-lg leading-relaxed">
            O SEFIA valoriza a privacidade e segurança dos seus utilizadores. Esta Política de Privacidade explica como os dados são tratados durante a utilização da plataforma, incluindo a utilização da aplicação móvel, funcionalidades de deteção de fraudes, análise inteligente de SMS, monitorização de chamadas e participação na comunidade de segurança contra fraudes.
          </p>
          <p className="mb-10 text-on-surface-variant text-lg leading-relaxed">
            O tratamento dos dados é realizado de acordo com os princípios de segurança, transparência e minimização de dados previstos na legislação aplicável da República de Angola.
          </p>

          {/* Secção 1 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            1. Compromisso do SEFIA com a Privacidade
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA foi desenvolvido para proteger utilizadores contra fraudes telefónicas e digitais. O sistema recolhe apenas dados necessários para fornecer proteção contra ameaças.
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-3">
            <li>O <strong className="text-white">SEFIA não vende dados pessoais</strong>.</li>
            <li>O <strong className="text-white">SEFIA não utiliza dados dos utilizadores para publicidade</strong>.</li>
          </ul>

          {/* Secção 2 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            2. Dados Tratados pelo SEFIA
          </h2>

          <h3 className="text-xl font-semibold font-heading mb-4 text-white">Dados de Cadastro</h3>
          <p className="mb-4 text-on-surface-variant leading-relaxed">
            Quando cria a sua conta, o SEFIA recolhe:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-2">
            <li>Nome completo</li>
            <li>Número de telefone</li>
            <li>Género</li>
            <li>Palavra-passe (armazenada de forma segura através de mecanismos de proteção)</li>
            <li>Data de criação da conta</li>
          </ul>
          <p className="mb-6 text-on-surface-variant leading-relaxed font-medium">
            <strong className="text-white">Finalidade:</strong>
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-2">
            <li>Criar e gerir a sua conta do utilizador</li>
            <li>Permitir autenticação e recuperação de acesso</li>
            <li>Associar denúncias e consultas realizadas por si</li>
          </ul>

          <h3 className="text-xl font-semibold font-heading mb-4 text-white">Dados de Denúncias</h3>
          <p className="mb-4 text-on-surface-variant leading-relaxed">
            Quando denuncia uma fraude, podem ser tratados os seguintes dados:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-2">
            <li>Número telefónico denunciado</li>
            <li>Tipo de fraude identificado:
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Burla</li>
                <li>Falso banco</li>
                <li>Falso emprego</li>
                <li>Falso prémio</li>
                <li>Falso suporte técnico</li>
                <li>Spam</li>
                <li>Outros tipos identificados futuramente</li>
              </ul>
            </li>
            <li>Descrição fornecida pelo utilizador</li>
            <li>Data da denúncia</li>
          </ul>
          <p className="mb-10 text-on-surface-variant leading-relaxed italic bg-white/5 p-4 rounded border-l-4 border-blue-500">
            <strong className="text-white">Importante:</strong> Os números armazenados pelo SEFIA são exclusivamente números denunciados pela comunidade. O SEFIA NÃO armazena nem cria uma base de dados com os números pessoais dos utilizadores.
          </p>

          {/* Secção 3 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            3. Tratamento de SMS através de Inteligência Artificial
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O utilizador pode conceder permissão para análise automática de SMS. Quando uma SMS é recebida, o sistema pode realizar uma leitura momentânea do conteúdo para análise de segurança. A mensagem é analisada por Inteligência Artificial para identificar padrões de fraude, phishing ou mensagens suspeitas.
          </p>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Após a análise, a IA retorna imediatamente um resultado, por exemplo:
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-2">
            <li>"Mensagem segura"</li>
            <li>"Possível tentativa de fraude"</li>
            <li>"Ignorar esta mensagem"</li>
          </ul>
          <p className="mb-6 text-on-surface-variant leading-relaxed italic bg-white/5 p-4 rounded border-l-4 border-red-500">
            <strong className="text-white text-red-400">O SEFIA NÃO ARMAZENA AS SMS DOS UTILIZADORES.</strong> O conteúdo das mensagens é utilizado exclusivamente durante o processo automático de análise de segurança.
          </p>

          {/* Secção 4 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            4. Monitorização de Chamadas e Alertas de Segurança
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O utilizador pode autorizar permissões para monitorização de chamadas. O objetivo é identificar chamadas provenientes de números classificados como suspeitos. Quando uma chamada suspeita é identificada, o utilizador pode receber uma notificação preventiva.
          </p>
          <p className="mb-6 text-on-surface-variant leading-relaxed italic text-blue-300">
            Exemplo: "Este número foi reportado por outros utilizadores do SEFIA."
          </p>
          <p className="mb-10 text-on-surface-variant leading-relaxed italic bg-white/5 p-4 rounded border-l-4 border-red-500">
            <strong className="text-white text-red-400">O SEFIA não grava chamadas telefónicas e não armazena o conteúdo das conversas.</strong>
          </p>

          {/* Secção 5 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            5. Informações do Dispositivo
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Podem ser tratados dados técnicos necessários para o funcionamento, segurança e melhoria da aplicação:
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-2">
            <li>Modelo do dispositivo</li>
            <li>Sistema operativo</li>
            <li>Versão da aplicação</li>
            <li>Outras informações técnicas necessárias para funcionamento e segurança</li>
          </ul>

          {/* Secção 6 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            6. Dados que NÃO são Armazenados pelo SEFIA
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed font-semibold text-white bg-white/5 p-4 rounded">
            O SEFIA NÃO ARMAZENA:
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-2">
            <li>SMS pessoais dos utilizadores</li>
            <li>Conteúdo das conversas telefónicas</li>
            <li>Gravações de chamadas</li>
            <li>Lista completa de contactos do telefone</li>
            <li>Número pessoal utilizado para criar a conta como número denunciado</li>
            <li>Dados bancários ou informações financeiras</li>
          </ul>

          {/* Secção 7 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            7. Como Protegemos os Dados
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA implementa múltiplas camadas de segurança para proteger os seus dados:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-3">
            <li><strong className="text-white">Comunicação segura</strong> utilizando HTTPS/TLS</li>
            <li><strong className="text-white">Proteção das credenciais</strong> através de algoritmos de encriptação modernos</li>
            <li><strong className="text-white">Controlo de acesso interno</strong> restritivo</li>
            <li><strong className="text-white">Monitorização de segurança</strong> contínua</li>
            <li><strong className="text-white">Separação entre identidade</strong> do utilizador e denúncias públicas</li>
          </ul>
          <p className="mb-10 text-on-surface-variant leading-relaxed italic">
            Quando uma denúncia é apresentada de forma anónima, outros utilizadores não conseguem identificar quem realizou a denúncia.
          </p>

          {/* Secção 8 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            8. Partilha de Dados
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA pode utilizar dados estatísticos e informações agregadas para:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-2">
            <li>Melhorar os mecanismos de deteção</li>
            <li>Identificar tendências de fraude</li>
            <li>Produzir alertas de segurança</li>
          </ul>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            <strong className="text-white">O SEFIA nunca partilhará:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-2">
            <li>Dados pessoais dos utilizadores</li>
            <li>SMS privadas</li>
            <li>Conteúdo de chamadas</li>
          </ul>
          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Caso exista obrigação legal, os dados poderão ser fornecidos às autoridades competentes conforme legislação aplicável.
          </p>

          {/* Secção 9 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            9. Direitos do Utilizador
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Como utilizador do SEFIA, pode:
          </p>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-2">
            <li>Consultar os seus dados pessoais</li>
            <li>Atualizar informações da sua conta</li>
            <li>Solicitar eliminação da conta</li>
            <li>Retirar permissões concedidas à aplicação</li>
          </ul>

          {/* Secção 10 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            10. Consentimento e Permissões da Aplicação
          </h2>
          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Ao instalar e utilizar a aplicação SEFIA, o utilizador compreende e aceita que poderá conceder permissões necessárias para funcionamento das funcionalidades de proteção, incluindo:
          </p>
          <ul className="list-disc pl-6 mb-6 text-on-surface-variant space-y-2">
            <li>Leitura temporária de SMS para análise automática contra fraude</li>
            <li>Monitorização de chamadas para identificação preventiva de números suspeitos</li>
            <li>Envio de notificações de segurança</li>
          </ul>
          <p className="mb-10 text-on-surface-variant leading-relaxed italic">
            As permissões podem ser desativadas pelo utilizador nas configurações do dispositivo.
          </p>

          {/* Secção 11 */}
          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            11. Retenção de Dados
          </h2>
          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-3">
            <li><strong className="text-white">Dados da conta</strong> permanecem enquanto a conta estiver ativa</li>
            <li><strong className="text-white">Denúncias</strong> permanecem enquanto forem relevantes para proteção da comunidade</li>
            <li><strong className="text-white">Dados temporários</strong> utilizados pela IA para análise de SMS não são armazenados</li>
          </ul>

          {/* Encerramento */}
          <p className="mb-10 text-on-surface-variant leading-relaxed font-medium text-lg bg-white/5 p-6 rounded border-l-4 border-blue-500">
            Ao utilizar o SEFIA, o utilizador confirma que compreende e aceita o tratamento dos dados descritos nesta Política de Privacidade, permitindo que a plataforma cumpra a sua missão de criar comunicações mais seguras para todos.
          </p>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-on-surface-variant/60 italic">Última atualização: Julho de 2026.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
