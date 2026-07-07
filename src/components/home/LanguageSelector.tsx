'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { languages } from '@/lib/constants';
import { setCookie } from '@/lib/cookies';

const FLAG: Record<string, string> = {
  GB: '🇬🇧',
  BR: '🇧🇷',
  ES: '🇪🇸',
};

export const LanguageSelector = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  const current = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    setCookie('locale', code, 31536000);
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/') || '/');
    setOpen(false);
  };

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-ink hover:bg-black/5 transition-colors duration-150"
      >
        <span aria-hidden="true">
          {current ? FLAG[current.country_code] : ''}
        </span>
        <span>{current?.code.toUpperCase()}</span>
        <ChevronDown
          size={14}
          className={cn(
            'transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-1 w-32 bg-white border border-border rounded-2xl shadow-elev overflow-hidden z-50"
        >
          {languages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <li
                key={lang.country_code}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-100',
                  isSelected
                    ? 'bg-brand-50 text-brand-800 font-semibold'
                    : 'text-ink hover:bg-cream',
                )}
              >
                <span aria-hidden="true">{FLAG[lang.country_code]}</span>
                <span>{lang.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
