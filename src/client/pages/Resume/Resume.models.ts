import { ReactNode } from "react";
import { Education, Experience, Skills } from "./tabs";

export type SectionParam = "experience" | "education" | "skills";

export const SECTIONS = {
  education: Education,
  experience: Experience,
  skills: Skills,
} as const;
