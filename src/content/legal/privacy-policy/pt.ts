import { p, list, type LegalContent } from '@/content/legal/types';

const content: LegalContent = {
  title: 'Política de Privacidade',
  updatedAt: 'Última atualização: 07 de julho de 2026',
  intro: [
    'Bem-vindo ao Sanctus.',
    'Esta Política de Privacidade explica como coletamos, utilizamos e protegemos suas informações ao utilizar nosso aplicativo.',
  ],
  sections: [
    {
      heading: '1. Informações que coletamos',
      blocks: [
        p('Ao criar uma conta utilizando Google ou Apple, coletamos:'),
        list(['Nome', 'Endereço de e-mail']),
        p(
          'Também armazenamos informações relacionadas ao uso do aplicativo, como:',
        ),
        list([
          'progresso nas jornadas;',
          'conquistas;',
          'sementes e talentos;',
          'preferências do usuário;',
          'configurações do aplicativo.',
        ]),
        p(
          'Não armazenamos sua senha ou credenciais de login. A autenticação é realizada diretamente pelo Google ou pela Apple.',
        ),
      ],
    },
    {
      heading: '2. Como usamos seus dados',
      blocks: [
        p('Utilizamos suas informações para:'),
        list([
          'criar e manter sua conta;',
          'sincronizar seu progresso entre dispositivos;',
          'fornecer funcionalidades do aplicativo;',
          'responder solicitações de suporte;',
          'melhorar a experiência do usuário.',
        ]),
      ],
    },
    {
      heading: '3. Publicidade',
      blocks: [
        p(
          'O aplicativo pode exibir anúncios fornecidos por parceiros de publicidade.',
        ),
        p(
          'Esses parceiros podem coletar informações técnicas, como identificadores de dispositivo e dados de publicidade, de acordo com suas próprias políticas de privacidade.',
        ),
        p('O Sanctus não vende seus dados pessoais.'),
      ],
    },
    {
      heading: '4. Compartilhamento de dados',
      blocks: [
        p(
          'Não vendemos nem compartilhamos seus dados pessoais com terceiros, exceto quando necessário para:',
        ),
        list([
          'autenticação via Google ou Apple;',
          'funcionamento dos serviços utilizados pelo aplicativo;',
          'cumprimento de obrigações legais.',
        ]),
      ],
    },
    {
      heading: '5. Segurança',
      blocks: [
        p(
          'Adotamos medidas razoáveis para proteger suas informações contra acesso não autorizado, alteração ou divulgação.',
        ),
        p(
          'Nenhum método de armazenamento ou transmissão pela internet é totalmente seguro.',
        ),
      ],
    },
    {
      heading: '6. Exclusão da conta',
      blocks: [
        p(
          'Você pode solicitar a exclusão da sua conta e dos seus dados entrando em contato pelo canal de suporte informado na loja do aplicativo.',
        ),
      ],
    },
    {
      heading: '7. Crianças',
      blocks: [p('O aplicativo não é destinado a menores de 13 anos.')],
    },
    {
      heading: '8. Alterações nesta política',
      blocks: [
        p(
          'Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível no aplicativo.',
        ),
      ],
    },
    {
      heading: '9. Contato',
      blocks: [
        p(
          'Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelos canais oficiais de suporte do Sanctus.',
        ),
      ],
    },
  ],
};

export default content;
