import { Link } from "react-scroll";

import LanguageSelector from "components/menu/LanguageSelector";

const MenuItems = ({ isOpen, setIsOpen, t, selectedLanguage, handleLanguageChange, activeSection }: MenuItemsProps) => (
  <div
    id="mobile-menu"
    role="dialog"
    aria-modal={isOpen}
    aria-label="Navigation menu"
    className={`fixed top-0 right-0 w-4/5 lg:w-full h-screen bg-white z-20 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } lg:static lg:translate-x-0 lg:flex lg:flex-row lg:justify-center lg:space-x-6 lg:h-auto lg:bg-transparent lg:w-auto lg:space-y-0`}
    onClick={() => setIsOpen(false)}
  >
    {menuItems.map((item) => (
      <Link
        key={item}
        to={item}
        href={`#${item}`}
        smooth={true}
        duration={150}
        offset={-80}
        className={`cursor-pointer font-bold! text-2xl lg:text-base text-center transition-colors duration-200 ${
          activeSection === item ? "text-brand!" : "text-black"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {t(`nav_item_${item}`)}
      </Link>
    ))}
    <div className="lg:hidden" onClick={(e) => e.stopPropagation()}>
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        handleLanguageChange={(code) => {
          handleLanguageChange(code);
          setIsOpen(false);
        }}
        t={t}
        className="block"
      />
    </div>
  </div>
);

export default MenuItems;

const menuItems = ["home", "about", "features", "contact"];

interface MenuItemsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  t: (key: string) => string;
  selectedLanguage: string;
  handleLanguageChange: (code: string) => void;
  activeSection: string;
}
