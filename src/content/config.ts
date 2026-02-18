import { defineCollection, z } from 'astro:content';

const products = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        price: z.number(),
        size: z.string(),
        image: z.string(),
        short_description: z.string(),
        description: z.string(),
        top_notes: z.string(),
        middle_notes: z.string(),
        base_notes: z.string(),
        stock: z.string(),
        whatsapp_number: z.string(),
        facebook_link: z.string(),
    }),
});

export const collections = { products };
