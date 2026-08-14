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
      problem="Odnajdywanie potrzebnych informacji w bogatej dokumentacji, procedurach czy kartach technicznych wymaga czasochłonnego przeszukiwania folderów. Przesyłanie wewnętrznych materiałów do publicznych narzędzi chmurowych rodzi ryzyko naruszenia prywatności i zasad RODO."
      steps={[
        {
          number: "01",
          title: "Indeksowanie bazy wiedzy",
          description: "Przetwarzanie wewnętrznych plików i dokumentów firmowych."
        },
        {
          number: "02",
          title: "Lokalna baza RAG",
          description: "Stworzenie bezpiecznego indeksu wiedzy na wewnętrznym serwerze."
        },
        {
          number: "03",
          title: "Interfejs asystenta",
          description: "Wygodne okno wyszukiwania i komunikacji dla uprawnionych pracowników."
        },
        {
          number: "04",
          title: "Odpowiedzi ze źródłami",
          description: "Szybka odpowiedź na zapytanie z bezpośrednim wskazaniem dokumentu źródłowego."
        }
      ]}
      benefits={[
        {
          title: "Prywatność & RODO",
          description: "Wszystkie dane i zapytania pozostają wyłącznie w obrębie sieci firmowej."
        },
        {
          title: "Szybki Dostęp do Wiedzy",
          description: "Błyskawiczne odnajdywanie informacji w firmowej dokumentacji."
        },
        {
          title: "Bezpieczeństwo Danych",
          description: "Brak wysyłania materiałów do zewnętrznych serwisów i chmur."
        }
      ]}
      priceImplementation="od 25 000 zł netto"
      priceMaintenance="od 1 500 zł/mies"
      priceTypical="25 000 – 50 000 zł netto"
      initialFormMessage="Dzień dobry, jestem zainteresowany wdrożeniem firmowego chatbota AI (RAG) on-premise."
    />
  );
};

export default ChatbotPage;
