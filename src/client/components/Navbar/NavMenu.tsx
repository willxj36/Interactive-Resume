import React, { useState, useEffect, useMemo } from "react";
import { Layout, Row, Col, Dropdown, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CustomLink } from "../CustomLink";

export const NavMenu = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = useMemo(() => {
    const items = ["Portfolio", "Resume", "About Me"];
    if (isSmallScreen) {
      items.push("Contact");
    }
    return items;
  }, [isSmallScreen]);

  const linkTextStyles = {
    color: "#eee",
    fontSize: "1.25rem",
    textShadow: "2px 3px 4px midnightblue",
  };

  const menu = {
    items: navItems.map((item) => ({
      key: item,
      label: (
        <CustomLink to={`/${item.replaceAll(" ", "").toLowerCase()}`} textStyle={linkTextStyles}>
          {item}
        </CustomLink>
      ),
    })),
    style: { background: "linear-gradient(#68A, #68AB)", marginRight: 20 },
  };

  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      {isSmallScreen ? (
        <Dropdown menu={menu} placement="bottomRight">
          <span className="navbar__endcap navbar__endcap--right">
            <Button type="primary" className="navbar__right-button navbar__right-button--mobile-menu">
              <FontAwesomeIcon size="xl" color="white" icon={faBars} />
            </Button>
          </span>
        </Dropdown>
      ) : (
        <Row style={{ height: "100%" }}>
          <Row style={{ height: "100%", gap: 32, flex: 1 }} justify="center" align="middle">
            {navItems.map((item) => (
              <Col key={item}>
                <CustomLink to={`/${item.replaceAll(" ", "").toLowerCase()}`} textStyle={linkTextStyles}>
                  {item}
                </CustomLink>
              </Col>
            ))}
          </Row>
          <Col style={{ display: "flex", flex: 1 }} key={"contact"}>
            <span className="navbar__endcap navbar__endcap--right">
              <Link to="/contact">
                <button className="navbar__right-button navbar__right-button--contact">
                  <b>GET IN TOUCH</b>
                </button>
              </Link>
            </span>
          </Col>
        </Row>
      )}
    </Layout>
  );
};
