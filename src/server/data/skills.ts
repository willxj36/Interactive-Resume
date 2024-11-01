import { Skill } from "../../utils/models";

export const SKILLS: Skill[] = [
  {
    id: 1,
    entityTitle: "Languages and Frameworks",
    details: [
      {
        description: "Proficient:",
        extraList: ["JavaScript/Typescript", "HTML/CSS", "React", "Node", "Express", "Firebase", "Git"],
      },
      { description: "Intermediate:", extraList: ["SQL", "React Native", "Bash"] },
      { description: "Basics:", extraList: ["Python", "Java"] },
    ],
  },
  {
    id: 2,
    entityTitle: "Development Soft Skills",
    details: [
      { description: "Debugging in browser and Node" },
      { description: "Windows troubleshooting" },
      { description: "Basic web design principles" },
    ],
  },
  {
    id: 3,
    entityTitle: "General Skills",
    details: [
      { description: "Experience supervising and training both small and large teams" },
      { description: "Highly driven by growth and advancement both personal and professional" },
      { description: "Lifelong passion for learning" },
      { description: "Demonstrated ability to maintain composure and work well under stress" },
    ],
  },
];
