import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import NavMenu from "components/menu/NavMenu";
import LandingPage from "pages/LandingPage";
import PrivacyPage from "pages/PrivacyPage";

const App = () => {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="userConsent"
        style={{ background: "#2B373B", textAlign: "center" }}
        expires={150}
      >
        🍪 This website uses cookies to improve your experience.
        <a href="/privacy" style={{ color: "#4CAF50" }}>
          Learn more
        </a>
      </CookieConsent>
      <NavMenu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
