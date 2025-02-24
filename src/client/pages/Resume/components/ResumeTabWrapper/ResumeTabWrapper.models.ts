import { ResumeEntity, ResumeEntitySection } from "../../../../../utils/models";

/**
 * props for wrapper that goes around each section of the /resume/* path
 * @member entities array of entities from "server"; Jobs, Schools, or Skills
 * @member showExpandAll whether to use expand all button for tab's section
 */
export interface ResumeTabWrapperProps {
  tabName: "Experience" | "Education" | "Skills";
  sections: ResumeEntitySection<ResumeEntity>[];
  showExpandAll: boolean;
}
