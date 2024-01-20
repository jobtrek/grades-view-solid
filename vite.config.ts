import { defineConfig } from "@solidjs/start/config"

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  start: {
    server: {
      preset: "github-pages",
      baseURL: "/grades-view-solid",
      prerender: {
        routes: ["/grades-view-solid"],
        crawlLinks: true,
      },
    },
    ssr: true,
  },
})
