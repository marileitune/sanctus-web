import { p, list, type LegalContent } from '../types';

const content: LegalContent = {
  title: 'Privacy Policy',
  updatedAt: 'Last updated: July 7, 2026',
  intro: [
    'Welcome to Sanctus.',
    'This Privacy Policy explains how we collect, use, and protect your information when you use our application.',
  ],
  sections: [
    {
      heading: '1. Information We Collect',
      blocks: [
        p('When you sign in using Google or Apple, we collect:'),
        list(['Name', 'Email address']),
        p(
          'We also store information related to your use of the app, including:',
        ),
        list([
          'journey progress;',
          'achievements;',
          'seeds and talents;',
          'user preferences;',
          'app settings.',
        ]),
        p(
          'We do not collect or store your password. Authentication is handled directly by Google or Apple.',
        ),
      ],
    },
    {
      heading: '2. How We Use Your Information',
      blocks: [
        p('We use your information to:'),
        list([
          'create and maintain your account;',
          'sync your progress across devices;',
          'provide app features;',
          'respond to support requests;',
          'improve the app experience.',
        ]),
      ],
    },
    {
      heading: '3. Advertising',
      blocks: [
        p(
          'The app may display advertisements provided by third-party advertising partners.',
        ),
        p(
          'These partners may collect technical information such as advertising identifiers and device information according to their own privacy policies.',
        ),
        p('Sanctus does not sell your personal data.'),
      ],
    },
    {
      heading: '4. Sharing Information',
      blocks: [
        p(
          'We do not sell or share your personal information except when necessary to:',
        ),
        list([
          'authenticate through Google or Apple;',
          'operate services required by the app;',
          'comply with legal obligations.',
        ]),
      ],
    },
    {
      heading: '5. Security',
      blocks: [
        p(
          'We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration.',
        ),
        p(
          'However, no method of internet transmission or electronic storage is completely secure.',
        ),
      ],
    },
    {
      heading: '6. Account Deletion',
      blocks: [
        p(
          'You may request the deletion of your account and associated data by contacting us through the support channel listed in the app store.',
        ),
      ],
    },
    {
      heading: '7. Children',
      blocks: [
        p('The app is not intended for children under 13 years of age.'),
      ],
    },
    {
      heading: '8. Changes',
      blocks: [
        p(
          'We may update this Privacy Policy from time to time. The latest version will always be available within the app.',
        ),
      ],
    },
    {
      heading: '9. Contact',
      blocks: [
        p(
          'If you have any questions about this Privacy Policy, please contact us through Sanctus support.',
        ),
      ],
    },
  ],
};

export default content;
