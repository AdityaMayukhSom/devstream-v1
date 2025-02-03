import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: "page",
      source: "blogs/*.md",
    }),
  },
});
