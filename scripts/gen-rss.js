const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
    const feed = new RSS({
        title: 'Ethan Carter Edwards',
        site_url: 'https://ethancedwards.com',
        feed_url: 'https://ethancedwards.com/feed.xml'
    });

    const posts = await fs.readdir(path.join(__dirname, '..', 'posts'));

    await Promise.all(
        posts.map(async (name) => {
            if (name.startsWith('index.')) return;

            const content = await fs.readFile(
                path.join(__dirname, '..', 'posts', name)
            );
            const frontmatter = matter(content);

            feed.item({
                title: frontmatter.data.title,
                url: 'https://ethancedwards.com' + '/blog/' + name.replace(/\.mdx?/, ''),
                date: frontmatter.data.date,
                description: frontmatter.data.description,
                author: frontmatter.data.author
            });
        })
    );

    await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
