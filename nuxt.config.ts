import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  spaLoadingTemplate: false,
  app: {
    rootTag: "body",
    head: {
      bodyAttrs: {
        class: ["min-h-svh", "scroll-smooth", "font-display"],
      },
    },
  },
  devServer: {
    loadingTemplate: undefined,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/fonts", "@nuxt/content"],
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
  content: {
    watch: {
      enabled: true,
    },
    build: {
      markdown: {
        rehypePlugins: {},
        remarkPlugins: {},
        highlight: {
          theme: "github-dark-dimmed",
          langs: [
            "js",
            "jsx",
            "json",
            "ts",
            "tsx",
            "vue",
            "css",
            "html",
            "vue",
            "bash",
            "md",
            "mdc",
            "yaml",
            "java",
            "cpp",
            "go",
            "python",
            "angular-ts",
            "powershell",
            "c",
            "csharp",
            "zig",
            "rust",
            "vue",
            "vimscript",
            "vue-html",
            "sql",
          ],
        },
      },
    },
  },
});
