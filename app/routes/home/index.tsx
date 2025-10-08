import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from '~/types';
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The friendly DevOps guy" },
    { name: "description", content: "DevOps Cloud and Platform Engineering" },
  ];
}

export async function loader({ request }:Route.LoaderArgs): Promise<{projects:Project[]}> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return {projects: data};
}

const HomePage = ({ loaderData }:Route.ComponentProps) => {
  const { projects } = loaderData;
  console.log(projects);
    return (
      <>
        <FeaturedProjects projects={projects} count={3} />
        <AboutPreview/>
      </>
    );
}

export default HomePage;