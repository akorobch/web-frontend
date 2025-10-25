import type { Post } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: { post: Post }) => {
    return (<article className="bg-gray-300 p-6 rounded-lg shadow mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            {post.title}
        </h3>
        <p className="text-md text-green-600 mb-8">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
        { post.image && (
            <img src={post.image} alt={post.title}
            className='w-full ht-48 object-cover rounded mb-4' />
        ) }
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className='text-blue-700 font-semibold text-md hover:underline'
        >
            Find Out More ➡️
        </Link>
    </article>);
}

export default PostCard;