import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Link from 'next/link';

export default function Blog({ posts }) {
    return (
        <>
          <div>Currently, this page is not fully functional, come back later though!</div>
          <p>List of posts:</p>
          {posts.map((post, index) => (
              <div><Link href={'/blog/' + post.slug}><a>{post.frontMatter.title}</a></Link></div>
          ))}
        </>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));

    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            frontMatter,
            slug: filename.split('.')[0]
        };
    });

    return {
        props: {
            posts
        }
    };
}
