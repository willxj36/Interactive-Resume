import { Job } from "../../utils/models";

export const JOBS: Job[] = [
  {
    id: 1,
    entitySubTitle: "Advanced Contracting Inc",
    location: "HQ: Monument, CO; Work: various locations in WY, NE",
    entityTitle: "General Laborer",
    startDate: new Date(2009, 4, 20),
    endDate: new Date(2009, 7, 20),
    detailSummary:
      "Manual labor at various out-of-state job sites building/installing lockers, bathroom partitions, etc",
    details: [
      { description: "Unloading truck shipments of materials to construct the items to be installed" },
      {
        description:
          "Assembling banks of lockers, occasionally other non-structural items for under-construction buildings",
      },
      { description: "Safely installing items to code" },
    ],
  },
  {
    id: 2,
    entitySubTitle: "College Pro Painters",
    location: "Monument, CO",
    entityTitle: "Job Site Manager",
    startDate: new Date(2010, 4, 20),
    endDate: new Date(2010, 6, 20),
    detailSummary: "Supervised a home painting crew of 3 or 4 employees, ensured on-schedule performance",
    details: [{ description: "Supervision of small crew to ensure proper quality and timeliness of painting" }],
  },
  {
    id: 3,
    entitySubTitle: "Home Depot",
    location: "Colorado Springs, CO",
    entityTitle: "Paint Sales Associate",
    startDate: new Date(2011, 4, 20),
    endDate: new Date(2011, 7, 20),
    detailSummary: "Assisted customers with finding the right paint and paint-related products for their needs",
    details: [
      { description: "Assisting customers with know-how on paint types, colors, qualities, etc" },
      { description: "Maintaining a professional and clean department" },
      { description: "Checking and restocking inventory, making order requests for out-of-stock items" },
      { description: "Preparing/mixing paint colors" },
    ],
  },
  {
    id: 4,
    entitySubTitle: "Cherry Hills Country Club",
    location: "Cherry Hills Village, CO",
    entityTitle: "Turf Maintenance Intern",
    startDate: new Date(2013, 4, 20),
    endDate: new Date(2013, 7, 10),
    detailSummary: "Learn about turf maintenance, crew supervision at a Top 100 Golf Course in US",
    details: [
      { description: "Trained in all golf course maintenance areas and techniques" },
      { description: "Entrusted with care normally reserved for superintendents" },
    ],
  },
  {
    id: 5,
    entitySubTitle: "Colorado State University Dining - Ram's Horn",
    location: "Fort Collins, CO",
    entityTitle: "Student Trainer",
    startDate: new Date(2009, 10, 9),
    endDate: new Date(2013, 11, 20),
    detailSummary:
      "Supervised and trained crew of up to ~50 student employees serving meals to up to 2000+ students per shift",
    details: [
      { description: "Acquire and maintain ServSafe certification for safe food handling" },
      {
        description:
          "Ensure all student employees performed duties efficiently while following HAACP food safety guidelines",
      },
      { description: "Supervise large crews in a fast-paced, high-volume environment" },
      {
        description:
          "Effectively communicate all problems with equipment, employees, inventory, etc to higher management",
      },
    ],
  },
  {
    id: 6,
    entitySubTitle: "The Plateau Club/Oki Golf",
    location: "Sammamish, WA",
    entityTitle: "Spray Tech/Crew Foreman",
    startDate: new Date(2014, 3, 1),
    endDate: new Date(2015, 0, 3),
    detailSummary:
      "Applying turf maintenance chemicals along with all other turf maintenance duties at a high-end country club; supervisory duties over seasonal employees",
    details: [
      {
        description:
          "Safe storage and application of large quantities of a variety of chemicals related to golf course maintenance",
      },
      { description: "Proper care of all areas of course, both turf and non-turf" },
      {
        description:
          "Supervising seasonal employees and training all general staff on proper techniques for golf course care",
      },
      {
        description:
          "Occasional transportation of maintenance equipment such as mowers, tractors, etc to other Oki Golf properties",
      },
    ],
  },
  {
    id: 7,
    entitySubTitle: "O'Reilly Auto Parts",
    location: "Monument, CO",
    entityTitle: "Parts Sales",
    startDate: new Date(2015, 0, 20),
    endDate: new Date(2015, 4, 11),
    detailSummary: "POS operations, assisting customers with vehicle questions, sales",
    details: [
      { description: "Assist customers in finding appropriate parts for their situation" },
      { description: "Push sales of related parts or often-forgotten maintenance items" },
      { description: "Cashier" },
    ],
  },
  {
    id: 8,
    entitySubTitle: "Shamrock Foods",
    location: "Commerce City, CO",
    entityTitle: "CDL Delivery Driver",
    startDate: new Date(2015, 4, 18),
    endDate: new Date(2021, 4, 13),
    detailSummary:
      "Local commercial driver delivering bulk groceries and supplies to restaurants, schools, hospitals, etc",
    details: [
      { description: "Safe and secure transportation of $300,000+ of equipment and goods daily" },
      { description: "Make executive decisions when circumstances prevented consulting dispatchers/management" },
      { description: "Ensuring compliance with FMCSA regulations regarding cargo, hours, equipment safety, etc" },
      { description: "Delivering on customer satisfaction while maintaining safety and timeliness" },
      { description: "Adapt quickly to ever-changing circumstances in a high-stress, high-danger environment" },
    ],
  },
  {
    id: 9,
    entitySubTitle: "Freelance",
    location: "Colorado Springs, CO",
    entityTitle: "Web Developer/Designer",
    startDate: new Date(2021, 2, 1),
    endDate: new Date(2021, 5, 1),
    detailSummary:
      "Developed fullstack website for Orifin, LLC, a small business aspiring to open an innovative esports facility",
    details: [
      { description: "Solo development of website including server functions and DB administration" },
      {
        description:
          "Various requirements for authentication/security including RBAC, memberships and other e-commerce",
      },
      { description: "Equipment and facility reservation system built for growth to multiple locations" },
      { description: "Built dynamic and performant data dashboard for administrators to strategize/audit/etc" },
      {
        description: "Tech Utilized:",
        extraList: ["JavaScript/Typescript", "CSS", "React", "NodeJS/ExpressJS", "MySQL"],
      },
    ],
  },
  {
    id: 10,
    entitySubTitle: "Coalesce Software",
    location: "Remote",
    entityTitle: "Software Engineer",
    startDate: new Date(2021, 4, 13),
    endDate: new Date(2024, 9, 31),
    detailSummary:
      "Helped build and improve SaaS data transformation tool from a small prototype to enterprise-level app used by Fortune 500 companies",
    details: [
      {
        description:
          "As employee #9, built framework and functionality for some of app's most critical components still in place",
      },
      {
        description:
          "Improved performance of app chokepoints by up to 95% through code optimization and creative solutions",
      },
      { description: "Pioneered unit and end-to-end testing programs through Jest, Cypress, and Playwright" },
      {
        description:
          "Laid the foundation for engineering's metrics, auditing, and debugging by setting up custom logging module",
      },
      { description: "Assisted team leads with mentoring and onboarding of new employees including senior engineers" },
      {
        description: "Tech Utilized:",
        extraList: [
          "JavaScript/Typescript",
          "React",
          "Sass(SCSS)",
          "NodeJS/ExpressJS",
          "Firebase",
          "SQL",
          "Snowflake",
          "Jest",
          "Playwright",
          "Python",
        ],
      },
    ],
  },
];
