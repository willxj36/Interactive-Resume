import dayjs from 'dayjs';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { IExperienceProps, IJobSummaryProps } from './Experience.models';

export const Experience: React.FC<IExperienceProps> = ({ jobs }) => {

    const [expandAll, setExpandAll] = useState<boolean>(false);

    return (
        <>
            <div className="row align-items-center">
                <p className="display-4">Experience</p>
                <button onClick={() => setExpandAll(!expandAll)} className="btn btn-outline-darkinfo ml-5">{!expandAll ? 'Show All Details' : 'Hide All Details'}</button>
            </div>
            <div className="mx-n3">
                {jobs.map(job => (
                    <JobSummary key={job.id} job={job} expand={expandAll} />
                ))}
            </div>
        </>
    )

}

const JobSummary: React.FC<IJobSummaryProps> = ({ job, expand }) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        setShowDetails(expand);
    }, [expand])

    let startDate = dayjs(job.startDate).format('MMM YYYY');
    let endDate = job.endDate ? dayjs(job.endDate).format('MMM YYYY') : 'present';

    return(
        <div className="card border-info my-2">
            <div className="card-header">
                <h3 className="card-title">{job.company}</h3>
                <h4 className="card-subtitle">{job.title}</h4>
                <p className="card-subtitle text-muted my-2">{`${startDate} to ${endDate}`}</p>
            </div>
            {showDetails ? (
            <div className="card-body">
                <p className="card-text">{job.summary}</p>
                <ul>
                    {job.responsibilities.map(res => <li key={res.slice(0,3)} className="card-text">{res}</li>)}
                </ul>
            </div>
            ) : null}
            <div className="card-footer">
                <button onClick={() => setShowDetails(!showDetails)} className="btn btn-outline-primary">{!showDetails ? 'Show Details' : 'Hide Details'}</button>
            </div>
        </div>
    )

}
