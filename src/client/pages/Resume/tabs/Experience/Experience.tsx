import React, { FC, useState, useEffect } from "react";

import { Job, ResumeEntitySection } from "../../../../../utils/models";
import { ResumeTabWrapper } from "../../components/ResumeTabWrapper/ResumeTabWrapper";

/**
 * parent component of /resume/experience page wrapping job cards
 */
export const Experience: FC = () => {
  const [jobs, setJobs] = useState<ResumeEntitySection<Job>[]>([]);

  /**
   * mock of an api call for demo purposes, jobs are really in a file here
   */
  useEffect(() => {
    (async () => {
      const jobsRaw = await fetch("/api/jobs");
      const sections: ResumeEntitySection<Job>[] = await jobsRaw.json();
      sections.forEach((section) => section.entities.reverse());
      setJobs(sections);
    })();
  }, []);

  return <ResumeTabWrapper tabName="Experience" sections={jobs} showExpandAll />;
};
