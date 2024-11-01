import { Project } from "../../utils/models";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Will's Blog Site",
    infoList: [
      "Full-stack functional blog site with connected SQL DB (also connected to a mobile app that may be deployed later)",
      "Started as a lab for coding boot camp, now used to experiment with new coding ideas (will be redeploying with a lot of new/changed features such as tags and dark mode soon!)",
      "Employs various modes of authentication, including PassportJS and bcrypt, allows anyone to register a new account",
      "Front-end made with React (Typescript), React Router, CSS",
      "RESTful back-end made with NodeJS/ExpressJS, SQL DB (MySQL managed, hosted with ClearDB)",
      "3rd-party API integration (Mailgun, Stripe)",
    ],
    techList: ["Javascript", "Typescript", "React", "MySQL", "CSS", "Bootstrap", "NodeJS", "Stripe", "Mailgun"],
    gitHubLink: "https://github.com/willxj36/Blogs-Final",
  },
  {
    id: 2,
    name: "Orifin Prototype (in progress)",
    infoList: [
      "Full-stack site for a small business starting a technology facility with the intent to expand nationally in the coming years",
      "Front-end will serve as a marketing platform for the business as well as have functionality for reservations at the facility, membership purchases, and more",
      "Back-end will track reservations several months out, keep info about members/membership types, with methods for different 'roles' to see different info",
      "3rd-party API integration of Mailgun and payment platform TBD according to owners' needs",
    ],
    techList: ["Javascript", "Typescript", "React", "MySQL", "CSS", "Bootstrap", "NodeJS", "Mailgun"],
    gitHubLink: "https://github.com/willxj36/Orifin-Prototype",
  },
];
