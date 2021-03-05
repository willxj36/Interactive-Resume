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