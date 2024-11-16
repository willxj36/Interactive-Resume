import React from "react";
import { Link } from "react-router-dom";

import { CustomLinkProps } from "./CustomLink.models";

import "./CustomLink.scss";

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const { disabled, bullet, textStyle, children, ...restProps } = props;
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <Link
      className={`link${isHovered ? " link__hover" : ""}${disabled ? " link__disabled" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...restProps}
    >
      <div className="link__text-parent">
        <span style={textStyle} className="link__text">
          {children}
        </span>
        <div className="link__underline" />
      </div>
      {bullet && <div className="link__bullet" />}
    </Link>
  );
};
