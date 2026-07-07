'use client';

import { Menu, X } from 'lucide-react';

export const MenuButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => (
  <button
    className="lg:hidden z-30"
    onClick={() => setIsOpen(!isOpen)}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    {isOpen ? <X size={30} /> : <Menu size={30} />}
  </button>
);
