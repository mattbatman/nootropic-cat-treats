// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const quotesCollection = defineCollection({
    type: 'content',
    schema: z.object({
			id: z.number(),
      quotee: z.string(),
      platform: z.string(),
      link: z.string(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  quotes: quotesCollection,
};