import React from "react";

import { Hero, TwoPanel } from "../../components";

import "../../scss/app.scss";
import "./Home.scss";

const panelsContent = [
  {
    title: "Proven Technical Expertise",
    text: [
      "Expert in TypeScript/JavaScript, React, Node.js/Express.js, HTML/CSS",
      "Demonstrated results in performance and enterprise-grade scalability",
      "Deep experience with various SQL and NoSQL databases",
      "Full stack knowledge of many other frameworks on top of infrastructure and CI/CD experience",
    ],
  },
  {
    title: "Experienced Leader",
    text: [
      "Over a decade of experience with different forms of leadership",
      "Focus on people management in high-volume foodservice with teams of up to 50+ for special events",
      "Led smaller crews in more direct settings in contracting and golf course management",
      "Training/mentorship throughout all positions including new software engineers in rapidly growing startup",
    ],
  },
  {
    title: "Driven by Growth",
    text: [
      "Passion for learning and personal improvement",
      "Dedicated to driving organizational success through collaboration and business-needs-first strategy",
      "Excited by learning, using, and creating the latest cutting-edge technology and tools",
    ],
  },
];

export const Home = () => {
  return (
    <div className="background background__home">
      <main style={{ display: "flex", flexDirection: "column" }}>
        <Hero />
        {panelsContent.map((content, index) => (
          <TwoPanel title={content.title} bulletPoints={content.text} index={index} />
        ))}
      </main>
    </div>
  );
};
