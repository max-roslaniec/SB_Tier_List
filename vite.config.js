import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      /* passe opções para o otimizador aqui se necessário */
      /* por exemplo, para converter tudo para webp: */
      // webp: {
      //   quality: 75,
      // },
    }),
  ],
});
