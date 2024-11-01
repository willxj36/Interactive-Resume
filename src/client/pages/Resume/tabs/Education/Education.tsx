import React, { FC, useState, useEffect } from "react";

import { School } from "../../../../../utils/models";
import { ResumeTabWrapper } from "../../components";

/**
 * parent component of /resume/education page wrapping school cards
 */
export const Education: FC = () => {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    (async () => {
      const schoolsRaw = await fetch("/api/schools");
      const schools = await schoolsRaw.json();
      setSchools(schools.reverse());
    })();
  }, []);

  return <ResumeTabWrapper tabName="Education" entities={schools} showExpandAll={false} />;
};
