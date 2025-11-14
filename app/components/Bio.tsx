import type { Skill, ResumeGig } from "~/types";
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

type BioProps = {
    skills: Skill[];
    gigs: ResumeGig[];
    summaries: string[];
}

const resumeDate = (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const hoverMessage = (gig: ResumeGig): string => {
    const employmentType = gig.fullTime ? "full-time" : "part-time";
    const contract = gig.Contract ? "contract" : '';
    return `${gig.Type} ${employmentType} ${contract}`;
}

const Bio = ({ skills, gigs, summaries }: BioProps) => {
    // Track expanded state per gig
    const [expandedGigs, setExpandedGigs] = useState<Record<string, boolean>>({});

    // Check if all gigs are expanded
    const allExpanded = gigs.length > 0 && gigs.every(g => expandedGigs[g.documentId]);

    // Toggle single gig
    const toggleGig = (id: string) => {
        setExpandedGigs(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    }

    // Toggle all gigs
    const toggleAll = () => {
        const newState: Record<string, boolean> = {};
        gigs.forEach(g => {
            newState[g.documentId] = !allExpanded; // Expand all if not all expanded
        });
        setExpandedGigs(newState);
    }

    return (
        <>
            {/* Summary */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Summary</h2>
                <ul className="list-disc list-inside">
                    {summaries.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Skills */}
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Key Skills</h2>
            <ul className="flex flex-wrap text-md text-gray-200 gap-6">
                {skills
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(skill => (
                        <li
                            key={skill.documentId}
                            className="bg-gray-500 px-5 py-2 rounded-full"
                            title={`${skill.alternateSkillNames} - ${skill.years} ${skill.years === 1 ? 'year' : 'years'}`}
                        >
                            {skill.name}
                        </li>
                    ))}
            </ul>

            {/* Experience */}
            <div className="flex justify-between items-center mt-16 mb-6">
                <h2 className="text-2xl font-semibold text-green-600">Experience</h2>
                <button
                    type="button"
                    className="text-green-500 font-bold hover:text-green-800 transition"
                    onClick={toggleAll}
                >
                    {allExpanded ? "Collapse All" : "Expand All"}
                </button>
            </div>

            <ul className="text-md">
                {gigs
                    .sort((a, b) => b.EndDate.getTime() - a.EndDate.getTime())
                    .map(gig => {
                        const isExpanded = expandedGigs[gig.documentId] || false;

                        return (
                            <li
                                key={gig.documentId}
                                className="mb-4 flex flex-col gap-2"
                            >
                                <div
                                    className="flex items-center gap-4 cursor-pointer hover:text-green-400"
                                    onClick={() => toggleGig(gig.documentId)}
                                >
                                    {gig.newOrg ? (
                                        <a href={gig.EmployerWebsite} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={gig.url}
                                                alt={`${gig.Title} logo`}
                                                className="w-12 h-12 object-contain flex-shrink-0"
                                                title={hoverMessage(gig)}
                                            />
                                        </a>
                                    ) : (
                                        <img
                                            src={gig.url}
                                            alt={`${gig.Title} logo (hidden)`}
                                            className="w-12 h-12 object-contain flex-shrink-0 opacity-0 pointer-events-auto"
                                            title={hoverMessage(gig)}
                                        />
                                    )}

                                    <div className="flex-1 w-full max-w-[80ch]">
                                        <div className="text-green-800 font-semibold">
                                            {resumeDate(gig.StartDate)} - {resumeDate(gig.EndDate)}
                                        </div>
                                        <div className="grid items-baseline grid-cols-[1fr_auto]">
                                            <span className="text-green-800 font-semibold truncate">{gig.Title}</span>
                                            <span className="text-green-800 font-semibold text-right">{gig.EmployerName}</span>
                                        </div>
                                    </div>
                                </div>

                                {isExpanded && (
                                    <div className="mt-2 ml-16">
                                        {gig.Team && <div>As a member of {gig.Team}:</div>}
                                        {gig.Accomplishments && <div className="mt-2">‼️{gig.Accomplishments}</div>}
                                        {gig.MarkdownDescription && (
                                            <div className="markdown mt-2 w-full max-w-[80ch]">
                                                <ReactMarkdown>{gig.MarkdownDescription}</ReactMarkdown>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

export default Bio;
