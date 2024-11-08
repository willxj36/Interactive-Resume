import * as React from "react";
import { useParams } from "react-router-dom";

import { CustomLink } from "../../components";
import { SectionParam, SECTIONS } from "./Resume.models";

import "../pages.scss";
import "./Resume.scss";

/**
 * parent page and "nav" for resume subsections
 */
export const Resume = () => {
  const { section } = useParams() as { section: SectionParam };

  const CurrentSection = SECTIONS[section ?? "experience"];

  return (
    <div className="background background__resume">
      <div className="resume__container">
        <main className="resume__current-section">
          <CurrentSection />
        </main>
        <div>
          <nav className="resume__nav">
            <CustomLink disabled={!section || section === "experience"} bullet to={"/resume/experience"}>
              Experience
            </CustomLink>
            <CustomLink disabled={section === "education"} bullet to={"/resume/education"}>
              Education
            </CustomLink>
            <CustomLink disabled={section === "skills"} bullet to={"/resume/skills"}>
              Skills
            </CustomLink>
            <CustomLink bullet to={"/pdf/resume.pdf"} target="_blank" rel="noreferrer">
              Printable
            </CustomLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
