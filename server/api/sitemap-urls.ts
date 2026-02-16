
export default defineEventHandler(async (event) => {
    const posts = await queryCollection(event, 'blog').all()
    return posts.map(post => {
        return {
            loc: post.path,
            lastmod: post.date ? new Date(post.date).toISOString() : undefined
        }
    })
})
