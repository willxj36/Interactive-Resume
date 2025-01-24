import React, { useState, useEffect } from "react";

import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import { Project } from "../../../utils/models";

import "../pages.scss";
import "./Portfolio.scss";

export const Portfolio = () => {
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [earlyProjects, setEarlyProjects] = useState<Project[]>([]);
  const [plannedProjects, setPlannedProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      let projectsRaw = await fetch("/api/projects");
      let projects: Project[] = await projectsRaw.json();
      setCurrentProjects(projects.filter((project) => project.chronology === "current"));
      setEarlyProjects(projects.filter((project) => project.chronology === "early"));
      setPlannedProjects(projects.filter((project) => project.chronology === "planned"));
    })();
  }, []);

  return (
    <div className="background background__portfolio">
      <main className="main-layout">
        <div className="portfolio__container">
          <div className="portfolio__header-container">
            <h1>My Projects</h1>
          </div>
          <div className="portfolio__projects-container">
            <div className="portfolio__banner portfolio__banner--current">
              <div className="portfolio__projects-section">
                <h2 className="portfolio__section-header">Current</h2>
                <div className="portfolio__cards-container">
                  {currentProjects.map((project) => (
                    <ProjectInfo key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
            <div className="portfolio__banner portfolio__banner--early">
              <div className="portfolio__projects-section">
                <h2 className="portfolio__section-header">Early Career</h2>
                <div className="portfolio__cards-container">
                  {earlyProjects.map((project) => (
                    <ProjectInfo key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
            <div className="portfolio__banner portfolio__banner--planned">
              <div className="portfolio__projects-section">
                <h2 className="portfolio__section-header">Future Plans</h2>
                <div className="portfolio__cards-container">
                  {plannedProjects.map((project) => (
                    <ProjectInfo key={project.id} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
