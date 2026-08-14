import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const PhotoAutomationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/automatyzacja-zdjec-produktowych"
      title="Automatyzacja zdjęć produktowych AI — CodeWorks Elbląg"
      metaDescription="Automatyczna obróbka zdjęć produktów: wycinanie tła, dopasowanie logotypów i kadrowanie lokalnym modelem AI. Sprawdź ofertę."
      h1="Automatyzacja obróbki zdjęć produktowych dla e-commerce"
      badge="Automatyzacja Zdjęć AI"
      problem="Ręczne przygotowanie tysięcy zdjęć dostarczanych przez producentów zajmuje grafikom całe tygodnie. Każdy dostawca przesyła pliki w innym rozmiarze, na różnym tle i z niejednolitym kadrowaniem. Wydłuża to czas wprowadzania nowości na sklep i generuje wysokie koszty stałe obróbki graficznej."
      steps={[
        {
          number: "01",
          title: "Pobieranie plików",
          description: "System automatycznie zaciąga nowe zdjęcia produktów z serwera, FTP lub folderów dostawców."
        },
        {
          number: "02",
          title: "Usuwanie tła i kadrowanie",
          description: "Lokalny model wycina tło, ujednolica marginesy, wyśrodkowuje produkt i dostosowuje proporcje."
        },
        {
          number: "03",
          title: "Nakładanie logotypów",
          description: "Automatyczne dodawanie znaku wodnego, znaku marki lub znaków wymaganych przez marketplace."
        },
        {
          number: "04",
          title: "Eksport do sklepu",
          description: "Zoptymalizowane pliki graficzne trafiają bezpośrednio do bazy danych sklepu lub platformy e-commerce."
        }
      ]}
      benefits={[
        {
          title: "Skrócenie czasu o 95%",
          description: "Czas wprowadzania nowych zdjęć do katalogu skraca się z kilku dni do zaledwie kilku minut."
        },
        {
          title: "100% Spójności Wizualnej",
          description: "Wszystkie zdjęcia w Twoim sklepie mają jednolite tło, proporcje i profesjonalny wygląd."
        },
        {
          title: "Brak Rachunków za Chmurę",
          description: "Model działa lokalnie na Twoim serwerze — bez płacenia subskrypcji za zewnętrzne API."
        }
      ]}
      priceImplementation="od 12 000 zł netto"
      priceMaintenance="od 500 zł/mies"
      priceTypical="12 000 – 25 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany wdrożeniem automatyzacji obróbki zdjęć produktowych AI."
    />
  );
};

export default PhotoAutomationPage;
