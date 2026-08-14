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
      problem="Błędne wymiary, niepoprawne parametry i pomylone kody produktów w opisach sklepu powodują kosztowne zwroty oraz reklamacje klientów. Ręczna weryfikacja tysięcy kart katalogowych PDF dostawców zajmuje setki godzin i nie daje pewności wyłapania wszystkich pomyłek."
      steps={[
        {
          number: "01",
          title: "Odczyt specyfikacji PDF",
          description: "System pobiera karty techniczne PDF od dostawców i ekstrahuje z nich kluczowe parametry."
        },
        {
          number: "02",
          title: "Pobranie danych ze sklepu",
          description: "Zaciągane są aktualne opisy, tabele atrybutów i specyfikacje produktów z bazy e-commerce."
        },
        {
          number: "03",
          title: "Walidacja lokalnym AI",
          description: "Algorytm porównuje wartości, jednostki oraz wymiary i flaguje każdą niezgodność."
        },
        {
          number: "04",
          title: "Raport i automatyczna korekta",
          description: "Otrzymujesz gotowy zestaw informacji z propozycją automatycznego nadpisania błędnych wartości."
        }
      ]}
      benefits={[
        {
          title: "Redukcja Zwrotów i Reklamacji",
          description: "Poprawne parametry techniczne eliminują pomyłki zakupowe klientów na sklepie."
        },
        {
          title: "100% Zgodności z Dokumentacją",
          description: "Pewność, że opisy na sklepie są w pełni spójne z oficjalnymi kartami PDF producenta."
        },
        {
          title: "Automatyczny Monitoring",
          description: "Ciągła weryfikacja nowych dostaw i wprowadzanych produktów bez angażowania zespołu."
        }
      ]}
      priceImplementation="od 15 000 zł netto"
      priceMaintenance="od 800 zł/mies"
      priceTypical="15 000 – 30 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany automatyczną walidacją opisów produktów z kartami katalogowymi PDF."
    />
  );
};

export default DescriptionValidationPage;
