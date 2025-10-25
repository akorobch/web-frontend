import { useState } from 'react';
import type { Route } from "./+types/index";
import type { Project } from '~/types';
import ProjectCard from "~/components/ProjectCard";
import Pagination from '~/components/Pagination';
import { AnimatePresence, motion } from 'framer-motion';
import type { StrapiProject, StrapiResponse } from '~/types';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "The friendly DevOps guy | Projects" },
        { name: "description", content: "My website projects portfolio" },
    ];
}

export async function loader(): Promise<{ projects: Project[] }> {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
    const json:StrapiResponse<StrapiProject> = await res.json();

    const projects = json.data.map((item) => {

        return {
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
        };
    });

    return { projects };
}


const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 5;

    const { projects } = loaderData as { projects: Project[] };

    //Get unique categories
    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    // Filter project based on the category
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory)

    // Calculate total pages
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

    return (<>
        <h2 className="text-3xl font-bold mb-8 text-center">
            🧑‍🏭 My projects
        </h2>
        <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
                <button key={category} onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                }}
                    className={`px-5 py-2 rounded text-md cursor-pointer font-semibold ${selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-500 text-gray-100'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
        <AnimatePresence mode='wait'>
            <motion.div 
                layout 
                className="grid gap-12 sm:grid-cols-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}                
            >
                {currentProjects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ProjectCard key={project.id} project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>

        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
    );
}

export default ProjectsPage;