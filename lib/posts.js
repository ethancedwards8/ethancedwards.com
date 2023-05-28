import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import dayjs from 'dayjs';

const POSTS_PATH = join(process.cwd(), 'posts');

export function getPostsSlugs() {
    return fs.readdirSync(POSTS_PATH);
}

export function getAllPosts() {
    const posts = getPostsSlugs().map(filename => {
        const markdownWithMeta = fs.readFileSync(join('posts', filename), 'utf-8');
        const { data: frontMatter, content } = matter(markdownWithMeta);

        return {
            frontMatter,
            content,
            slug: filename.split('.')[0]
        };
    }).sort((post1, post2) => (dayjs(post1.frontMatter.date).isAfter(post2.frontMatter.date) ? -1 : 1));

    return posts;
}

export function getArticleFromSlug(slug) {
    return getAllPosts().find(x => x.slug === slug);
}
