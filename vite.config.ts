import { defineConfig } from "@solidjs/start/config"

export default defineConfig({
  start: {
    server: {
      preset: "github-pages",
      baseURL: "/grades-view-solid",
      prerender: {
        crawlLinks: true,
      },
    },
    ssr: false,
  },
})
