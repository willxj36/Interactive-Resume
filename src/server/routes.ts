import * as express from "express";

import { JOBS, PROJECTS, SCHOOLS, SKILLS } from "./data";

const router = express.Router();

/**
 * entities here are stored in local files for simplicity, cost, and speed but accessed through
 * this "server" for demo/practice reasons
 */

router.get("/api/jobs", (_req, res) => {
  const jobInfo = JOBS;
  res.status(200).json(jobInfo);
});

router.get("/api/projects", (_req, res) => {
  const projectInfo = PROJECTS.sort((a, b) => b.id - a.id);
  res.status(200).json(projectInfo);
});

router.get("/api/schools", (_req, res) => {
  const schoolInfo = SCHOOLS;
  res.status(200).json(schoolInfo);
});

router.get("/api/skills", (_req, res) => {
  const skillInfo = SKILLS;
  res.status(200).json(skillInfo);
});

export default router;
