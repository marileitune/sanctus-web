import { Element } from "react-scroll";

import Container from "components/_common/Container";
import AboutImage from "components/aboutUs/AboutImage";
import AboutText from "components/aboutUs/AboutText";

const AboutUs = () => {
  return (
    <Element name="about" id="about">
      <Container className="bg-white pl-0! px-0! py-0! md:py-0!">
        <div className="flex flex-wrap min-h-[500px]">
          <AboutImage />
          <AboutText />
        </div>
      </Container>
    </Element>
  );
};

export default AboutUs;
