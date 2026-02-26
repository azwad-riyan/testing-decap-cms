import { defineCollection, z } from 'astro:content';

const products = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string(),
        images: z.array(z.string()).optional(),
        price_6ml: z.number(),
        price_15ml: z.number(),
        top_notes: z.string(),
        heart_notes: z.string(),
        base_notes: z.string(),
        accords: z.string(),
        longevity: z.string(),
        projection: z.string(),
        // ─── Categorization (CMS-controlled) ───
        featured: z.boolean().default(false),
        new_arrival: z.boolean().default(false),
        bestseller: z.boolean().default(false),
        on_sale: z.boolean().default(false),
        sale_price_6ml: z.number().optional(),
        sale_price_15ml: z.number().optional(),
        display_order: z.number().default(50),  // lower = shown first
    }),
});

export const collections = { products };
