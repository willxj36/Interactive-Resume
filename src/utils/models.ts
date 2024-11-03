import { ProjectTechs } from "../client/pages/Portfolio/Portfolio.models";

/**
 * required properties for any resume entities
 */
export interface ResumeEntityBase {
  id: number;
  entityTitle: string;
  details: ResumeEntityDetail[];
}

/**
 * @param description top-level bullet point entry
 * @param extraList Optional; 2nd-level bullet point entries related to description
 */
interface ResumeEntityDetail {
  description: string;
  extraList?: string[];
}

interface ResumeEntityOptions {
  entitySubTitle: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  detailSummary: string;
}

export type ResumeEntity = ResumeEntityBase & Partial<ResumeEntityOptions>;

export type Job = Required<ResumeEntity>;
/**
 * Base Entity but with required startDate and EndDate
 */
export type School = ResumeEntity & Pick<ResumeEntityOptions, "startDate" | "endDate">;
export type Skill = ResumeEntityBase;

/**
 * Rough time frame of project work for categorization
 */
type ProjectChronology = "early" | "current" | "planned";
/**
 * General project status as follows:
 * - sunset: no plans for any future work, not hosted/published
 * - open: either being maintained or planning on future improvement; possibly hosted/published
 * - active: work currently being done in some capacity; possibly hosted/published
 * - todo: future projects with some level of planning attached; not hosted/published
 */
export type ProjectStatus = "sunset" | "open" | "active" | "todo";

/**
 * interface for personal projects info
 * @member id
 * @member name
 * @member chronology general time project was mostly worked on; see ProjectChronology
 * @member status see ProjectStatus
 * @member infoList general info and notes about the project
 * @member techList languages and frameworks used for the project
 * @member gitHubLink link to project's repo or null if there is no public link available
 * @member siteLink link to hosted location of project if applicable
 */
export interface Project {
  id: number;
  name: string;
  chronology: ProjectChronology;
  status: ProjectStatus;
  summary: string;
  infoList: string[];
  techList: ProjectTechs[];
  gitHubLink: string | null;
  siteLink?: string;
}
