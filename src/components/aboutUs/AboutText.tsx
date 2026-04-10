import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import H2 from "components/_common/H2";

const AboutText = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-full md:w-1/2 flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-24"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div>
        <H2>{t("nav_item_about")}</H2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {t("about_text")}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutText;
