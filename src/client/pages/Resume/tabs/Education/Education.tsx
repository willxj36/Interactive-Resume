import React, { FC, useState, useEffect } from "react";

import { ResumeEntitySection, School } from "../../../../../utils/models";
import { ResumeTabWrapper } from "../../components";

/**
 * parent component of /resume/education page wrapping school cards
 */
export const Education: FC = () => {
  const [schools, setSchools] = useState<ResumeEntitySection<School>[]>([]);

  useEffect(() => {
    (async () => {
      const schoolsRaw = await fetch("/api/schools");
      const schoolsSections: ResumeEntitySection<School>[] = await schoolsRaw.json();
      setSchools(schoolsSections);
    })();
  }, []);

  return <ResumeTabWrapper tabName="Education" sections={schools} showExpandAll={false} />;
};
