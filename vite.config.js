import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        card: path.resolve(__dirname, 'src/pages/card.html'),
        cardResponsive : path.resolve(__dirname, 'src/pages/responsive-card.html'),
        masterCard: path.resolve(__dirname, 'src/pages/masterCard.html'),
      },
    },
  },
});
