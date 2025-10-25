import { Link } from "react-router";
import type { Post } from "~/types";

type LatestPostsProps = {
    posts: Post[];
    limit?: number;
}

const LatestPosts = ({ posts, limit = 3 }:LatestPostsProps) => {
    const sorted = [...posts].sort((a: Post, b: Post) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const latest = sorted.slice(0, limit);
    return (  
        <section className="max-w-6xl mx-auto px-3 py-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-600">
                🕔 Latest Thoughts 🤔
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latest.map((post) => (
                    <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className='block p-4 border border-gray-700 rounded-lg bg-gray-500 hover:shadow-lg hover:scale-[1.05] transition'
                    >
                    <h3 className="text-lg font-semibold text-blue-300 mb-4">
                        { post.title }
                    </h3>

                    <p className="text-md mb-4 text-gray-300 line-clamp-2 min-h-[3rem]">{post.excerpt}</p>
                    <span className="block mt-3 text-sm text-green-300">
                        { new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }
                    </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
 
export default LatestPosts;