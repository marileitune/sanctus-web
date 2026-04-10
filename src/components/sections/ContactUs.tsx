import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import H2 from "components/_common/H2";
import Container from "components/_common/Container";
import StoreBadges from "components/contactUs/StoreBadges";
import ContactEmail from "components/contactUs/ContactEmail";
import SocialIcons from "components/contactUs/SocialIcons";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Element name="contact" id="contact">
      <Container className="bg-gradient-to-b from-[#CCDCEC] to-[#dde8f2] flex flex-col items-center justify-center text-center min-h-[calc(100dvh-var(--navbar-h)-var(--footer-h))]">
        <H2 centerAccent>{t("nav_item_contact")}</H2>
        <ContactEmail />
        <SocialIcons />
        <StoreBadges t={t} />
      </Container>
    </Element>
  );
};

export default ContactUs;
