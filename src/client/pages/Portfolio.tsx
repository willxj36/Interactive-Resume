import * as React from 'react';
import { useState, useEffect } from 'react';

import { Project } from '../../utils/models';
import ProjectSummary from '../components/ProjectSummary';

const Portfolio = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [expandAll, setExpandAll] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            let projectsRaw = await fetch('/api/projects');
            let projects: Project[] = await projectsRaw.json();
            setProjects(projects);
        })();
    }, [])

    return(
        <div>
            <img src="/img/portfolio-bg.png" alt="" style={{opacity: 0.3, zIndex: -1}} className="position-fixed min-vh-100 min-vw-100" />
            <div style={{height: 50}} />
            <div className="pt-3 container">
                <div className="row align-items-center">
                    <p className="display-4">My Projects</p>
                    <button onClick={() => setExpandAll(!expandAll)} className="btn btn-outline-darkinfo ml-5">{!expandAll ? 'Show All Details' : 'Hide All Details'}</button>
                </div>
                    {projects.map(project => (
                        <ProjectSummary key={project.id} project={project} expand={expandAll} />
                    ))}
            </div>
        </div>
    )

}

export default Portfolio;