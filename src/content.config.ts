import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      // Medical blog specific fields (backward compatible)
      category: z.enum(['porady', 'aktualnosci']).default('porady'),
      tags: z.array(z.string()).default([]),
      author: z.string().default('Dr Jarema Paduszyński'),
      keywords: z.string().optional(),
      readingTime: z.number().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
