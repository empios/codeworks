import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const PhotoAutomationPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/automatyzacja-zdjec-produktowych"
      title="Automatyczna obróbka zdjęć produktów | CodeWorks Elbląg"
      metaDescription="Usuwanie tła, kadrowanie i ujednolicanie zdjęć produktów bez ręcznej pracy grafika. Działa na Twoim serwerze. Sprawdź ceny."
      h1="Zdjęcia produktów gotowe do sklepu, bez ręcznej obróbki"
      badge="AI: zdjęcia produktów"
      problem="Dostawcy przysyłają zdjęcia na różnym tle, krzywo wykadrowane, w różnych rozmiarach. Ktoś w firmie poprawia je ręcznie, jedno po drugim, a nowe produkty czekają na publikację, aż zdjęcia będą gotowe."
      steps={[
        { number: "01", title: "Wrzucasz zdjęcia", description: "Do folderu albo przez prosty formularz, tak jak dostajesz je od dostawcy." },
        { number: "02", title: "Tło i kadr", description: "Program usuwa tło, prostuje produkt, centruje go i ustawia równe marginesy." },
        { number: "03", title: "Rozmiar i oznaczenia", description: "Zdjęcia dostają wymiary i znaki, jakich wymaga Twój sklep, Allegro czy inny kanał sprzedaży." },
        { number: "04", title: "Gotowe pliki", description: "Zdjęcia trafiają do sklepu albo do wskazanego folderu." }
      ]}
      benefits={[
        { title: "Produkty szybciej w sklepie", description: "Nie czekasz, aż grafik znajdzie czas na kolejną partię zdjęć." },
        { title: "Spójny wygląd", description: "Wszystkie zdjęcia mają to samo tło, proporcje i marginesy." },
        { title: "Zdjęcia zostają u Ciebie", description: "Wszystko dzieje się na Twoim serwerze, bez wysyłania plików do zewnętrznych usług." }
      ]}
      priceImplementation="od 12 000 zł netto"
      priceMaintenance="od 500 zł/mies."
      priceTypical="od 12 000 do 25 000 zł netto"
      initialFormMessage="Dzień dobry, interesuje mnie automatyczna obróbka zdjęć produktów."
    />
  );
};

export default PhotoAutomationPage;
