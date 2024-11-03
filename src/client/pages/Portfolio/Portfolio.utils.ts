import { faAt, faDatabase, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJava,
  faJsSquare,
  faNode,
  faPython,
  faReact,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { ProjectTechs } from "./Portfolio.models";
import { ProjectStatus } from "../../../utils/models";
import { TagProps } from "antd";

export const TECH_ICON_DICTIONARY: Record<ProjectTechs, IconDefinition> = {
  JavaScript: faJsSquare,
  HTML: faHtml5,
  CSS: faCss3Alt,
  React: faReact,
  MySQL: faDatabase,
  NodeJS: faNode,
  Bootstrap: faBootstrap,
  Stripe: faStripe,
  Mailgun: faAt,
  Python: faPython,
  Java: faJava,
};

export const PROJECT_STATUS_TAG_INFO: Record<ProjectStatus, Pick<TagProps, "color" | "children">> = {
  sunset: { color: "volcano-inverse", children: "Discontinued" },
  open: { color: "gold-inverse", children: "Open - Inactive" },
  active: { color: "green-inverse", children: "Open - Active" },
  todo: { color: "purple-inverse", children: "Planned" },
};
