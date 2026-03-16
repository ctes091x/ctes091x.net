import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    modDate: z.date().optional(),
    ogImage: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
