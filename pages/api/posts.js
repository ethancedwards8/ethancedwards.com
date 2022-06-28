import { getAllPosts } from '../../lib/posts';

export default function handler(req, res) {
    res.status(200).json(getAllPosts());

}
