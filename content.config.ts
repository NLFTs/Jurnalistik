import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                image: z.string().optional(),
                tags: z.array(z.string()).default([]),
                author: z.object({
                    name: z.string(),
                    avatar: z.string(),
                    role: z.string().optional()
                }).default({
                    name: 'Admin',
                    avatar: 'https://ui-avatars.com/api/?name=Admin&background=10b981&color=fff',
                    role: 'Editor'
                })

            })
        })
    }
})
