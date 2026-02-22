import { defineCollection, z } from 'astro:content';

const products = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string(),
        images: z.array(z.string()).optional(), // extra gallery images (future use)
        price_6ml: z.number(),
        price_15ml: z.number(),
        top_notes: z.string(),
        heart_notes: z.string(),
        base_notes: z.string(),
        accords: z.string(),
        longevity: z.string(),
        projection: z.string(),
    }),
});

export const collections = { products };
