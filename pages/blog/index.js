import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export default function Blog({ posts }) {
    return (
        <>
          <div>Currently, this page is not fully functional, come back later though!</div>
          <p>List of posts:</p>
          <div className="blog">
            {posts.map((post, index) => (
                <div className="post">
                  <Link href={'/blog/' + post.slug} passHref>
                    <a><h1>{post.frontMatter.title}</h1></a>
                  </Link>
                  <h4>{post.frontMatter.date}</h4>
                  <p>{post.frontMatter.description}</p>
                </div>
            ))}
          </div>
        </>
    );
}

export async function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts
        }
    };
}
