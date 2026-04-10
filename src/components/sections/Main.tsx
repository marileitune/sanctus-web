import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Container from "components/_common/Container";
import Title from "components/main/Title";
import MainButton from "components/main/MainButton";
import MainImage from "components/main/MainImage";

const Main = () => {
  const { t } = useTranslation();

  return (
    <Element name="home" id="home">
      <Container className="bg-gradient-to-b from-brand-light via-[#f5d8d8] to-white flex flex-col w-full min-h-[100dvh] items-center justify-center gap-y-6 md:gap-y-8 pt-24">
        <Title />
        <motion.p
          className="text-base md:text-lg text-center text-gray-700 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t("main_subtitle")}
        </motion.p>
        <MainButton t={t} />
        <MainImage t={t} />
      </Container>
    </Element>
  );
};

export default Main;
