import { useState } from 'react';
import type { Route } from "./+types/index";
import type { Project } from '~/types';
import ProjectCard from "~/components/ProjectCard";

export async function loader({ request }: Route.LoaderArgs):
    Promise<{ projects: Project[] }> {
    const res = await fetch('http://localhost:8000/projects');
    const data = await res.json();

    return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
    const { projects } = loaderData as { projects: Project[] };

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirst, indexOfLast);

    // Pagination button render
    return (<>
        <h2 className="text-3xl font-bold mb-8 text-center">
            🧑‍🏭 My projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    </>);
}

export default ProjectsPage;