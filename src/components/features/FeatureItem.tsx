import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import H3 from "components/_common/H3";
import { CLOUDINARY_BASE_URL } from "constants/constants";

const FeatureItem = ({ feature, i }: FeatureItemProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 * i, ease: "easeOut" }}
    >
      <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-6 shrink-0">
        <img
          src={`${CLOUDINARY_BASE_URL}v1628619914/sanctus/feature-${feature}.svg`}
          alt=""
          aria-hidden="true"
          width={28}
          height={28}
          className="w-7 h-7"
        />
      </div>
      <H3 className="mb-3">{t(`features_${feature}_title`)}</H3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {t(`features_${feature}_text`)}
      </p>
    </motion.div>
  );
};

export default FeatureItem;

interface FeatureItemProps {
  feature: string;
  i: number;
}
