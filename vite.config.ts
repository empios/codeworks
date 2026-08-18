import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  ssgOptions: {
    onPageRendered(_route, html) {
      const rootMatch = html.match(/<div id="root"[^>]*>([\s\S]*)<\/div>/);
      if (!rootMatch) return html;

      let headAdditions = '';
      let rootContent = rootMatch[1];

      // Extract title element
      const titleMatch = rootContent.match(/<title\b[^>]*>[\s\S]*?<\/title>/i);
      if (titleMatch) {
        headAdditions += titleMatch[0];
        rootContent = rootContent.replace(titleMatch[0], '');
      }

      // Extract meta tags from top of root
      const metaMatches = rootContent.match(/<meta\b[^>]*\/?>/gi);
      if (metaMatches) {
        for (const meta of metaMatches) {
          headAdditions += meta;
          rootContent = rootContent.replace(meta, '');
        }
      }

      // Extract canonical link tags from top of root
      const linkMatches = rootContent.match(/<link\b[^>]*canonical[^>]*\/?>/gi);
      if (linkMatches) {
        for (const link of linkMatches) {
          headAdditions += link;
          rootContent = rootContent.replace(link, '');
        }
      }

      if (headAdditions) {
        html = html.replace('</head>', `${headAdditions}</head>`);
        html = html.replace(rootMatch[0], `<div id="root" data-server-rendered="true">${rootContent}</div>`);
      }

      return html;
    }
  }
});

