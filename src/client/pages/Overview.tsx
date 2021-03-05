import * as React from 'react';

import JobSummary from '../components/JobSummary';

const Overview = () => {

    const jobIds = [1, 2, 3, 4]

    return(
        <div className="mt-5 pt-3 container">
            <div className="col-md-9">
                {jobIds.map(jobId => (
                    <JobSummary jobId={jobId} />
                ))}
            </div>
            <div className="col-md-3">

            </div>
        </div>
    )

}

export default Overview;