import React from 'react';
import { Phone, Mail, Video } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../config/contact';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 backdrop-blur-lg border-t shadow-2xl transition-colors"
      style={{
        backgroundColor: 'var(--pg-header-bg)',
        borderColor: 'var(--pg-header-border)'
      }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a 
          href={`tel:${CONTACT_PHONE}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-center transition-all"
          style={{
            backgroundColor: 'var(--pg-layer-01)',
            borderColor: 'var(--pg-border-subtle)',
            color: 'var(--pg-text-primary)'
          }}
        >
          <Phone className="w-4 h-4 text-ubuntuOrange-50 mb-0.5" />
          <span className="text-[10px] font-bold">Zadzwoń</span>
        </a>

        <a 
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-center transition-all"
          style={{
            backgroundColor: 'var(--pg-layer-01)',
            borderColor: 'var(--pg-border-subtle)',
            color: 'var(--pg-text-primary)'
          }}
        >
          <Mail className="w-4 h-4 text-ubuntuOrange-50 mb-0.5" />
          <span className="text-[10px] font-bold">E-mail</span>
        </a>

        <a 
          href="#kontakt"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-ubuntuOrange-50 text-white font-bold text-center shadow-sm"
        >
          <Video className="w-4 h-4 mb-0.5" />
          <span className="text-[10px]">Audyt (0 zł)</span>
        </a>
      </div>
    </div>
  );
};
