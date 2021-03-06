import * as React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../../utils/models';
import * as dayjs from 'dayjs';

interface IJobSummaryProps {
    job: Job
}

const JobSummary: React.FC<IJobSummaryProps> = ({ job }) => {

    let startDate = dayjs(job.startDate).format('MMM YYYY');
    let endDate = job.endDate ? dayjs(job.endDate).format('MMM YYYY') : 'present';

    return(
        <div className="card my-2">
            <div className="card-header">
                <h3 className="card-title">{job.company}</h3>
                <h4 className="card-subtitle">{job.title}</h4>
                <p className="card-subtitle text-muted my-2">{`${startDate} to ${endDate}`}</p>
            </div>
            <div className="card-body">
                <p className="card-text">{job.summary}</p>
                <ul>
                    {job.responsibilities.map(res => <li className="card-text">{res}</li>)}
                </ul>
            </div>
            <div className="card-footer">
                <Link to={`/experience/${job.id}`} className="btn btn-outline-primary">See More Details</Link>
            </div>
        </div>
    )

}

export default JobSummary;