import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { languages } from "constants/constants";

const FLAG: Record<string, string> = {
  GB: "🇬🇧",
  BR: "🇧🇷",
  ES: "🇪🇸",
};

const LanguageSelector = ({
  selectedLanguage,
  handleLanguageChange,
  className = "hidden lg:block ml-auto",
}: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === selectedLanguage);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-black/5 transition-colors duration-150 cursor-pointer"
      >
        <span aria-hidden="true">{current ? FLAG[current.country_code] : ""}</span>
        <span>{current?.code.toUpperCase()}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-1 w-32 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50"
        >
          {languages.map((lang) => {
            const isSelected = lang.code === selectedLanguage;
            return (
              <li
                key={lang.country_code}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  handleLanguageChange(lang.country_code);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-100
                  ${isSelected ? "bg-brand/10 text-brand font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
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

export default LanguageSelector;

interface LanguageSelectorProps {
  selectedLanguage: string;
  handleLanguageChange: (code: string) => void;
  t?: (key: string) => string;
  className?: string;
}
