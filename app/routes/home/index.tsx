import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project, StrapiProject, StrapiResponse, StrapiPost, Post } from '~/types';
import AboutPreview from "~/components/AboutPreview";
import LatestPosts from "~/components/LatestPosts";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The friendly DevOps guy" },
    { name: "description", content: "DevOps Cloud and Platform Engineering" },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${
        import.meta.env.VITE_API_URL
      }/projects?filters[featured][$eq]=true&populate=*`
    ),
    fetch(`${
        import.meta.env.VITE_API_URL
      }/posts?sort[0]=date:desc&populate=*`
    )  
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  }

  const projectsJson: StrapiResponse<StrapiProject> = await projectRes.json();

  const postsJson: StrapiResponse<StrapiPost> = await postRes.json();
  const projects = projectsJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.formats?.thumbnail
      ? `${item.image.formats.thumbnail.url}`
      : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }))

const posts = postsJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    image: item.image?.formats?.thumbnail
      ? `${item.image.formats.thumbnail.url}`
      : '/images/no-image.png',
    date: item.date,
  }))
  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={3} />
      <AboutPreview />
      <LatestPosts posts={posts} limit={5} />
    </>
  );
}

export default HomePage;