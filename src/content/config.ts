import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string().optional(),
    pubDate: z.date(),
    image: z.object({
      src: image(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};