import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const DescriptionValidationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/walidacja-opisow-produktow"
      title="Walidacja opisów produktów z PDF — CodeWorks Elbląg"
      metaDescription="Automatyczne sprawdzanie zgodności opisów e-commerce z dokumentacją techniczną PDF przy użyciu lokalnego AI. Zobacz wycenę."
      h1="Automatyczna walidacja opisów produktów z kartami PDF"
      badge="Walidacja Danych z PDF"
      problem="Rozbieżności między parametrami technicznymi w katalogu a dokumentacją źródłową mogą prowadzić do błędów w opisach i pomyłek przy zamówieniach. Ręczne porównywanie specyfikacji z plikami PDF jest czasochłonne i podatne na niedopatrzenia."
      steps={[
        {
          number: "01",
          title: "Odczyt kart specyfikacji",
          description: "Automatyczne wyciąganie parametrów i danych z dokumentacji technicznej PDF."
        },
        {
          number: "02",
          title: "Analiza danych katalogowych",
          description: "Pobranie aktualnych opisów i atrybutów produktów z bazy systemowej."
        },
        {
          number: "03",
          title: "Automatyczna weryfikacja",
          description: "Porównanie wartości oraz wyłapanie ewentualnych rozbieżności w specyfikacjach."
        },
        {
          number: "04",
          title: "Raport zgodności",
          description: "Generowanie przejrzystego zestawienia z propozycją poprawek danych."
        }
      ]}
      benefits={[
        {
          title: "Redukcja Błędów w Opisach",
          description: "Spójność parametrów technicznych w sklepie z dokumentacją źródłową."
        },
        {
          title: "Zgodność z Dokumentacją",
          description: "Pewność, że prezentowane dane są w pełni zweryfikowane."
        },
        {
          title: "Lokalne Przetwarzanie",
          description: "Model działa na lokalnej infrastrukturze klienta bez wycieku danych zewnętrznie."
        }
      ]}
      priceImplementation="od 15 000 zł netto"
      priceMaintenance="od 800 zł/mies"
      priceTypical="15 000 – 30 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany automatyczną walidacją opisów produktów z kartami PDF."
    />
  );
};

export default DescriptionValidationPage;
