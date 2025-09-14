// app/components/ui/LanguageSwitcher.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

type Language = 'en' | 'fr';

export function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState<Language>('en');

  return (
    // Use the new custom color and increase the gap
    <div className="flex items-center gap-x-3 rounded-full bg-switcher-bg p-1">
      <button
        onClick={() => setSelectedLang('en')}
        className={`transition-transform duration-300 ease-in-out ${
          selectedLang === 'en' ? 'scale-110' : 'opacity-60'
        }`}
        aria-label="Switch to English"
      >
        {/* Make the flags smaller */}
        <Image src="/flags/gb.svg" alt="British Flag" width={24} height={24} />
      </button>
      <button
        onClick={() => setSelectedLang('fr')}
        className={`transition-transform duration-300 ease-in-out ${
          selectedLang === 'fr' ? 'scale-110' : 'opacity-60'
        }`}
        aria-label="Switch to French"
      >
        <Image src="/flags/fr.svg" alt="French Flag" width={24} height={24} />
      </button>
    </div>
  );
}