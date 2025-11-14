import { useState } from "react";
import type { Route } from "./+types/index";
import type { Post, StrapiResponse, StrapiPost } from "~/types";
import PostCard from '~/components/PostCard';
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Blog | Tech, DevOps & Thoughts by Alex Korobchevsky" },
        {
            name: "description",
            content:
                "Explore articles by Alex Korobchevsky on DevOps, cloud engineering, finance technology, automation, and personal reflections."
        },
        {
            name: "og:title",
            content: "Alex Korobchevsky — Blog"
        },
        {
            name: "og:description",
            content:
                "Technical deep dives, DevOps insights, cloud engineering guides, and thoughts on technology and life."
        },
        {
            name: "twitter:card",
            content: "summary_large_image"
        }
    ];
}

export async function loader(): Promise<{ posts: Post[] }> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=image&sort=date:desc`);

    if (!res.ok) throw new Error('Failed to fetch data');
    const json: StrapiResponse<StrapiPost> = await res.json();
    const posts = json.data.map((item) => ({
        id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        date: item.date,
        body: item.body,
        image: item.image?.formats?.thumbnail
            ? `${item.image.formats.thumbnail.url}`
            : '/images/no-image.png',
    }))

    return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    const { posts } = loaderData;

    const filteredPosts = posts.filter((post) => {
        const query = searchQuery.toLowerCase();
        return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
        )
    })

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

    return (<div className='max-w-3xl mt-12 px-6 py-6 bg-gray-200'>
        <h2 className="text-4xl font-bold text-white-800 mb-12">
            <span className="sm:hidden">Blog</span>
            <span className="hidden sm:inline">✍️ Thought of the Day 🤔</span>

        </h2>
        <PostFilter searchQuery={searchQuery}
            onSearchChange={(query) => {
                setSearchQuery(query);
                setCurrentPage(1);
            }} />

        <div className="space-y-8">
            {currentPosts.length === 0 ? (
                <p className="text-gray-800">
                    No posts found
                </p>
            ) : currentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
            ))}
        </div>
        {
            totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )
        }
    </div>
    );
}

export default BlogPage;