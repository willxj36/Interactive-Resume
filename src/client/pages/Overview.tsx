import * as React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, Link, useRouteMatch, useLocation } from 'react-router-dom';
import { Job } from '../../utils/models';

import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

const Overview = () => {

    const [jobs, setJobs] = useState<Job[]>([]);

    const location = useLocation();
    const { path, url } = useRouteMatch();

    useEffect(() => {
        (async () => {
            let jobsRaw = await fetch('/api/jobs');
            let jobs: Job[] = await jobsRaw.json();
            setJobs(jobs);
        })();
    }, [])

    return(
        <div>
            <img src="/resume-bg.jpg" alt="" style={{opacity: 0.1, zIndex: -1}} className="position-fixed min-vh-100 min-vw-100" />
            <div className="mt-5 pt-3 position-relative container">
                <div className="row">
                    <main className="col-lg-9">
                        <Switch>
                            <Route exact path={path}>
                                <Experience jobs={jobs} />
                            </Route>
                            <Route path={`${path}/education`} component={Education} />
                            <Route path={`${path}/skills`} component={Skills} />
                        </Switch>
                    </main>
                    <div className="col-lg-3">
                        <nav className="position-fixed col-2">
                            <Link to={url} className={`my-4 btn btn-lg btn-${location.pathname === '/overview' ? 'success' : 'outline-secondary'} d-block`}>Experience</Link>
                            <Link to={`${url}/education`} className={`my-4 btn btn-lg btn-${location.pathname === '/overview/education' ? 'success' : 'outline-secondary'} d-block`}>Education</Link>
                            <Link to={`${url}/skills`} className={`my-4 btn btn-lg btn-${location.pathname === '/overview/skills' ? 'success' : 'outline-secondary'} d-block`}>Skills</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Overview;