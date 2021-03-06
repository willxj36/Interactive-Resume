import * as express from 'express';
import { jobs } from './jobs';

const router = express.Router();

router.get('/api/jobs', (req, res, next) => {   //Jobs are stored in a file instead of a DB to simplify code and speed up load times.
    let jobInfo = jobs;                         //To see code examples connected to DB, check out some of the projects in my portfolio! (Link on Home page of this site)
    res.status(200).json(jobInfo);
});

export default router;