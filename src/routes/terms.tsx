import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <Layout>
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold font-heading text-white mb-6">
            Termos e Condições de Uso
          </h1>

          <p className="text-on-surface-variant leading-relaxed">
            Bem-vindo ao <strong>SEFIA</strong>.
            Ao aceder, instalar ou utilizar o website, a aplicação móvel ou
            quaisquer serviços disponibilizados pelo SEFIA, o utilizador declara
            ter lido, compreendido e aceite integralmente os presentes Termos e
            Condições de Uso. Caso não concorde com qualquer disposição destes
            termos, deverá interromper imediatamente a utilização dos nossos
            serviços.
          </p>

          {/* 1 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            1. Descrição do Serviço
          </h2>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA é uma plataforma colaborativa criada para prevenir e combater
            fraudes telefónicas e digitais através da participação da comunidade,
            inteligência artificial e análise de dados.
          </p>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            A plataforma disponibiliza, entre outras, as seguintes
            funcionalidades:
          </p>

          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-3">
            <li>
              Denúncia de chamadas, mensagens e outras tentativas de fraude;
            </li>

            <li>
              Alertas em tempo real sobre números potencialmente fraudulentos;
            </li>

            <li>
              Análise inteligente de SMS através de Inteligência Artificial;
            </li>

            <li>
              Proteção colaborativa baseada nas denúncias da comunidade.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            2. Permissões do Aplicativo
          </h2>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Para fornecer os serviços de proteção contra fraudes, a aplicação
            poderá solicitar determinadas permissões do dispositivo.
          </p>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            Ao instalar e utilizar o aplicativo SEFIA, o utilizador aceita a
            utilização dessas permissões para os fins descritos nestes termos.
          </p>

          <ul className="list-disc pl-6 mb-8 text-on-surface-variant space-y-3">
            <li>Leitura de mensagens SMS recebidas;</li>

            <li>Monitorização de chamadas recebidas;</li>

            <li>Envio de notificações de segurança;</li>

            <li>
              Comunicação com os servidores do SEFIA para verificação de
              números denunciados e emissão de alertas.
            </li>
          </ul>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Estas permissões são utilizadas exclusivamente para identificar
            possíveis tentativas de fraude e fornecer alertas ao utilizador em
            tempo real.
          </p>

          {/* 3 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            3. Análise Inteligente de Mensagens SMS
          </h2>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA utiliza Inteligência Artificial para analisar
            automaticamente mensagens SMS recebidas, com o objetivo exclusivo
            de identificar tentativas de fraude, phishing, engenharia social,
            burlas financeiras ou outras ameaças digitais.
          </p>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            A análise ocorre praticamente de forma instantânea após a receção da
            mensagem. A Inteligência Artificial processa o conteúdo apenas pelo
            tempo necessário para determinar o nível de risco e gerar um alerta,
            quando aplicável.
          </p>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            O conteúdo das mensagens SMS <strong>não é armazenado
            permanentemente</strong> pelo SEFIA e não é utilizado para fins
            comerciais, publicidade ou criação de perfis dos utilizadores.
          </p>

          {/* 4 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            4. Monitorização de Chamadas
          </h2>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            A aplicação monitoriza chamadas telefónicas recebidas apenas para
            verificar se o número consta na base de dados colaborativa do
            SEFIA ou foi identificado pelos nossos sistemas como potencialmente
            fraudulento.
          </p>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Quando um risco é identificado, o utilizador poderá receber uma
            notificação de alerta antes ou durante a chamada, permitindo-lhe
            tomar uma decisão mais segura.
          </p>

          {/* 5 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            5. Privacidade dos Dados
          </h2>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            A proteção da privacidade dos utilizadores é um compromisso
            fundamental do SEFIA.
          </p>

          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-3">
            <li>
              O SEFIA não armazena o número de telefone do utilizador para fins
              de monitorização de chamadas.
            </li>

            <li>
              O conteúdo das mensagens SMS não é armazenado.
            </li>

            <li>
              Apenas números denunciados pela comunidade e identificados como
              potencialmente fraudulentos podem integrar a base de dados do
              sistema.
            </li>

            <li>
              Os dados tratados destinam-se exclusivamente à prevenção e ao
              combate de fraudes.
            </li>

            <li>
              O SEFIA adota medidas técnicas e organizacionais adequadas para
              proteger os dados tratados contra acessos não autorizados.
            </li>
          </ul>

          {/* 6 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            6. Utilização Responsável e Colaborativa
          </h2>

          <p className="mb-6 text-on-surface-variant leading-relaxed">
            O SEFIA baseia-se num modelo de inteligência colaborativa. Ao
            utilizar a plataforma, o utilizador compromete-se a:
          </p>

          <ul className="list-disc pl-6 mb-8 text-on-surface-variant space-y-3">
            <li>
              Submeter apenas denúncias verdadeiras e baseadas em experiências
              reais ou evidências concretas.
            </li>

            <li>
              Não utilizar a plataforma para difamar terceiros ou realizar
              denúncias falsas.
            </li>

            <li>
              Não tentar comprometer a segurança, estabilidade ou funcionamento
              da plataforma.
            </li>

            <li>
              Não utilizar os serviços para atividades ilegais ou não
              autorizadas.
            </li>

            <li>
              Reconhecer que as classificações apresentadas resultam da
              combinação entre denúncias da comunidade e Inteligência
              Artificial.
            </li>
          </ul>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            O SEFIA poderá suspender ou encerrar contas que violem estes Termos
            ou utilizem a plataforma de forma abusiva.
          </p>

          {/* 7 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            7. Isenção de Responsabilidade
          </h2>

          <ul className="list-disc pl-6 mb-10 text-on-surface-variant space-y-5">
            <li>
              As classificações e alertas apresentados pelo SEFIA são baseados
              em denúncias da comunidade e em modelos de Inteligência
              Artificial.
            </li>

            <li>
              Apesar da utilização de tecnologia avançada, o SEFIA não garante
              a identificação de todas as tentativas de fraude.
            </li>

            <li>
              A ausência de um alerta não significa que uma chamada ou mensagem
              seja totalmente segura.
            </li>

            <li>
              A decisão de atender uma chamada, responder a uma mensagem ou
              realizar qualquer transação é sempre da responsabilidade do
              utilizador.
            </li>

            <li>
              O SEFIA não poderá ser responsabilizado por prejuízos decorrentes
              de fraudes não identificadas ou por decisões tomadas pelo
              utilizador com base nas informações disponibilizadas.
            </li>
          </ul>

          {/* 8 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            8. Propriedade Intelectual
          </h2>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Todo o conteúdo da plataforma, incluindo software, algoritmos de
            Inteligência Artificial, design, identidade visual, logótipos,
            marcas, documentação, bases de dados e demais tecnologias utilizadas
            pelo SEFIA são protegidos pelas leis de propriedade intelectual e
            pertencem aos seus respetivos titulares.
          </p>

          {/* 9 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            9. Alterações aos Termos
          </h2>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            O SEFIA poderá alterar estes Termos e Condições sempre que
            necessário. As alterações produzirão efeitos a partir da sua
            publicação. A continuação da utilização da plataforma constitui a
            aceitação da versão mais recente destes Termos.
          </p>

          {/* 10 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            10. Lei Aplicável e Foro
          </h2>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Estes Termos e Condições são regidos pelas leis da República de
            Angola.
          </p>

          {/* 11 */}

          <h2 className="text-2xl font-semibold font-heading mb-6 text-white mt-12">
            11. Consentimento
          </h2>

          <p className="mb-10 text-on-surface-variant leading-relaxed">
            Ao instalar, aceder ou utilizar o aplicativo SEFIA, o utilizador
            declara que leu, compreendeu e aceita integralmente estes Termos e
            Condições de Uso, incluindo a utilização das permissões necessárias
            para leitura temporária de SMS, monitorização de chamadas e envio de
            notificações de segurança destinadas exclusivamente à prevenção e ao
            combate de fraudes.
          </p>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-on-surface-variant/60 italic">
              Última atualização: Julho de 2026.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}