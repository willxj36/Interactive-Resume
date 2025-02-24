import React, { FC, useState, useEffect } from "react";

import { ResumeEntitySection, Skill } from "../../../../../utils/models";
import { ResumeTabWrapper } from "../../components";

export const Skills: FC = () => {
  const [skills, setSkills] = useState<ResumeEntitySection<Skill>[]>([]);

  useEffect(() => {
    (async () => {
      const skillsInfo = await fetch("/api/skills");
      const skillsSections: ResumeEntitySection<Skill>[] = await skillsInfo.json();
      setSkills(skillsSections);
    })();
  }, []);

  return <ResumeTabWrapper tabName="Skills" sections={skills} showExpandAll={false} />;
};
