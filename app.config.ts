import { defineConfig } from "@solidjs/start/config"

export default defineConfig({
  server: {
    preset: "github-pages",
    baseURL: "/grades-view-solid/",
    compatibilityDate: "2024-11-01",
    compressPublicAssets: {
      brotli: false,
      gzip: false,
    },
    prerender: {
      routes: [
        "/grades-view-solid/",
        "/grades-view-solid/grades/math",
        "/grades-view-solid/grades/cie",
        "/grades-view-solid/grades/english",
        "/grades-view-solid/grades/epsic",
        "/grades-view-solid/grades/soci",
      ],
      crawlLinks: true,
      failOnError: true,
      autoSubfolderIndex: true,
    },
  },
})
