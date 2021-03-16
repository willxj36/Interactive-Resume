import * as express from 'express';
import { jobs } from './jobs';
import { projects } from './projects'

const router = express.Router();

router.get('/api/jobs', (req, res) => {         //Jobs are stored in a file instead of a DB to simplify code and speed up load times.
    let jobInfo = jobs;                         //To see code examples connected to DB, check out some of the projects in my portfolio! (Also part of this site!)
    res.status(200).json(jobInfo);
});

router.get('/api/projects', (req, res) => {
    let projectInfo = projects.sort((a, b) => b.id - a.id);
    res.status(200).json(projectInfo);
});

export default router;