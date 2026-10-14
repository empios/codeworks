import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const DescriptionValidationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/walidacja-opisow-produktow"
      title="Sprawdzanie opisów produktów z kartami PDF — CodeWorks Elbląg"
      metaDescription="Automatyczne porównanie opisów w sklepie z kartami technicznymi PDF producenta. Raport rozbieżności, działa na Twoim serwerze."
      h1="Opisy produktów zgodne z kartami PDF producenta"
      badge="AI · opisy produktów"
      problem="W opisie w sklepie stoi 400 ml, a w karcie producenta 350 ml. Takie różnice kończą się zwrotami i reklamacjami, a ręczne porównywanie tysięcy opisów z plikami PDF zajmuje dni i łatwo coś przeoczyć."
      steps={[
        { number: "01", title: "Czytanie kart PDF", description: "Program wyciąga parametry z kart technicznych producenta." },
        { number: "02", title: "Pobranie opisów", description: "Pobiera aktualne opisy i atrybuty produktów z Twojego sklepu lub systemu." },
        { number: "03", title: "Porównanie", description: "Zestawia wartości i wyłapuje miejsca, w których się różnią." },
        { number: "04", title: "Raport", description: "Dostajesz listę rozbieżności z proponowanymi poprawkami do akceptacji." }
      ]}
      benefits={[
        { title: "Mniej zwrotów i reklamacji", description: "Klient dostaje to, co przeczytał w opisie." },
        { title: "Koniec ręcznego porównywania", description: "Pracownik sprawdza tylko listę rozbieżności, a nie każdy produkt." },
        { title: "Dane zostają u Ciebie", description: "Program działa na Twoim serwerze, karty i opisy nie wychodzą z firmy." }
      ]}
      priceImplementation="od 15 000 zł netto"
      priceMaintenance="od 800 zł/mies."
      priceTypical="15 000 – 30 000 zł netto"
      initialFormMessage="Dzień dobry, interesuje mnie automatyczne sprawdzanie opisów produktów z kartami PDF."
    />
  );
};

export default DescriptionValidationPage;
