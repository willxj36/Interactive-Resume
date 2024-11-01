import React, { FC, useState, useEffect } from "react";

import { Job } from "../../../../../utils/models";
import { ResumeTabWrapper } from "../../components/ResumeTabWrapper/ResumeTabWrapper";

/**
 * parent component of /resume/experience page wrapping job cards
 */
export const Experience: FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  /**
   * mock of an api call for demo purposes, jobs are really in a file here
   */
  useEffect(() => {
    (async () => {
      let jobsRaw = await fetch("/api/jobs");
      let jobs: Job[] = await jobsRaw.json();
      setJobs(jobs.reverse());
    })();
  }, []);

  return <ResumeTabWrapper tabName="Experience" entities={jobs} showExpandAll />;
};
