import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { NavMenu } from "./NavMenu";

import "./Navbar.scss";
import { Popover } from "antd";

export const Navbar = () => {
  const [scrollState, setScrollState] = useState<"start" | "scrolled-up" | "scrolled-down">("start");

  useEffect(() => {
    const handleScroll = () => {
      setScrollState((prevState) => {
        if (window.scrollY) {
          return "scrolled-down";
        } else if (prevState === "scrolled-down") {
          return "scrolled-up";
        } else {
          return "start"; // really shouldn't get here, but let's be type-safe
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar__${scrollState}`}>
        <div className="navbar__background" />
        <div className="navbar__contents">
          <div className="navbar__section">
            <span className="navbar__endcap navbar__endcap--left">
              <Link to="/">
                <div className="navbar__icon-shader" />
                <img src="/img/favicon_io/favicon-32x32.png" alt="W-icon" />
              </Link>
              <Popover
                trigger={["hover", "click"]}
                content="I'm currently rolling out improvements to the site, but some areas may not work as expected on mobile. Check back soon!"
              >
                <FontAwesomeIcon className="navbar__mobile-warning-icon" size="xl" icon={faTriangleExclamation} />
              </Popover>
            </span>
          </div>
          <NavMenu />
        </div>
      </nav>
    </>
  );
};
