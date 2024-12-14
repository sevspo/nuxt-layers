// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/eslint"],

  alias: {
    "~": currentDir,
  },
  css: [join(currentDir, "./assets/css/styles.css")],
  components: [
    {
      path: join(currentDir, "./components"),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
    },
    {
      path: join(currentDir, "./components/ui"),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
    },
  ],
});
