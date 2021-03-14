export interface Job {
    id: number,
    company: string,
    location: string,
    title: string,
    startDate: Date,
    endDate: Date | null,
    summary: string,
    responsibilities: string[]
}

export interface Project {
    id: number,
    name: string,
    infoList: string[],
    techList: string[],
    gitHubLink: string,
    siteLink: string,
}