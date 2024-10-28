import { Job } from "../../../../../utils/models";

export interface IJobSummaryProps {
    job: Job,
    expand: boolean
}

export interface IExperienceProps {
    jobs: Job[]
}