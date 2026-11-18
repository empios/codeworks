import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import '@fontsource-variable/ubuntu-sans';
import '@fontsource-variable/ubuntu-sans-mono';
import './index.css';

export const createRoot = ViteReactSSG({ routes });
export const createApp = createRoot;

