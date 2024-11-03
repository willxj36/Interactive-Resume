import { Modal } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";

import { CustomLink } from "../../components";

import "../../scss/app.scss";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="background background__home">
      <div className="summary__container">
        <div className="summary__personal">
          <h1 className="summary__header">William A. Seese</h1>
          <h4>...but you can call me Will</h4>
          <p>
            Hello! I'm a software engineer with experience building and improving large and complex web-based SaaS
            applications, but always seeking opportunities to grow my knowledge and branch out! I have a great interest
            in moving to more backend heavy roles and am currently working on leveling up my knowledge of Java. Click
            around to learn more or if you've seen enough, <Link to="/contact">let's chat!</Link>
          </p>
        </div>
        <div className="summary__link-container">
          <CustomLink bullet to="/portfolio">
            Portfolio
          </CustomLink>
          <CustomLink bullet to="/resume">
            {"R\u00E9sum\u00E9"}
          </CustomLink>
          <CustomLink bullet to="/aboutme">
            About Me
          </CustomLink>
        </div>
      </div>
    </div>
  );
};
