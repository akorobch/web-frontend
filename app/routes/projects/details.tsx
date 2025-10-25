import type { Route } from "./+types/details";
import type { Project, StrapiResponse, StrapiProject } from "~/types";
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export async function loader({ params }: Route.LoaderArgs) {
    const { id } = params;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`);
    if (!res.ok) throw new Response('Project not found', { status: 404 });

    const json: StrapiResponse<StrapiProject> = await res.json();

    const item = json.data[0];

    const project: Project = {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        description: item.description,
        image: item.image?.formats?.large
            ? `${item.image.formats.large.url}`
            : '/images/no-image.png',
        url: item.url,
        date: item.date,
        category: item.category,
        featured: item.featured,
    }

    return { project };
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
    const { project } = loaderData;

    return (<>
        <Link to='/projects' className='flex items-center text-blue-500 hover:text-blue-700 mb-6 transition'>
            <FaArrowLeft className='mr-4' /> Back to Projects
        </Link>
        <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
                <img src={project.image} alt="{project.title} className='w-full rounded-lg shadow-md" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-blue-600 mb-12">
                    {project.title}
                </h1>
                <p className="text-green-600 text-md mb-4">
                    {new Date(project.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                    <span className="mx-4">✨</span>
                    {project.category}
                </p>
                <p className="text-gray-600 mb-8">{project.description}</p>
                <span className="flex mx-2 gap-8">
                    <a href={project.url} target='_blank' className='inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition'>
                        View Live Site ➡️
                    </a>
                    <a href={project.url} target='_blank' className='inline-block text-white font-bold bg-blue-400 hover:bg-blue-700 px-6 py-2 rounded transition'>
                        Source Code 🧑🏻‍💻
                    </a>
                </span>
            </div>
        </div>
    </>);
}

export default ProjectDetailsPage;