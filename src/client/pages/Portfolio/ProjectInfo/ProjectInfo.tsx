import { Button, Divider, Tag } from "antd";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faGlobe,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { PROJECT_STATUS_TAG_INFO, TECH_ICON_DICTIONARY } from "../Portfolio.utils";
import { ProjectInfoProps } from "./ProjectInfo.models";

import "./ProjectInfo.scss";

export const ProjectInfo: FC<ProjectInfoProps> = (props) => {
  const { project } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const innerRef = useRef<HTMLDivElement>(null);

  /**
   * to be called in several places to handle manual setting styles so animations work
   */
  const resizeExpandedCard = useCallback(() => {
    if (innerRef.current) {
      if (isExpanded) {
        // have to factor for left padding when setting this way hence -12
        innerRef.current.style.width = `${document.documentElement.clientWidth * 0.75 - 12}px`;
      } else {
        // clears the translate transform set in handleExpand for smooth transition back to original spot
        innerRef.current.style.transform = "";
        // deleting width from style lets the collapsed class's width take back over
        innerRef.current.style.width = "";
      }
    }
  }, [isExpanded]);

  /**
   * ensures styles are set before the browser paints for smooth visuals
   */
  useLayoutEffect(() => {
    resizeExpandedCard();
  }, [resizeExpandedCard]);

  /**
   * uses bounding client rect to determine right translate value to achieve top: 175px and
   * left: 12.5% (so modal is 75% of width and centered), then changes state
   */
  const handleExpand = useCallback(() => {
    if (innerRef.current) {
      const { top, left } = innerRef.current.getBoundingClientRect();
      innerRef.current.setAttribute(
        "style",
        `transform: translate(${window.innerWidth * 0.125 - left}px, ${175 - top}px)`
      );
    }
    setIsExpanded((prev) => !prev);
  }, [resizeExpandedCard]);

  /**
   * set a listener so that clicking outside the modal closes it; this allows a new modal to be
   * opened simultaneously as well
   */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (innerRef.current && !innerRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * need to call this as well as set it for the resize listener so that the first expansion animates
   */
  useEffect(() => {
    resizeExpandedCard();

    window.addEventListener("resize", resizeExpandedCard);

    return () => window.removeEventListener("resize", resizeExpandedCard);
  }, [resizeExpandedCard]);

  return (
    <div className="project-info__card">
      <div ref={innerRef} className={`project-info__inner${isExpanded ? " project-info__inner--expanded" : ""}`}>
        <div className="project-info__header-container">
          <h3>{project.name}</h3>
          <Button
            title={`${isExpanded ? "Go back" : "See more"}`}
            onClick={handleExpand}
            className="project-info__expand-button"
            type="text"
          >
            <div className="project-info__expand-button-border">
              <FontAwesomeIcon icon={isExpanded ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter} />
            </div>
          </Button>
        </div>
        <Tag className="project-info__status-tag" {...PROJECT_STATUS_TAG_INFO[project.status]} />
        <p className="project-info__summary">{project.summary}</p>
        {isExpanded && (
          <>
            <Divider />
            <ul>
              {project.infoList.map((info) => (
                <li>{info}</li>
              ))}
            </ul>
          </>
        )}
        <Divider />
        <div className="project-info__tech-list">
          {project.techList.map((tech) => {
            if (tech in TECH_ICON_DICTIONARY) {
              return <FontAwesomeIcon key={tech} icon={TECH_ICON_DICTIONARY[tech]} title={tech} size="xl" />;
            } else {
              return <p>Etc</p>;
            }
          })}
        </div>
        <Divider />
        {project.gitHubLink && (
          <div>
            <a
              href={`https://www.github.com/${project.gitHubLink}`}
              target="_blank"
              rel="noreferrer"
              title="GitHub Repo"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        )}
        {project.siteLink && (
          <a href={project.siteLink} target="_blank" rel="noreferrer" title="Go to site">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        )}
      </div>
    </div>
  );
};
