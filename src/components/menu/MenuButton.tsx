import { Menu, X } from "lucide-react";

const MenuButton = ({ isOpen, setIsOpen, "aria-label": ariaLabel }: MenuButtonProps) => (
  <button
    className="lg:hidden z-30"
    onClick={() => setIsOpen(!isOpen)}
    aria-label={ariaLabel ?? (isOpen ? "Close menu" : "Open menu")}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    {isOpen ? <X size={30} /> : <Menu size={30} />}
  </button>
);

export default MenuButton;

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  "aria-label"?: string;
}
