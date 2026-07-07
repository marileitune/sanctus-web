import { p, list, type LegalContent } from '../types';

const content: LegalContent = {
  title: 'Términos y Condiciones',
  updatedAt: 'Última actualización: 7 de julio de 2026',
  intro: [
    'Bienvenido a Sanctus.',
    'Al utilizar la aplicación, usted acepta estos Términos y Condiciones. Si no está de acuerdo con ellos, no utilice la aplicación.',
  ],
  sections: [
    {
      heading: '1. Sobre la aplicación',
      blocks: [
        p(
          'Sanctus está diseñado para fomentar el crecimiento espiritual mediante jornadas, reflexiones, oraciones y contenido cristiano.',
        ),
        p(
          'Todo el contenido tiene fines educativos y espirituales y no sustituye la orientación pastoral, religiosa o profesional.',
        ),
      ],
    },
    {
      heading: '2. Cuenta',
      blocks: [
        p(
          'Puede utilizar la aplicación de forma anónima o iniciar sesión con Google o Apple.',
        ),
        p(
          'Usted es responsable de mantener la seguridad de su dispositivo y de sus credenciales de autenticación.',
        ),
      ],
    },
    {
      heading: '3. Progreso',
      blocks: [
        p(
          'La aplicación almacena su progreso para sincronizarlo entre dispositivos.',
        ),
        p(
          'Si utiliza la aplicación de forma anónima, parte del progreso puede perderse si elimina la aplicación antes de vincular una cuenta.',
        ),
      ],
    },
    {
      heading: '4. Semillas y Talentos',
      blocks: [
        p('Sanctus utiliza monedas virtuales llamadas Semillas y Talentos.'),
        p('Estas monedas:'),
        list([
          'no tienen valor monetario;',
          'no pueden convertirse en dinero;',
          'no pueden transferirse entre usuarios;',
          'no representan ningún derecho financiero.',
        ]),
        p(
          'Podremos modificar las reglas relacionadas con estas monedas en cualquier momento.',
        ),
      ],
    },
    {
      heading: '5. Publicidad',
      blocks: [
        p('La aplicación puede mostrar anuncios de terceros.'),
        p('Los anuncios ayudan a mantener la aplicación gratuita.'),
        p(
          'Algunas funciones pueden ofrecer recompensas por ver anuncios de forma voluntaria.',
        ),
      ],
    },
    {
      heading: '6. Uso adecuado',
      blocks: [
        p('Usted acepta no:'),
        list([
          'utilizar la aplicación para actividades ilegales;',
          'intentar acceder sin autorización;',
          'copiar, modificar o distribuir la aplicación sin permiso;',
          'utilizar bots, scripts o herramientas automáticas para obtener ventajas indebidas.',
        ]),
      ],
    },
    {
      heading: '7. Disponibilidad',
      blocks: [
        p(
          'Hacemos todo lo posible por mantener la aplicación disponible, pero no garantizamos un funcionamiento ininterrumpido.',
        ),
        p(
          'Podremos modificar, suspender o eliminar funciones en cualquier momento.',
        ),
      ],
    },
    {
      heading: '8. Propiedad intelectual',
      blocks: [
        p(
          'Todo el contenido, identidad visual, textos, imágenes, iconos, logotipos y funcionalidades pertenecen a sus respectivos propietarios y están protegidos por la legislación aplicable.',
        ),
      ],
    },
    {
      heading: '9. Limitación de responsabilidad',
      blocks: [
        p('La aplicación se proporciona "tal cual".'),
        p('No garantizamos que esté libre de errores o interrupciones.'),
        p(
          'En la máxima medida permitida por la ley, Sanctus no será responsable de los daños derivados del uso de la aplicación.',
        ),
      ],
    },
    {
      heading: '10. Cambios',
      blocks: [
        p('Podremos actualizar estos Términos periódicamente.'),
        p(
          'La versión más reciente estará siempre disponible en la aplicación.',
        ),
      ],
    },
    {
      heading: '11. Cancelación de la cuenta',
      blocks: [
        p(
          'Podremos suspender o cancelar cuentas que incumplan estos Términos.',
        ),
        p(
          'El usuario también podrá solicitar la eliminación de su cuenta según la Política de Privacidad.',
        ),
      ],
    },
    {
      heading: '12. Contacto',
      blocks: [
        p(
          'Si tiene alguna pregunta sobre estos Términos, puede ponerse en contacto con el soporte oficial de Sanctus.',
        ),
      ],
    },
  ],
};

export default content;
