import { defineCollection, z } from "astro:content";

const landingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    // date: z.date(),
  }),
});

export const collections = {
  landing: landingCollection,
};
