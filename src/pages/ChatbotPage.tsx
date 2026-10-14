import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const ChatbotPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/chatbot-ai-on-premise"
      title="Chatbot AI na firmowych dokumentach | CodeWorks Elbląg"
      metaDescription="Asystent AI, który odpowiada na pytania pracowników na podstawie firmowych dokumentów i podaje źródło. Działa na Twoim serwerze."
      h1="Asystent, który zna Twoje firmowe dokumenty"
      badge="AI: baza wiedzy"
      problem="Procedury, instrukcje i karty techniczne leżą w dziesiątkach folderów. Znalezienie jednej informacji zajmuje kwadrans albo kończy się pytaniem kolegi. Wklejanie firmowych dokumentów do publicznych czatów AI to z kolei ryzyko wycieku danych."
      steps={[
        { number: "01", title: "Zebranie dokumentów", description: "Wskazujesz foldery z plikami, z których asystent ma korzystać." },
        { number: "02", title: "Indeks na Twoim serwerze", description: "Dokumenty są przetwarzane i indeksowane lokalnie, w Twojej sieci." },
        { number: "03", title: "Okno czatu", description: "Pracownicy zadają pytania zwykłym językiem, w przeglądarce." },
        { number: "04", title: "Odpowiedź ze źródłem", description: "Asystent odpowiada i pokazuje, z którego dokumentu wziął informację." }
      ]}
      benefits={[
        { title: "Szybciej do informacji", description: "Odpowiedź w kilka sekund zamiast przeszukiwania folderów." },
        { title: "Można sprawdzić źródło", description: "Każda odpowiedź ma link do dokumentu, więc łatwo ją zweryfikować." },
        { title: "Dokumenty nie wychodzą z firmy", description: "Pytania i pliki zostają na Twoim serwerze." }
      ]}
      priceImplementation="od 25 000 zł netto"
      priceMaintenance="od 1 500 zł/mies."
      priceTypical="od 25 000 do 50 000 zł netto"
      initialFormMessage="Dzień dobry, interesuje mnie asystent AI na firmowych dokumentach."
    />
  );
};

export default ChatbotPage;
