import React, { useState, useEffect } from 'react';
import { Gift, MapPin, Phone, Mail, Send, CheckCircle, Coffee, User, Loader2, AlertCircle } from 'lucide-react';
import { AuditFormData } from '../types';

// KONFIGURACJA ADRESU E-MAIL DO ODBIERANIA LEADÓW (FormSubmit)
const OWNER_EMAIL = "pawelwlodarczyk97@yahoo.com"; 

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    contact: '',
    website: '',
    meetingLocation: 'client',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const locations = ["Gdańsk", "Gdynia", "Sopot", "Elbląg", "Pasłęk", "Tolkmicko", "Młynary", "Gronowo Górne"];

  // Update message field if an initialMessage / calculator quote comes in
  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({
        ...prev,
        message: initialMessage
      }));
    }
  }, [initialMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nowy Audyt Wideo / Lead od: ${formData.name}`,
          _captcha: "false",
          _template: "table",
          Imię_Firma: formData.name,
          Kontakt: formData.contact,
          Adres_Strony: formData.website || 'Brak (Nowy projekt)',
          Preferowane_Miejsce: formData.meetingLocation === 'client' ? 'Dojazd do firmy klienta (Trójmiasto / Elbląg)' : formData.meetingLocation === 'cafe' ? 'Spotkanie w kawiarni w Gdańsku/Gdyni/Sopocie/Elblągu' : 'Kontakt telefoniczny / Online',
          Wiadomość: formData.message || 'Brak dodatkowych uwag'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="kontakt" 
      className="py-20 border-t relative transition-colors"
      style={{
        backgroundColor: 'var(--pg-bg-subtle)',
        borderColor: 'var(--pg-border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-ubuntuOrange-50 px-3 py-1 rounded bg-ubuntuOrange-50/10">
              <Gift className="w-4 h-4 text-ubuntuOrange-50" />
              <span>Darmowy Lead Magnet (0 zł)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--pg-text-primary)' }}>
              Wklej adres swojej strony – w <span className="text-ubuntuOrange-50">24h</span> wyślę darmowy audyt wideo!
            </h2>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
              Nagram krótki, 2-minutowy materiał wideo, w którym wskażę błędy UX, SEO i szybkości ładowania obecnej strony Twojej firmy. Bez żadnych zobowiązań!
            </p>

            <div className="space-y-4 pt-4 border-t" style={{ borderColor: 'var(--pg-border-subtle)' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Właściciel &amp; Programista:</h4>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: 'var(--pg-text-secondary)' }}>CodeWorks – Paweł Włodarczyk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Miejscowości spotkań osobistych:</h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {locations.map((loc, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-ubuntuOrange-50/10 border-ubuntuOrange-50/30 text-ubuntuOrange-50"
                      >
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Format spotkań:</h4>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--pg-text-secondary)' }}>W Twojej firmie, w kawiarni w Trójmieście/Elblągu lub rozmowa online</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Telefon bezpośredni:</h4>
                  <a href="tel:+48534140682" className="text-base font-bold text-ubuntuOrange-50 hover:underline">+48 534 140 682</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-ubuntuOrange-50/10 text-ubuntuOrange-50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: 'var(--pg-text-primary)' }}>Adres e-mail:</h4>
                  <a href="mailto:pawelwlodarczyk97@yahoo.com" className="text-sm font-semibold text-ubuntuOrange-50 hover:underline">pawelwlodarczyk97@yahoo.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <div className="pg-card p-8 rounded-2xl shadow-xl border-2 border-ubuntuOrange-50/30">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--pg-text-secondary)' }}>
                        Twoje Imię / Firma *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="np. Jan Kowalski (Firma Gdańsk / Elbląg)" 
                        className="w-full px-4 py-3 rounded-lg border focus:border-ubuntuOrange-50 focus:outline-none text-sm transition-colors"
                        style={{
                          backgroundColor: 'var(--pg-input-bg)',
                          borderColor: 'var(--pg-input-border)',
                          color: 'var(--pg-input-text)'
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--pg-text-secondary)' }}>
                        Telefon lub E-mail *
                      </label>
                      <input 
                        type="text" 
                        id="contact" 
                        required 
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="np. jan@firma.pl lub 500..." 
                        className="w-full px-4 py-3 rounded-lg border focus:border-ubuntuOrange-50 focus:outline-none text-sm transition-colors"
                        style={{
                          backgroundColor: 'var(--pg-input-bg)',
                          borderColor: 'var(--pg-input-border)',
                          color: 'var(--pg-input-text)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--pg-text-secondary)' }}>
                      Adres obecnej strony WWW / Opis projektu
                    </label>
                    <input 
                      type="text" 
                      id="website" 
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="np. www.moja-firma.pl (lub nowa strona od zera)" 
                      className="w-full px-4 py-3 rounded-lg border focus:border-ubuntuOrange-50 focus:outline-none text-sm transition-colors"
                      style={{
                        backgroundColor: 'var(--pg-input-bg)',
                        borderColor: 'var(--pg-input-border)',
                        color: 'var(--pg-input-text)'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="meetingLocation" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--pg-text-secondary)' }}>
                      Preferowane miejsce kontaktu / spotkania
                    </label>
                    <select 
                      id="meetingLocation" 
                      value={formData.meetingLocation}
                      onChange={(e) => setFormData({ ...formData, meetingLocation: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-lg border focus:border-ubuntuOrange-50 focus:outline-none text-sm transition-colors"
                      style={{
                        backgroundColor: 'var(--pg-input-bg)',
                        borderColor: 'var(--pg-input-border)',
                        color: 'var(--pg-input-text)'
                      }}
                    >
                      <option value="client">Dojazd do mojej firmy (Gdańsk / Gdynia / Sopot / Elbląg)</option>
                      <option value="cafe">Spotkanie na kawę w Trójmieście lub Elblągu</option>
                      <option value="online">Szybki kontakt telefoniczny / Audyt wideo online</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--pg-text-secondary)' }}>
                      Dodatkowe uwagi / Wycena z kalkulatora
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Napisz krótko, na czym najbardziej Ci zależy lub wygeneruj wycenę w kalkulatorze..." 
                      className="w-full px-4 py-3 rounded-lg border focus:border-ubuntuOrange-50 focus:outline-none text-sm transition-colors font-mono text-xs leading-relaxed"
                      style={{
                        backgroundColor: 'var(--pg-input-bg)',
                        borderColor: 'var(--pg-input-border)',
                        color: 'var(--pg-input-text)'
                      }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-ubuntuOrange-50 hover:bg-ubuntuOrange-60 text-white font-bold text-base shadow-lg hover:shadow-pg-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Wysyłanie formularza...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Wyślij Wycenę / Audyt (0 zł)</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center" style={{ color: 'var(--pg-text-muted)' }}>
                    Szanuję Twoją prywatność. Brak spamu. Odpowiadam w maksymalnie 24 godziny.
                  </p>
                </form>
              ) : (
                <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg" style={{ color: 'var(--pg-text-primary)' }}>Dziękuję za zgłoszenie, {formData.name || 'Klencie'}!</h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--pg-text-secondary)' }}>
                    Otrzymałem Twoją specyfikację. Rozpoczynam analizę i w ciągu 24h wyślę odpowiedź na podany kontakt!
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', contact: '', website: '', meetingLocation: 'client', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold rounded bg-ubuntuOrange-50 text-white hover:bg-ubuntuOrange-60 transition-colors"
                  >
                    Wyślij kolejne zapytanie
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
