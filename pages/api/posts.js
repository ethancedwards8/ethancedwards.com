import { getAllPosts } from '../../lib/posts';
import { serialize } from 'next-mdx-remote/serialize';

export default function handler(req, res) {
    res.status(200).json(getAllPosts());

}
