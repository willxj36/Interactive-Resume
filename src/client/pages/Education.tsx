import * as React from 'react';
import { useState, useEffect } from 'react';

const Education = () => {

    const [showCsu, setShowCsu] = useState<boolean>(false);
    const [showCov, setShowCov] = useState<boolean>(false);
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        setShowCov(showAll);
        setShowCsu(showAll);
    }, [showAll])

    return(
        <>
            <div className="row align-items-center">
                <p className="display-4">Education</p>
                <button onClick={() => setShowAll(!showAll)} className="btn btn-outline-darkinfo ml-5">{showAll ? 'Hide All Details' : 'Show All Details'}</button>
            </div>

            <div className="my-2 mx-n3 card border-info">
                <div className="card-header">
                    <h1>Covalence Coding Boot Camp</h1>
                    <p className="text-muted">Jan 2021 - Feb 2021</p>
                </div>
                {showCov ? (
                    <div className="card-body">
                        <ul>
                            <li>Successfully completed 12 week course in 6 weeks; highly motivated self-starter</li>
                            <li>Focus on JavaScript/TypeScript and numerous frameworks for full-stack development</li>
                                <ul>
                                    <li>Raw HTML and CSS</li>
                                    <li>React/React Native front-end</li>
                                    <li>Node/Express back-end</li>
                                    <li>SQL databases</li>
                                </ul>
                            <li className="mt-3">General knowledge for programming in other languages and typical workflows</li>
                                <ul>
                                    <li>Object-oriented programming</li>
                                    <li>Classes (private/public)</li>
                                    <li>Closures and other context</li>
                                    <li>Scrum/Agile team strategies</li>
                                    <li>Git as part of a team or solo</li>
                                    <li>3rd-party API integration</li>
                                </ul>
                            <li className="mt-3">Other general/advanced topics</li>
                                <ul>
                                    <li>Authentication (back-end using routing and DB queries, front-end using JWT)</li>
                                    <li>Security (hashing/salting for safe storage, SQL injection safety, etc)</li>
                                    <li>Optimization (non-redundant DB storage, simplifying code in general, reducing package sizes)</li>
                                    <li>Deployment and troubleshooting thereafter</li>
                                </ul>
                        </ul>
                    </div>
                ) : null}
                <div className="card-footer">
                    <button onClick={() => setShowCov(!showCov)} className="btn btn-outline-primary">{showCov ? 'Hide Details' : 'Show Details'}</button>
                </div>
            </div>

            <div className="my-2 mx-n3 card border-info">
                <div className="card-header">
                    <h1>Colorado State University</h1>
                    <p className="text-muted">Aug 2008 - Dec 2013</p>
                </div>
                {showCsu ? (
                    <div className="card-body">
                        <ul>
                            <li>B.S. in Environmental Horticulture with concentration in Turf Management</li>
                            <li>Seven semesters of Mechanical Engineering</li>
                                <ul>
                                    <li>Major GPA: 3.2</li>
                                    <li>Various technical communications and computer engineering courses</li>
                                </ul>
                        </ul>
                    </div>
                ) : null}
                <div className="card-footer">
                    <button onClick={() => setShowCsu(!showCsu)} className="btn btn-outline-primary">{showCsu ? 'Hide Details' : 'Show Details'}</button>
                </div>
            </div>
        </>
    )
}

export default Education;