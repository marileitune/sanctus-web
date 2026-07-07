import { p, list, type LegalContent } from '@/content/legal/types';

const content: LegalContent = {
  title: 'Termos e Condições',
  updatedAt: 'Última atualização: 07 de julho de 2026',
  intro: [
    'Bem-vindo ao Sanctus.',
    'Ao utilizar o aplicativo, você concorda com estes Termos e Condições. Caso não concorde com qualquer parte destes termos, não utilize o aplicativo.',
  ],
  sections: [
    {
      heading: '1. Sobre o aplicativo',
      blocks: [
        p(
          'O Sanctus é um aplicativo voltado ao crescimento espiritual por meio de jornadas, reflexões, orações e conteúdos relacionados à fé cristã.',
        ),
        p(
          'Todo o conteúdo possui caráter educativo e espiritual, não substituindo orientação pastoral, religiosa ou profissional.',
        ),
      ],
    },
    {
      heading: '2. Conta',
      blocks: [
        p(
          'Você pode utilizar o aplicativo de forma anônima ou criar uma conta utilizando Google ou Apple.',
        ),
        p(
          'Ao criar uma conta, você é responsável por manter o acesso seguro ao seu dispositivo e às credenciais utilizadas para autenticação.',
        ),
      ],
    },
    {
      heading: '3. Progresso',
      blocks: [
        p(
          'O aplicativo armazena seu progresso para sincronização entre dispositivos e melhoria da experiência.',
        ),
        p(
          'Caso utilize o aplicativo anonimamente, parte do progresso poderá ser perdida caso o aplicativo seja removido antes da vinculação a uma conta.',
        ),
      ],
    },
    {
      heading: '4. Sementes e Talentos',
      blocks: [
        p('O Sanctus utiliza moedas virtuais chamadas Sementes e Talentos.'),
        p('Essas moedas:'),
        list([
          'não possuem valor monetário;',
          'não podem ser convertidas em dinheiro;',
          'não podem ser transferidas para outros usuários;',
          'não representam qualquer direito financeiro.',
        ]),
        p(
          'Os desenvolvedores poderão alterar regras de obtenção, utilização ou saldo dessas moedas sempre que necessário para manter o equilíbrio do aplicativo.',
        ),
      ],
    },
    {
      heading: '5. Publicidade',
      blocks: [
        p('O aplicativo pode exibir anúncios de terceiros.'),
        p('A exibição de anúncios ajuda a manter o aplicativo gratuito.'),
        p(
          'Algumas funcionalidades podem oferecer recompensas pela visualização voluntária de anúncios.',
        ),
      ],
    },
    {
      heading: '6. Uso adequado',
      blocks: [
        p('Você concorda em não:'),
        list([
          'utilizar o aplicativo para atividades ilegais;',
          'tentar acessar áreas não autorizadas;',
          'modificar, copiar ou distribuir o aplicativo sem autorização;',
          'utilizar robôs, scripts ou qualquer mecanismo para obter vantagens indevidas.',
        ]),
      ],
    },
    {
      heading: '7. Disponibilidade',
      blocks: [
        p(
          'Embora nos esforcemos para manter o aplicativo disponível continuamente, não garantimos funcionamento ininterrupto.',
        ),
        p(
          'Poderemos modificar, suspender ou remover funcionalidades a qualquer momento.',
        ),
      ],
    },
    {
      heading: '8. Propriedade intelectual',
      blocks: [
        p(
          'Todo o conteúdo, identidade visual, textos, imagens, ícones, logotipos e funcionalidades do Sanctus pertencem aos seus respectivos proprietários e são protegidos pelas leis aplicáveis.',
        ),
      ],
    },
    {
      heading: '9. Limitação de responsabilidade',
      blocks: [
        p('O Sanctus é fornecido "como está".'),
        p(
          'Não garantimos que o aplicativo estará livre de erros ou indisponibilidades.',
        ),
        p(
          'Na máxima extensão permitida por lei, não nos responsabilizamos por perdas decorrentes da utilização do aplicativo.',
        ),
      ],
    },
    {
      heading: '10. Alterações',
      blocks: [
        p('Podemos atualizar estes Termos a qualquer momento.'),
        p(
          'A versão mais recente estará sempre disponível dentro do aplicativo.',
        ),
      ],
    },
    {
      heading: '11. Encerramento da conta',
      blocks: [
        p(
          'Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos.',
        ),
        p(
          'O usuário também poderá solicitar a exclusão de sua conta conforme descrito na Política de Privacidade.',
        ),
      ],
    },
    {
      heading: '12. Contato',
      blocks: [
        p(
          'Caso tenha dúvidas sobre estes Termos, entre em contato pelos canais oficiais de suporte do Sanctus.',
        ),
      ],
    },
  ],
};

export default content;
