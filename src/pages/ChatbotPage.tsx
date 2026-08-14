import React from 'react';
import { OfferTemplate } from '../components/OfferTemplate';

export const ChatbotPage: React.FC = () => {
  return (
    <OfferTemplate
      slug="/chatbot-ai-on-premise"
      title="Chatbot AI on-premise z RAG — CodeWorks Elbląg"
      metaDescription="Własny chatbot AI przeszukujący firmowe dokumenty bez wysyłania danych do chmury. Pełna prywatność i RODO. Zobacz szczegóły."
      h1="Chatbot AI i RAG na dokumentacji firmowej on-premise"
      badge="Baza Wiedzy Firmowej On-Premise"
      problem="Pracownicy marnują cenne godziny na ręczne przeszukiwanie setek instrukcji, umów, specyfikacji technicznych oraz procedur wewnętrznych. Korzystanie z publicznych narzędzi chmurowych grozi wyciekiem poufnych tajemnic firmy i naruszeniem przepisów RODO."
      steps={[
        {
          number: "01",
          title: "Indeksowanie firmowej wiedzy",
          description: "Przetwarzanie wewnętrznych plików PDF, dokumentów Word, instrukcji i kart produktów."
        },
        {
          number: "02",
          title: "Lokalna baza wektorowa RAG",
          description: "Budowa bezpiecznego indeksu wiedzy firmowej działającego w 100% na Twoim własnym serwerze."
        },
        {
          number: "03",
          title: "Interfejs dla zespołu",
          description: "Udostępnienie prostego okna czatu dla pracowników z podziałem na uprawnienia."
        },
        {
          number: "04",
          title: "Odpowiedzi ze wskazaniem źródła",
          description: "Chatbot udziela dokładnych odpowiedzi i od razu podaje link do konkretnego dokumentu PDF."
        }
      ]}
      benefits={[
        {
          title: "100% Prywatności i RODO",
          description: "Wszystkie zapytania i dokumenty firmowe pozostają w obrębie Twojej sieci firmowej."
        },
        {
          title: "Odpowiedzi w 2 Sekundy",
          description: "Koniec z szukaniem w segregatorach i folderach — natychmiastowe wskazanie właściwej instrukcji."
        },
        {
          title: "Brak Wycieku Tajemnic Firmy",
          description: "Model nie uczy się na Twoich danych zewnętrznie i nie przesyła ich do podmiotów trzecich."
        }
      ]}
      priceImplementation="od 25 000 zł netto"
      priceMaintenance="od 1 500 zł/mies"
      priceTypical="25 000 – 50 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany wdrożeniem firmowego chatbota AI on-premise (RAG) na naszej dokumentacji."
    />
  );
};

export default ChatbotPage;
