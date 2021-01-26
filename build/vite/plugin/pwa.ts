import { VitePWA } from 'vite-plugin-pwa';

import { ViteEnv } from '../../utils';

export function configPwaConfig(env: ViteEnv, isBulid: boolean) {
  const { VITE_USE_PWA, VITE_GLOB_APP_TITLE, VITE_GLOB_APP_SHORT_NAME } = env;

  if (VITE_USE_PWA && isBulid) {
    // vite-plugin-pwa
    const pwaPlugin = VitePWA({
      manifest: {
        name: VITE_GLOB_APP_TITLE,
        short_name: VITE_GLOB_APP_SHORT_NAME,
        icons: [
          {
            src: './resource/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './resource/img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    });
    return pwaPlugin;
  }
  return [];
}
