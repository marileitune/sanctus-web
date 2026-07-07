'use client';

import { useEffect } from 'react';
import { cn } from '@/utils/cn';
import { useT } from '@/lib/i18n/useT';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { LanguageSelector } from '@/components/home/LanguageSelector';

const menuItems = ['home', 'about', 'features', 'contact'] as const;

export const MenuItems = ({
  isOpen,
  setIsOpen,
  activeSection,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
}) => {
  const t = useT();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isDesktop || !isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isDesktop, isOpen, setIsOpen]);

  return (
    <div
      id="mobile-menu"
      role={isDesktop ? undefined : 'dialog'}
      aria-modal={isDesktop ? undefined : isOpen}
      aria-hidden={isDesktop ? undefined : !isOpen}
      aria-label="Navigation menu"
      className={cn(
        'fixed top-0 right-0 w-4/5 lg:w-full h-screen bg-white z-20 flex flex-col items-center justify-center space-y-8 transition-transform duration-500',
        isOpen ? 'translate-x-0' : 'translate-x-full',
        'lg:static lg:translate-x-0 lg:flex lg:flex-row lg:justify-center lg:space-x-6 lg:h-auto lg:bg-transparent lg:w-auto lg:space-y-0',
      )}
      onClick={() => setIsOpen(false)}
    >
      {menuItems.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={cn(
            'cursor-pointer font-bold! text-2xl lg:text-base text-center transition-colors duration-200',
            activeSection === item ? 'text-brand-600!' : 'text-ink',
          )}
          onClick={() => setIsOpen(false)}
        >
          {t(`nav_item_${item}` as 'nav_item_home')}
        </a>
      ))}
      <div className="lg:hidden" onClick={(e) => e.stopPropagation()}>
        <LanguageSelector className="block" />
      </div>
    </div>
  );
};
