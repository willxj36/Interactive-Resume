import * as React from "react";
import { Link } from "react-router-dom";

import { CustomLinkProps } from "./CustomLink.models";

import "./CustomLink.scss";

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <Link
      className={`link${isHovered ? " link__hover" : ""}${props.disabled ? " link__disabled" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="link__text-parent">
        <span className="link__text">{props.children}</span>
        <div className="link__underline" />
      </div>
      {props.bullet && <div className="link__bullet" />}
    </Link>
  );
};
