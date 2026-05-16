// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://microcontrollersig.github.io', 
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter", // Exposes it cleanly to Tailwind/CSS
    },
    {
        provider: fontProviders.fontsource(),
        name: "Newsreader",
        cssVariable: "--font-newsreader", // Exposes it cleanly to Tailwind/CSS
    },
    ],
    vite: {
    plugins: [tailwindcss()],
    }, 
   
});