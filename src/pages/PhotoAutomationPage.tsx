import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const PhotoAutomationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/automatyzacja-zdjec-produktowych"
      title="Automatyzacja zdjęć produktowych AI — CodeWorks Elbląg"
      metaDescription="Automatyczna obróbka zdjęć produktów: wycinanie tła, kadrowanie i standaryzacja plików graficznych. Sprawdź ofertę."
      h1="Automatyzacja obróbki zdjęć produktowych dla e-commerce"
      badge="Automatyzacja Zdjęć AI"
      problem="Przygotowanie i ujednolicanie materiałów graficznych dla obszernych katalogów produktów wymaga ciągłej pracy nad wycinaniem tła i dopasowywaniem kadru. Ręczna obróbka wydłuża czas wprowadzania asortymentu i generuje stałe koszty operacyjne."
      steps={[
        {
          number: "01",
          title: "Wprowadzenie grafik",
          description: "Przekazanie surowych plików graficznych do automatycznego przetwarzania."
        },
        {
          number: "02",
          title: "Standaryzacja kadrów",
          description: "Automatyczne wycinanie tła, wyśrodkowanie i ujednolicenie marginesów."
        },
        {
          number: "03",
          title: "Formatowanie i branding",
          description: "Dopasowanie rozdzielczości i dodanie oznaczeń zgodnie z wymogami kanałów sprzedaży."
        },
        {
          number: "04",
          title: "Eksport gotowych plików",
          description: "Przekazanie zoptymalizowanych grafik bezpośrednio do systemu sklepu lub katalogu."
        }
      ]}
      benefits={[
        {
          title: "Przyspieszenie Publikacji",
          description: "Znaczne skrócenie czasu od otrzymania grafik do ich publikacji w katalogu."
        },
        {
          title: "Spójny Wygląd Katalogu",
          description: "Jednolite tło, dopasowane proporcje i czysta prezentacja produktów."
        },
        {
          title: "Model On-Premise",
          description: "Przetwarzanie lokalne bez przesyłania plików do zewnętrznych serwisów chmurowych."
        }
      ]}
      priceImplementation="od 12 000 zł netto"
      priceMaintenance="od 500 zł/mies"
      priceTypical="12 000 – 25 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany automatyzacją obróbki zdjęć produktowych."
    />
  );
};

export default PhotoAutomationPage;
