import type { Skill, ResumeGig } from "~/types";
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

type BioProps = {
    skills: Skill[];
    gigs: ResumeGig[];
    summaries: string[];
}

const resumeDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const hoverMessage = (gig: ResumeGig): string => {
    const employmentType: string = gig.fullTime ? "full-time" : "part-time";
    const contract: string = gig.Contract ? "contract" : '';
    return gig.Type + " " + employmentType + " " + contract;
}

const Bio = ({ skills, gigs, summaries }: BioProps) => {
    const [expanded, setExpanded] = useState(false);

    return (<>
        <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-4"> Summary
            </h2>
            <ul className="list-disc list-inside">
                {summaries.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Key Skills
        </h2>
        <ul className="flex flex-wrap text-md text-gray-200 gap-6">
            {skills
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((skill) => (
                    <li key={skill.documentId}
                        className="bg-gray-500 px-5 py-2 rounded-full"
                        title={`${skill.alternateSkillNames} - ${skill.years} ${skill.years === 1 ? 'year' : 'years'}`}
                    >{skill.name}</li>
                ))
            }
        </ul>
        <div className="flex items-center justify-between mt-16 mb-4 w-[80ch]">
            <h2 className="text-2xl font-semibold text-green-600 mt-16 mb-4"> Experience
            </h2>
            <button
                type="button"
                className="text-green-500 text-3xl font-bold hover:text-green-800 transition mt-12"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "➖" : "➕"}
            </button>
        </div>
        <ul className="text-md">
            {gigs
                .sort((a, b) => b.EndDate.getTime() - a.EndDate.getTime())
                .map((gig) => (
                    <li key={gig.documentId} className="mb-4 flex items-center gap-4">
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
                        <div className="mb-6 w-[80ch]">
                            <div className="text-green-800 font-semibold mt-6">
                                {resumeDate(gig.StartDate)} - {resumeDate(gig.EndDate)}
                            </div>
                            <div className="grid items-baseline grid-cols-[1fr_auto]">
                                <span className="text-green-800 font-semibold truncate">{gig.Title}</span>
                                <span className="text-green-800 font-semibold text-right">{gig.EmployerName}</span>
                            </div>
                            {expanded && (
                                <div className="mt-6 mb-4">
                                    {gig.Team && <div>As a member of {gig.Team}:</div>}

                                    {gig.Accomplishments && (
                                        <div className="mt-2">‼️{gig.Accomplishments}</div>
                                    )}

                                    <div className="markdown mt-2 w-[80ch]">
                                        <ReactMarkdown>{gig.MarkdownDescription}</ReactMarkdown>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                ))
            }
        </ul>
    </>
    );
}

export default Bio;

