import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import { GITHUB_BASE_URL, LINKED_IN_URL } from "../../../utils/constants";

import "./AboutMe.scss";

export const AboutMe: FC = () => {
  return (
    <div className="background background__about-me">
      <main className="main-layout">
        <div className="about-me__container">
          <h1>About Me</h1>
          <div className="about-me__card">
            <div className="about-me__body">
              <p>
                Hello! I'm an experienced full-stack web/software developer with a diverse work history and educational
                background. A wealth of experience walking many different paths in life has given me a unique skillset
                and perspective that I'm excited to bring wherever my career takes me next!
              </p>
              <Divider />
              <p>
                I have a passion for learning new things! This is maybe the biggest reason I gravitated towards software
                development as a career. I can grow my knowledge and skills in an ever-changing industry where there's
                always more to learn and hopefully I happen to teach those around me something new as well. I've always
                had a keen interest in computers and technology and feel blessed to be where I am today.
              </p>
              <Divider />
              <p>
                I'm an avid lifelong golfer and have played competitively in amateur and open-style tournaments. I'm a
                DIYer who enjoys giving everything a shot once. I also enjoy many different outdoor hobbies such as
                hiking, biking, and more. <Link to="/contact">Drop me a line</Link> and let's get to know each other!
              </p>
              <Divider />
            </div>
            <div className="about-me__footer">
              <a href={GITHUB_BASE_URL}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href={LINKED_IN_URL}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
