import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

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
          <div className="navbar__endcap">
            <Link to="/">
              <div className="navbar__icon-shader" />
              <img src="/img/favicon_io/favicon-32x32.png" alt="W-icon" />
            </Link>
          </div>
          <div className="navbar__endcap">
            <button
              onClick={() => console.log("yep that's a button alright")} // TODO: determine how to present contact info (probably its own page tbh)
              className="navbar__contact-button"
            >
              <b>GET IN TOUCH</b>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
