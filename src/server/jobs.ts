export interface Job {
    id: number,
    company: string,
    title: string,
    startDate: Date,
    endDate: Date | null,
    summary: string,
    responsibilities: string[]
}

export const jobs: Job[] = [
    {
        id: 1,
        company: 'Shamrock Foods',
        title: 'CDL Delivery Driver',
        startDate: new Date(2015, 5, 18),
        endDate: null,
        summary: 'fill in later', //fill in later
        responsibilities: ['fill in later'] //fill in later
    }
]