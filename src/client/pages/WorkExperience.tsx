import * as React from 'react';
import { useState } from 'react';
import { Job } from '../../utils/models';

import JobSummary from '../components/JobSummary';

interface IWorkExperienceProps {
    jobs: Job[]
}

const WorkExperience: React.FC<IWorkExperienceProps> = ({ jobs }) => {

    const [expandAll, setExpandAll] = useState<boolean>(false);

    return (
        <>
            <div className="row align-items-center">
                <p className="display-4">Work Experience</p>
                <button onClick={() => setExpandAll(!expandAll)} className="btn btn-outline-info ml-5">{!expandAll ? 'Show All Details' : 'Hide All Details'}</button>
            </div>
            <div className="mx-n3">
                {jobs.map(job => (
                    <JobSummary key={job.id} job={job} expand={expandAll} />
                ))}
            </div>
        </>
    )

}

export default WorkExperience;