'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { Container } from '@/components/ui/Container';
import { useActiveSection } from '@/hooks/useActiveSection';
import { MenuButton } from './MenuButton';
import { MenuItems } from './MenuItems';
import { BrandLink } from './BrandLink';
import { LanguageSelector } from './LanguageSelector';

const sections = ['home', 'about', 'features', 'contact'];

export function NavMenu() {
  const pathname = usePathname();
  const isLegalPage =
    pathname.includes('/privacy') || pathname.includes('/terms');
  const [colorChange, setColorChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(sections);

  useEffect(() => {
    const changeNavbarColor = (): void => {
      if (isLegalPage) {
        setColorChange(true);
      } else {
        setColorChange(window.scrollY >= 50);
      }
    };

    window.addEventListener('scroll', changeNavbarColor);
    changeNavbarColor();
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, [isLegalPage]);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'fixed w-full z-10 transition duration-500',
        colorChange ? 'bg-white shadow-md' : 'bg-brand-50',
      )}
    >
      <Container className="flex justify-between items-center py-3 lg:py-4">
        <BrandLink />
        {isLegalPage ? (
          <LanguageSelector className="ml-auto" />
        ) : (
          <>
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuItems
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
            <LanguageSelector className="hidden lg:block ml-auto" />
          </>
        )}
      </Container>
    </nav>
  );
}
