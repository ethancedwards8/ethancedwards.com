import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const POSTS_PATH = join(process.cwd(), 'posts');

export function getPostsSlugs() {
    return fs.readdirSync(POSTS_PATH);
}

export function getAllPosts() {
    const posts = getPostsSlugs().map(filename => {
        const markdownWithMeta = fs.readFileSync(join('posts', filename), 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            frontMatter,
            slug: filename.split('.')[0]
        };
    });

    console.log(posts);
}
