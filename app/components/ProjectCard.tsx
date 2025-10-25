import type { Project } from "~/types";
import { Link } from "react-router";

const ProjectCard = ({ project }: { project: Project }) => {
    return (<Link className="block transform transition duration-300 hover:scale-[1.05]" to={`/projects/${project.documentId}`}
    >
        <div className="bg-gray-500 border border-gray-700 rounded-lg mb-8 overflow-hidden shadow-sm transition hover:shadow-md">
            <img
                src={project.image}
                alt={project.title}
                className='w-full h-30 object-cover' />
            <div className="p-5">
                <h3 className="text-4xl font-bold text-blue-300 mb-2">
                    {project.title}
                </h3>
                <p className="text-md text-gray-200 mb-3 line-clamp-2 min-h-[3rem]">
                    {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-green-200">
                    <span>{project.category}</span>
                    <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }</span>
                </div>
            </div>
        </div>
    </Link>
    );
}

export default ProjectCard;