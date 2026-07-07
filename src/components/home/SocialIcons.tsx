'use client';

import { motion } from 'framer-motion';

const INSTAGRAM_URL = 'https://www.instagram.com/sanctusapp/';
const FACEBOOK_URL =
  'https://www.facebook.com/Sanctus-B%C3%ADblia-Liturgia-Ter%C3%A7os-e-Ora%C3%A7%C3%B5es-106478487553539';

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 8.5h2.5V5h-2.5c-2.2 0-4 1.8-4 4v2H8v3.5h2.5V21H14v-6.5h2.5l.5-3.5h-3v-2c0-.55.45-.5 1-.5Z"
      fill="currentColor"
    />
  </svg>
);

export const SocialIcons = () => (
  <motion.div
    className="flex gap-4 mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.4 }}
  >
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sanctus on Instagram"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors"
    >
      <InstagramIcon />
    </a>
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sanctus on Facebook"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors"
    >
      <FacebookIcon />
    </a>
  </motion.div>
);
