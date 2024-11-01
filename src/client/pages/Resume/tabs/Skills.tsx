import React, { FC, useState, useEffect } from "react";

import { Skill } from "../../../../utils/models";
import { ResumeTabWrapper } from "../components";

export const Skills: FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    (async () => {
      const skillsInfo = await fetch("/api/skills");
      const skills = await skillsInfo.json();
      setSkills(skills);
    })();
  }, []);

  return <ResumeTabWrapper tabName="Skills" entities={skills} showExpandAll={false} />;
};
