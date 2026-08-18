import type { RouteObject } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhotoAutomationPage from './pages/PhotoAutomationPage';
import DescriptionValidationPage from './pages/DescriptionValidationPage';
import TranslationPage from './pages/TranslationPage';
import ChatbotPage from './pages/ChatbotPage';
import AuditPage from './pages/AuditPage';
import WebsitesPage from './pages/WebsitesPage';

const RootLayout = () => (
  <HelmetProvider>
    <Outlet />
  </HelmetProvider>
);

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { path: '/', Component: HomePage },
      { path: '/automatyzacja-zdjec-produktowych', Component: PhotoAutomationPage },
      { path: '/walidacja-opisow-produktow', Component: DescriptionValidationPage },
      { path: '/tlumaczenie-katalogu-produktowego', Component: TranslationPage },
      { path: '/chatbot-ai-on-premise', Component: ChatbotPage },
      { path: '/audyt', Component: AuditPage },
      { path: '/strony-www', Component: WebsitesPage },
    ]
  }
];


