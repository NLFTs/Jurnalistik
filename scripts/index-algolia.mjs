import { algoliasearch } from 'algoliasearch';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_ADMIN_API_KEY) {
    console.error('Error: ALGOLIA_APPLICATION_ID or ALGOLIA_ADMIN_API_KEY is missing in .env file.');
    process.exit(1);
}

const client = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_ADMIN_API_KEY
);

const indexName = 'blog_posts';

const contentDir = path.join(process.cwd(), 'content/blog');

if (!fs.existsSync(contentDir)) {
    console.error(`Directory not found: ${contentDir}`);
    process.exit(1);
}

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

const records = files.map(file => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        objectID: file.replace('.md', ''),
        title: data.title || file.replace('.md', ''),
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        path: `/blog/${file.replace('.md', '')}`,
        content: content.substring(0, 5000), // Limit content size for Algolia
    };
});

async function indexContent() {
    try {
        if (records.length === 0) {
            console.log('No blog posts found to index.');
            return;
        }

        console.log(`Indexing ${records.length} posts to Algolia...`);
        await client.saveObjects({
            indexName: indexName,
            objects: records
        });
        console.log('Successfully indexed blog posts to Algolia');
    } catch (error) {
        console.error('Error indexing to Algolia:', error);
        console.error('Make sure you have set ALGOLIA_APPLICATION_ID and ALGOLIA_ADMIN_API_KEY in your .env file.');
    }
}

indexContent();
