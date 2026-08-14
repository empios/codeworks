import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const TranslationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/tlumaczenie-katalogu-produktowego"
      title="Tłumaczenie katalogów produktowych AI — CodeWorks Elbląg"
      metaDescription="Lokalne tłumaczenie AI dla katalogów e-commerce. Bezpiecznie, szybko i bez opłat za tokeny w chmurze. Sprawdź wycenę."
      h1="Automatyczne tłumaczenie katalogów produktowych AI"
      badge="Automatyzacja Translacji Katalogów"
      problem="Przekład wielotysięcznych katalogów produktów na rynki zagraniczne generuje ogromne koszty przy korzystaniu z biur tłumaczeń. Z kolei chmurowe usługi API naliczają wysokie opłaty za każdy milion tokenów i często niszczą strukturę znaczników HTML w opisach."
      steps={[
        {
          number: "01",
          title: "Import katalogu produktów",
          description: "Pobranie danych produktowych z bazy e-commerce lub pliku CSV/XML."
        },
        {
          number: "02",
          title: "Słownik pojęć branżowych",
          description: "Wdrożenie bazy pojęć i nazw technicznych specyficznych dla Twojego asortymentu."
        },
        {
          number: "03",
          title: "Przetwarzanie lokalnym modelem",
          description: "Lokalny model AI tłumaczy opisy, nazwy i atrybuty przy nienaruszonej strukturze kodów HTML."
        },
        {
          number: "04",
          title: "Zapis w nowej wersji językowej",
          description: "Automatyczne zasilenie bazy sklepu gotową wersją językową gotową do publikacji."
        }
      ]}
      benefits={[
        {
          title: "Skalowanie Wielkich Baz",
          description: "Wydajna infrastruktura radzi sobie z obszernymi bazami produktów hurtowni i dystrybutorów."
        },
        {
          title: "Zero Opłat za Tokeny API",
          description: "Lokalny model eliminuje abonamentowe i powierzchniowe opłaty za chmurowe translatory."
        },
        {
          title: "Zachowanie Kodów HTML i Nazw",
          description: "Układ graficzny opisów oraz specyficzne pojęcia techniczne pozostają w 100% poprawne."
        }
      ]}
      priceImplementation="od 10 000 zł netto"
      priceMaintenance="od 500 zł/mies"
      priceTypical="10 000 – 22 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany automatycznym tłumaczeniem katalogu produktowego lokalnym modelem AI."
    />
  );
};

export default TranslationPage;
