import * as React from 'react';
import { useState, useEffect } from 'react';
import { Job } from '../../utils/models';

import JobSummary from '../components/JobSummary';
import Skills from '../components/Skills';
import Education from '../components/Education';

const Overview = () => {

    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        (async () => {
            let jobsRaw = await fetch('/api/jobs');
            let jobs: Job[] = await jobsRaw.json();
            setJobs(jobs);
        })();
    }, [])

    return(
        <div className="mt-5 pt-3 container">
            <div className="row">
                <div className="col-lg-9">
                    <p className="display-4">Work Experience</p>
                    {jobs.map(job => (
                        <JobSummary key={job.id} job={job} />
                    ))}
                </div>
                <div className="col-lg-3">
                    <Education />
                    <Skills />
                </div>
            </div>
        </div>
    )

}

export default Overview;