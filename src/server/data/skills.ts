import { ResumeEntitySection, Skill } from "../../utils/models";

export const SKILLS: ResumeEntitySection<Skill>[] = [
  {
    sectionTitle: "Software Engineering",
    entities: [
      {
        id: 1,
        entityTitle: "Languages and Frameworks",
        details: [
          {
            description: "Proficient:",
            extraList: ["JavaScript/Typescript", "HTML/CSS", "React", "Node", "Express", "Firebase", "Git"],
          },
          { description: "Intermediate:", extraList: ["SQL", "React Native", "Bash"] },
          { description: "Basics:", extraList: ["Python", "Java", "C#"] },
        ],
      },
      {
        id: 2,
        entityTitle: "Development Soft Skills",
        details: [
          { description: "Debugging in Developer Tools, Node, and external logging tools e.g. Datadog" },
          { description: "DSA, System Design, SOLID" },
          { description: "Semantic HTML, accessibility, basic SEO" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Other Skills",
    entities: [
      {
        id: 3,
        entityTitle: "General Skills",
        details: [
          { description: "Extensive leadership experience supervising and training both small and large teams" },
          {
            description: "Demonstrated ability to maintain composure and thrive in fast-paced and dynamic environments",
          },
          {
            description:
              "Proven communication skills in remote and on-site environments with both technical and non-technical coworkers and customers",
          },
        ],
      },
    ],
  },
];
