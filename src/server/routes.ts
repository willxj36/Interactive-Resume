import * as express from 'express';

const router = express.Router();

router.get('/api/jobs', (req, res, next) => {   //Jobs are stored in a file instead of a DB to simplify code and speed up load times.
                                                //To see code examples connected to DB, check out some of the projects in my portfolio! (Link on Home page of this site)
    res.json('World');
});

export default router;