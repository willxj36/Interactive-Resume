import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useMatch, useLocation } from 'react-router-dom';
import { Job } from '../../../utils/models';

import { Skills, Education, Experience } from "./tabs";

import "../../scss/app.scss";

export const Resume = () => {

    const [jobs, setJobs] = useState<Job[]>([]);

    const location = useLocation();

    useEffect(() => {
        (async () => {
            let jobsRaw = await fetch('/api/jobs');
            let jobs: Job[] = await jobsRaw.json();
            setJobs(jobs);
        })();
    }, [])

    return(
        <div>
            <img src="/img/resume-bg.jpg" alt="" style={{opacity: 0.1, zIndex: -1}} className="page-background" />
            <div style={{height: 50}} />
            <div className="pt-3 position-relative container">
                <div className="row">
                    <main className="col-lg-9">
                        <Routes>
                            <Route path={""} element={<Experience jobs={jobs} />} />
                            <Route path={"education"} element={<Education />} />
                            <Route path={"skills"} element={<Skills />} />
                        </Routes>
                    </main>
                    <div className="col-lg-3">
                        <nav>
                            <Link to={"/"} className={`my-4 btn btn-lg btn-${location.pathname === '/resume' ? 'success border border-dark' : 'outline-secondary'} d-block`}>Experience</Link>
                            <Link to={"education"} className={`my-4 btn btn-lg btn-${location.pathname === '/resume/education' ? 'success border border-dark' : 'outline-secondary'} d-block`}>Education</Link>
                            <Link to={"skills"} className={`my-4 btn btn-lg btn-${location.pathname === '/resume/skills' ? 'success border border-dark' : 'outline-secondary'} d-block`}>Skills</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )

}
