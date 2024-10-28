import * as React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';

import { IProjectSummaryProps } from './Portfolio.models';
import { Project } from '../../../utils/models';
import { faAt, faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const Portfolio = () => {

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

const ProjectSummary: React.FC<IProjectSummaryProps> = ({ project, expand }) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);

    useEffect(() => {
        setShowDetails(expand);
    }, [expand]);

    return(
        <div className="my-2 border-info card" style={{backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
            <div className="card-header">
                <div className="px-3 row">
                    <h1>{project.name}</h1>
                    <button onClick={() => setShowDetails(!showDetails)} className="ml-auto align-self-center btn btn-outline-primary">{!showDetails ? 'Show Details' : 'Hide Details'}</button>
                </div>
            </div>

            {showDetails ? (
                <>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {project.infoList.map(info => (
                                <li key={info.slice(0,3)} className="list-group-item" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>{info}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            {project.techList.map(tech =>
                                {
                                    if(tech === 'Javascript') {
                                        return <FontAwesomeIcon icon={faJsSquare} title="JavaScript" size='3x' className="mx-2" />;
                                    } else if(tech === 'Typescript') {
                                        return <img src='/img/typescript.png' title="TypeScript" className="align-self-center mx-2" style={{width: 42, height: 42}} />;
                                    } else if(tech === 'HTML') {
                                        return <FontAwesomeIcon icon={faHtml5} title="HTML" size='3x' className="mx-2" />;
                                    } else if(tech === 'CSS') {
                                        return <FontAwesomeIcon icon={faCss3Alt} title="CSS" size='3x' className="mx-2" />;
                                    } else if(tech === 'React') {
                                        return <FontAwesomeIcon icon={faReact} title="React" size='3x' className="mx-2" />;
                                    } else if(tech === 'MySQL') {
                                        return <FontAwesomeIcon icon={faDatabase} title="SQL Database" size='3x' className="mx-2" />;
                                    } else if(tech === 'NodeJS') {
                                        return <FontAwesomeIcon icon={faNode} title="NodeJS" size='3x' className="mx-2" />;
                                    } else if(tech === 'Bootstrap') {
                                        return <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" size='3x' className="mx-2" />;
                                    } else if(tech === 'Stripe') {
                                        return <img src='/img/stripe.png' title="Stripe" style={{width: 90}} />;
                                    } else if(tech === 'Mailgun') {
                                        return <FontAwesomeIcon icon={faAt} title="Mailgun" size='3x' className="mx-2" />;
                                    } else {
                                        return <h1 className="mx-2">Etc.</h1>
                                    }
                                }
                            )}
                        </div>
                    </div>
                </>
            ) : null}

            <div className="card-footer">
                <div className="row">
                    <a href={project.gitHubLink} title="Source Code"><FontAwesomeIcon icon={faGithub} size='3x' className="mx-2" /></a>
                    {project.siteLink ? (
                        <a href={project.siteLink} title="Live Site"><FontAwesomeIcon icon={faGlobe} size='3x' className="mx-2" /></a>
                        ) : (
                        <div className="mx-2 text-center" style={{height: 42, width: 42, fontSize: 12}}>Link coming soon</div>
                        )
                    }
                </div>
            </div>

        </div>
    )

}
