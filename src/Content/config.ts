import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.string(), // también podrías usar z.date() si quieres usar formato ISO
  }),
});

export const collections = {
  posts,
};
