import Main from "components/sections/Main";
import AboutUs from "components/sections/AboutUs";
import Features from "components/sections/Features";
import ContactUs from "components/sections/ContactUs";
import Footer from "components/Footer";

const LandingPage = () => {
  return (
    <main id="main-content">
      <Main />
      <AboutUs />
      <Features />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default LandingPage;
