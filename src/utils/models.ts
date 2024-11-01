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

export interface Project {
  id: number;
  name: string;
  infoList: string[];
  techList: string[];
  gitHubLink: string;
  siteLink?: string;
}
