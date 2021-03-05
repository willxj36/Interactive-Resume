import * as React from 'react';
import { useState, useEffect } from 'react';

interface IJobSummaryProps {
    jobId: number
}

const JobSummary: React.FC<IJobSummaryProps> = ({ jobId }) => {

    const [jobInfo, setJobInfo] = useState<any>(0);

    useEffect(() => {
        (async () => {
            await setJobInfo(jobId);
        })();
    }, [jobId])

    return(
        <div>
            <p>{jobInfo}</p>
        </div>
    )

}

export default JobSummary;