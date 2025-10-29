export type Project = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
    featured: boolean;
}

export type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    body: string;
}

export type Skill = {
    id: string;
    documentId: string;
    name: string;
    alternateSkillNames: Array<string>;
    years: number;
}

export type ResumeGig = {
    id: string;
    documentId: string;
    StartDate: Date;
    EndDate: Date;
    Team?: string;
    Title: string;
    Contract: boolean;
    MarkdownDescription: string;
    Type: string;
    newOrg: boolean;
    fullTime: true;
    Accomplishments?: string;
    url: string;
    EmployerName: string;
    EmployerWebsite: string;
}

export type StrapiResponse<T> = {
    data: T[]
};

export type StrapiSkill = {
    id: string;
    documentId: string;
    Skill: string;
    AlternateSkillNames: string;
    Years: number;
}

export type StrapiGig = {
    id: string;
    documentId: string;
    StartDate: Date;
    EndDate: Date;
    Team?: string;
    Title: string;
    contract: boolean;
    MarkdownDescription: string;
    Type: string;
    newOrg: boolean;
    fullTime: true;
    Accomplishments?: string;
    Logo?: { url: string };
    EmployerWebsite?: string;
    EmployerName?: string;
}

export type StrapiSummary = {
    id: string;
    documentId: string;
    SummaryItem: string;
}

export type StrapiProject = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: { url: string; };
            small?: { url: string; };
            medium?: { url: string; };
            large?: { url: string; };
        }
    }
    url: string;
    date: string;
    category: string;
    featured: boolean;
}

export type StrapiPost = {
    id: string;
    documentId: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    body: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: { url: string; };
            small?: { url: string; };
            medium?: { url: string; };
            large?: { url: string; };
        }
    }
}