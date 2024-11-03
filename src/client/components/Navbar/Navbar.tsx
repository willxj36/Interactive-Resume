import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { CustomLink } from "../CustomLink/CustomLink";

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

  const linkTextStyles = {
    color: "#eee",
    fontSize: "1.25rem",
    textShadow: "2px 3px 4px midnightblue",
  };

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
            </span>
          </div>
          <div className="navbar__section">
            <span className="navbar__page-links">
              <CustomLink to="/portfolio" textStyle={linkTextStyles}>
                Portfolio
              </CustomLink>
              <CustomLink to="/resume" textStyle={linkTextStyles}>
                {"R\u00E9sum\u00E9"}
              </CustomLink>
              <CustomLink to="/aboutme" textStyle={linkTextStyles}>
                About Me
              </CustomLink>
            </span>
          </div>
          <div className="navbar__section">
            <span className="navbar__endcap navbar__endcap--right">
              <Link to="/contact">
                <button className="navbar__contact-button">
                  <b>GET IN TOUCH</b>
                </button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
