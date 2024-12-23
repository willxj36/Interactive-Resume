import { CSSProperties } from "react";
import { LinkProps } from "react-router-dom";

export interface CustomLinkProps extends LinkProps {
  bullet?: boolean | undefined;
  disabled?: boolean | undefined;
  textStyle?: CSSProperties;
}
