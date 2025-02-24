import { Button, Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";

import { CustomLink } from "../../components";
import { SectionParam, SECTIONS } from "./Resume.models";

import "../pages.scss";
import "./Resume.scss";
import { useIsSmallScreen } from "../../shared/utils/hooks";

/**
 * parent page and "nav" for resume subsections
 */
export const Resume = () => {
  const { section } = useParams() as { section: SectionParam };

  const CurrentSection = SECTIONS[section ?? "experience"];

  return (
    <div className="background background__resume">
      <div className="main-layout">
        <div className="resume__container">
          <main className="resume__current-section">
            <CurrentSection />
          </main>
          <ResponsiveSectionMenu>
            <nav className="resume__nav">
              <CustomLink
                disabled={!section || section === "experience"}
                bullet
                to={"/resume/experience"}
              >
                Experience
              </CustomLink>
              <CustomLink
                disabled={section === "education"}
                bullet
                to={"/resume/education"}
              >
                Education
              </CustomLink>
              <CustomLink
                disabled={section === "skills"}
                bullet
                to={"/resume/skills"}
              >
                Skills
              </CustomLink>
              <CustomLink
                bullet
                to={"/pdf/Will-Seese_resume-sc.pdf"}
                target="_blank"
                rel="noreferrer"
              >
                Printable
              </CustomLink>
            </nav>
          </ResponsiveSectionMenu>
        </div>
      </div>
    </div>
  );
};

const ResponsiveSectionMenu: FC<{ children: JSX.Element }> = ({ children }) => {
  const isSmallScreen = useIsSmallScreen();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!isSmallScreen) {
    return children;
  }

  return (
    <>
      <Button
        className="resume__drawer-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Button>
      <Drawer
        placement="right"
        closable={true}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={200}
      >
        {React.Children.map(children, (child) => (
          <div onClick={() => setIsOpen(false)}>{child}</div>
        ))}
      </Drawer>
    </>
  );
};
