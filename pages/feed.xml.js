const { promises: fs } = require('fs');
import path from 'path';
import RSS from 'rss';
import matter from 'gray-matter';

export default function RSSFeed({ feed }) {
    return (
        <>
          <p>Hello</p>
          <p>{feed}</p>
        </>
    );
}

export async function getStaticProps() {
    const feed = new RSS({
        title: 'Ethan Carter Edwards',
        site_url: 'https://ethancedwards.com',
        feed_url: 'https://ethancedwards.com/feed.xml'
    });

    const posts = await fs.readdir(path.join(__dirname, 'posts'));

    await Promise.all(
        posts.map(async (name) => {
            if (name.startsWith('index.')) return;

            const post = await fs.readFile(
                path.join(__dirname, '../', '../', 'posts'));
            const { data: frontMatter, content } = matter(post);

            // const mdxSource = await serialize(content);

            feed.item({
                title: frontMatter.title,
                url: '/blog/' + name.replace(/\.mdx?/, ''),
                date: frontMatter.date,
                // description: renderToStaticMarkup(<MDXRemote {...mdxSource}/>),
                author: frontMatter.author
            });
        })
    );

    console.log(feed);

    return {
        props: {
            params: {
                feed: feed.xml({indent: true})
            }
        }
    };
}
