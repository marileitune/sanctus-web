import { motion } from "framer-motion";

import { CLOUDINARY_BASE_URL, STORE_URL } from "constants/constants";
import MotionBadge from "components/contactUs/MotionBadge";

const StoreBadges = ({ t }: StoreBadgesProps) => (
  <div className="mt-4 flex flex-col items-center gap-4">
    <MotionBadge
      href={STORE_URL}
      src={GOOGLE_PLAY_BADGE_URL}
      alt="Google Play Badge"
      className="block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    />

    <motion.div
      className="relative cursor-not-allowed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
      viewport={{ once: true }}
    >
      <img
        src={APP_STORE_BADGE_URL}
        alt="App Store Badge"
        width={160}
        height={53}
        className="w-40 grayscale opacity-40 blur-[1.5px] select-none"
        draggable={false}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full tracking-wide uppercase">
          {t("contact_store_badge")}
        </span>
      </div>
    </motion.div>
  </div>
);

export default StoreBadges;

interface StoreBadgesProps {
  t: (key: string) => string;
}

const GOOGLE_PLAY_BADGE_URL = `${CLOUDINARY_BASE_URL}v1628619914/sanctus/play_store_badge.png`;
const APP_STORE_BADGE_URL =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
