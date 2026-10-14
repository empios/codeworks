import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const TranslationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/tlumaczenie-katalogu-produktowego"
      title="Tłumaczenie katalogu produktów przez AI | CodeWorks Elbląg"
      metaDescription="Tłumaczenie tysięcy opisów produktów przez model AI na Twoim serwerze. Bez opłat za każde słowo, z zachowaniem formatowania."
      h1="Tłumaczenie katalogu produktów na inne języki"
      badge="AI: tłumaczenia"
      problem="Biuro tłumaczeń liczy za każdą stronę, a przy kilku tysiącach produktów rachunek szybko rośnie. Usługi w chmurze liczą za każde słowo i potrafią rozjechać formatowanie opisów albo przetłumaczyć nazwy, które powinny zostać bez zmian."
      steps={[
        { number: "01", title: "Import katalogu", description: "Pobieram produkty ze sklepu albo z pliku CSV lub XML." },
        { number: "02", title: "Słownik branżowy", description: "Ustalamy, jak tłumaczyć nazwy techniczne i czego nie tłumaczyć wcale." },
        { number: "03", title: "Tłumaczenie", description: "Model AI na Twoim serwerze tłumaczy nazwy, opisy i atrybuty, nie ruszając formatowania." },
        { number: "04", title: "Nowa wersja językowa", description: "Tłumaczenia trafiają do sklepu, gotowe do sprawdzenia i publikacji." }
      ]}
      benefits={[
        { title: "Duże katalogi bez problemu", description: "Kilka czy kilkadziesiąt tysięcy produktów to tylko kwestia czasu pracy serwera." },
        { title: "Bez opłat za każde słowo", description: "Płacisz za wdrożenie i utrzymanie, a nie za objętość tekstu." },
        { title: "Formatowanie i nazwy bez zmian", description: "Pogrubienia, tabele i nazwy własne zostają tam, gdzie były." }
      ]}
      priceImplementation="od 10 000 zł netto"
      priceMaintenance="od 500 zł/mies."
      priceTypical="od 10 000 do 22 000 zł netto"
      initialFormMessage="Dzień dobry, interesuje mnie tłumaczenie katalogu produktów przez AI."
    />
  );
};

export default TranslationPage;
