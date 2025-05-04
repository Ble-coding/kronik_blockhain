// resources/js/components/language-selector.tsx
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, locales } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (locale: typeof language) => {
    setLanguage(locale);
    setIsOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger onClick={() => setIsOpen(!isOpen)}>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Globe size={16} />
          <span className="uppercase">{language}</span>
        </Button>
      </PopoverTrigger>
      {isOpen && (
        <PopoverContent>
          {locales.map((locale) => (
            <Button
              key={locale}
              variant="ghost"
              size="sm"
              className={`w-full justify-start ${locale === language ? 'bg-muted' : ''}`}
              onClick={() => handleLocaleChange(locale)}
            >
              {locale.toUpperCase()}
            </Button>
          ))}
        </PopoverContent>
      )}
    </Popover>
  );
}
