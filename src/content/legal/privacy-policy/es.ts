import { p, list, type LegalContent } from '@/content/legal/types';

const content: LegalContent = {
  title: 'Política de Privacidad',
  updatedAt: 'Última actualización: 7 de julio de 2026',
  intro: [
    'Bienvenido a Sanctus.',
    'Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestra aplicación.',
  ],
  sections: [
    {
      heading: '1. Información que recopilamos',
      blocks: [
        p('Cuando inicia sesión con Google o Apple, recopilamos:'),
        list(['Nombre', 'Dirección de correo electrónico']),
        p(
          'También almacenamos información relacionada con el uso de la aplicación, como:',
        ),
        list([
          'progreso en las jornadas;',
          'logros;',
          'semillas y talentos;',
          'preferencias del usuario;',
          'configuración de la aplicación.',
        ]),
        p(
          'No almacenamos su contraseña ni sus credenciales de acceso. La autenticación es realizada directamente por Google o Apple.',
        ),
      ],
    },
    {
      heading: '2. Cómo utilizamos su información',
      blocks: [
        p('Utilizamos su información para:'),
        list([
          'crear y mantener su cuenta;',
          'sincronizar su progreso entre dispositivos;',
          'ofrecer las funciones de la aplicación;',
          'responder solicitudes de soporte;',
          'mejorar la experiencia del usuario.',
        ]),
      ],
    },
    {
      heading: '3. Publicidad',
      blocks: [
        p(
          'La aplicación puede mostrar anuncios proporcionados por socios publicitarios.',
        ),
        p(
          'Estos socios pueden recopilar información técnica, como identificadores del dispositivo y datos publicitarios, de acuerdo con sus propias políticas de privacidad.',
        ),
        p('Sanctus no vende sus datos personales.'),
      ],
    },
    {
      heading: '4. Compartición de datos',
      blocks: [
        p(
          'No vendemos ni compartimos su información personal, excepto cuando sea necesario para:',
        ),
        list([
          'autenticación mediante Google o Apple;',
          'funcionamiento de los servicios utilizados por la aplicación;',
          'cumplimiento de obligaciones legales.',
        ]),
      ],
    },
    {
      heading: '5. Seguridad',
      blocks: [
        p(
          'Adoptamos medidas razonables para proteger su información contra accesos no autorizados, alteraciones o divulgaciones.',
        ),
        p(
          'Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro.',
        ),
      ],
    },
    {
      heading: '6. Eliminación de la cuenta',
      blocks: [
        p(
          'Puede solicitar la eliminación de su cuenta y de sus datos contactándonos a través del canal de soporte indicado en la tienda de aplicaciones.',
        ),
      ],
    },
    {
      heading: '7. Menores',
      blocks: [p('La aplicación no está dirigida a menores de 13 años.')],
    },
    {
      heading: '8. Cambios',
      blocks: [
        p(
          'Podemos actualizar esta Política de Privacidad periódicamente. La versión más reciente estará siempre disponible en la aplicación.',
        ),
      ],
    },
    {
      heading: '9. Contacto',
      blocks: [
        p(
          'Si tiene alguna pregunta sobre esta Política de Privacidad, puede ponerse en contacto con nosotros a través de los canales oficiales de soporte de Sanctus.',
        ),
      ],
    },
  ],
};

export default content;
