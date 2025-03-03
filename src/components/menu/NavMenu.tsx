import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import cookies from "js-cookie";

import MenuItems from "components/menu/MenuItems";
import MenuButton from "components/menu/MenuButton";
import BrandLink from "components/menu/BrandLink";
import LanguageSelector from "components/menu/LanguageSelector";
import useIsPrivacyPage from "hooks/useIsPrivacyPage";
import { defaultLanguageCode, languages } from "constants/constants";

const NavMenu = () => {
  const location = useLocation();
  const currentLanguageCode = cookies.get("i18next") || defaultLanguageCode;
  const { t } = useTranslation();
  const [colorChange, setColorChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguageCode);

  const isPrivacyPage = useIsPrivacyPage();
  useEffect(() => {
    const changeNavbarColor = (): void => {
      if (location.pathname === "/privacy") {
        setColorChange(true);
      } else {
        setColorChange(window.scrollY >= 50);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
    changeNavbarColor();
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [location.pathname]);

  useEffect(() => {
    i18n.changeLanguage(defaultLanguageCode);
    setSelectedLanguage(defaultLanguageCode);
  }, []);

  const handleLanguageChange = (code: string): void => {
    const selectedCode = languages.find(
      (lang) => lang.country_code === code
    )?.code;
    if (selectedCode) {
      setSelectedLanguage(selectedCode);
      i18n.changeLanguage(selectedCode);
      cookies.set("i18next", selectedCode);
    }
  };

  return (
    <nav
      className={`fixed w-full z-10 transition duration-500 ${
        colorChange ? "bg-white shadow-md" : "bg-brand-light"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-0 lg:px-4 lg:py-4">
        <BrandLink />
        {isPrivacyPage ? null : (
          <>
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuItems isOpen={isOpen} setIsOpen={setIsOpen} t={t} />
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              handleLanguageChange={handleLanguageChange}
              t={t}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
