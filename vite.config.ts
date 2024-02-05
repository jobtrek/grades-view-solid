import { defineConfig } from "@solidjs/start/config"

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  start: {
    server: {
      preset: "github_pages",
      baseURL: "/grades-view-solid/",
      prerender: {
        routes: [
          "/grades-view-solid/",
          "/grades-view-solid/grades/math/",
          "/grades-view-solid/grades/cie/",
          "/grades-view-solid/grades/english/",
          "/grades-view-solid/grades/epsic/",
          "/grades-view-solid/grades/soci/",
        ],
        crawlLinks: true,
        failOnError: true,
        autoSubfolderIndex: true,
      },
    },
    ssr: true,
  },
})
