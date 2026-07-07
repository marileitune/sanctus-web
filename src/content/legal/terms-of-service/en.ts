import { p, list, type LegalContent } from '../types';

const content: LegalContent = {
  title: 'Terms & Conditions',
  updatedAt: 'Last updated: July 7, 2026',
  intro: [
    'Welcome to Sanctus.',
    'By using the app, you agree to these Terms & Conditions. If you do not agree, please do not use the app.',
  ],
  sections: [
    {
      heading: '1. About the App',
      blocks: [
        p(
          'Sanctus is designed to support spiritual growth through journeys, reflections, prayers, and Christian content.',
        ),
        p(
          'All content is provided for educational and spiritual purposes only and does not replace pastoral, religious, or professional guidance.',
        ),
      ],
    },
    {
      heading: '2. Account',
      blocks: [
        p('You may use the app anonymously or sign in with Google or Apple.'),
        p(
          'You are responsible for maintaining the security of your device and authentication credentials.',
        ),
      ],
    },
    {
      heading: '3. Progress',
      blocks: [
        p(
          'The app stores your progress to synchronize your experience across devices.',
        ),
        p(
          'If you use the app anonymously, some progress may be lost if the app is removed before linking your account.',
        ),
      ],
    },
    {
      heading: '4. Seeds and Talents',
      blocks: [
        p('Sanctus includes virtual currencies called Seeds and Talents.'),
        p('These virtual currencies:'),
        list([
          'have no monetary value;',
          'cannot be exchanged for cash;',
          'cannot be transferred to other users;',
          'do not represent any financial asset.',
        ]),
        p(
          'We may modify how these currencies are earned, used, or balanced at any time.',
        ),
      ],
    },
    {
      heading: '5. Advertising',
      blocks: [
        p('The app may display advertisements provided by third parties.'),
        p('Advertising helps keep the app free.'),
        p(
          'Some features may offer optional rewards for voluntarily watching advertisements.',
        ),
      ],
    },
    {
      heading: '6. Acceptable Use',
      blocks: [
        p('You agree not to:'),
        list([
          'use the app for unlawful purposes;',
          'attempt unauthorized access;',
          'copy, modify, or redistribute the app without permission;',
          'use bots, scripts, or automated tools to gain unfair advantages.',
        ]),
      ],
    },
    {
      heading: '7. Availability',
      blocks: [
        p(
          'We strive to keep the app available but cannot guarantee uninterrupted service.',
        ),
        p('Features may be modified, suspended, or discontinued at any time.'),
      ],
    },
    {
      heading: '8. Intellectual Property',
      blocks: [
        p(
          'All content, branding, graphics, text, icons, logos, and features are owned by their respective owners and protected by applicable laws.',
        ),
      ],
    },
    {
      heading: '9. Limitation of Liability',
      blocks: [
        p('The app is provided "as is."'),
        p(
          'We do not guarantee that the app will always operate without interruptions or errors.',
        ),
        p(
          'To the maximum extent permitted by law, Sanctus shall not be liable for damages resulting from the use of the app.',
        ),
      ],
    },
    {
      heading: '10. Changes',
      blocks: [
        p('These Terms may be updated from time to time.'),
        p('The latest version will always be available within the app.'),
      ],
    },
    {
      heading: '11. Account Termination',
      blocks: [
        p('We may suspend or terminate accounts that violate these Terms.'),
        p(
          'Users may also request account deletion as described in the Privacy Policy.',
        ),
      ],
    },
    {
      heading: '12. Contact',
      blocks: [
        p(
          'If you have any questions regarding these Terms, please contact Sanctus support.',
        ),
      ],
    },
  ],
};

export default content;
