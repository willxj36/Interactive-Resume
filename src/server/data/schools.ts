import { ResumeEntitySection, School } from "../../utils/models";

export const SCHOOLS: ResumeEntitySection<School>[] = [
  {
    sectionTitle: "University",
    entities: [
      {
        id: 1,
        entityTitle: "Colorado State University",
        startDate: new Date(2008, 7),
        endDate: new Date(2013, 11),
        details: [
          { description: "B.S. Environmental Horticulture with concentration in Turf Management" },
          {
            description: "Three and a half years of Mechanical Engineering courses",
            extraList: [
              "In-major GPA: 3.2",
              "Various courses on technical communications and introductory Electrical Engineering and Computer Science classes",
            ],
          },
        ],
      },
    ],
  },
  {
    sectionTitle: "Software Engineering",
    entities: [
      {
        id: 2,
        entityTitle: "Covalence Coding Bootcamp",
        startDate: new Date(2021, 0),
        endDate: new Date(2021, 1),
        details: [
          { description: "Successfully completed 12 week course in 6 weeks; highly motivated self-starter" },
          {
            description: "Focus on JavaScript/TypeScript and numerous frameworks for full-stack development",
            extraList: [
              "Vanilla HTML and CSS",
              "React/React Native front-end",
              "Node/Express back-end",
              "SQL databases",
            ],
          },
          {
            description: "General programming and development topics",
            extraList: [
              "Object-oriented programming (classes, encapsulation, polymorphism)",
              "Internal and 3rd party API integration",
              "Authentication and security (cryptography, exploit resilience, tokens)",
              'Performance optimization (non-redundant storage, reducing bundle size, "Big O notation"',
              "Website infrastructure",
              "Scrum/Agile team strategies",
              "Git version control",
            ],
          },
        ],
      },
    ],
  },
];
