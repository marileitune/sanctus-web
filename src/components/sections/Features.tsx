import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import H2 from "components/_common/H2";
import Container from "components/_common/Container";
import FeatureItem from "components/features/FeatureItem";

const Features = () => {
  const { t } = useTranslation();

  return (
    <Element name="features" id="features">
      <Container className="flex flex-col items-center bg-[#FDF6E8]">
        <div className="text-center">
          <H2 centerAccent>{t("nav_item_features")}</H2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
          {features.map((feature, i) => (
            <FeatureItem key={feature} feature={feature} i={i} />
          ))}
        </div>
      </Container>
    </Element>
  );
};

export default Features;

const features = ["one", "two", "three"];
