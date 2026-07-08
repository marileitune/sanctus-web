'use client';

import { motion } from 'framer-motion';
import { InstagramIcon } from '@/components/home/icons/InstagramIcon';
import { FacebookIcon } from '@/components/home/icons/FacebookIcon';

const INSTAGRAM_URL = 'https://www.instagram.com/sanctusapp/';
const FACEBOOK_URL =
  'https://www.facebook.com/Sanctus-B%C3%ADblia-Liturgia-Ter%C3%A7os-e-Ora%C3%A7%C3%B5es-106478487553539';

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
