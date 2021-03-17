import * as React from 'react';
import { useState, useEffect } from 'react';

const Skills = () => {

    const [showLang, setShowLang] = useState<boolean>(false);
    const [showOther, setShowOther] = useState<boolean>(false);
    const [showGeneral, setShowGeneral] = useState<boolean>(false);
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        setShowLang(showAll);
        setShowOther(showAll);
        setShowGeneral(showAll);
    }, [showAll])

    return (
        <>
            <div className="row align-items-center">
                <p className="display-4">Skills</p>
                <button onClick={() => setShowAll(!showAll)} className="btn btn-outline-darkinfo ml-5">{showAll ? 'Hide All Details' : 'Show All Details'}</button>
            </div>

            <div className="my-2 mx-n3 card border-info">
                <div className="card-header">
                    <h1>Languages</h1>
                </div>
                {showLang ? (
                    <div className="card-body">
                        <ul>
                            <li>JavaScript</li>
                            <ul>
                                <li>Typescript</li>
                                <li>React</li>
                                <li>React Native</li>
                                <li>Bootstrap</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                            </ul>
                            <li>HTML/CSS</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                ) : null}
                <div className="card-footer">
                    <button onClick={() => setShowLang(!showLang)} className="btn btn-outline-primary">{showLang ? 'Hide Details' : 'Show Details'}</button>
                </div>
            </div>

            <div className="my-2 mx-n3 card border-info">
                <div className="card-header">
                    <h1>Other Computer Skills</h1>
                </div>
                {showOther ? (
                    <div className="card-body">
                        <ul>
                            <li>Extensive proficiency in various CAD programs (especially Pro/E)</li>
                            <li>Excel coding/spreadsheets</li>
                            <li>Troubleshooting knowledge in Windows platforms</li>
                            <li>Have assisted in building PCs</li>
                        </ul>
                    </div>
                ) : null}
                <div className="card-footer">
                    <button onClick={() => setShowOther(!showOther)} className="btn btn-outline-primary">{showOther ? 'Hide Details' : 'Show Details'}</button>
                </div>
            </div>

            <div className="my-2 mx-n3 card border-info">
                <div className="card-header">
                    <h1>General Skills</h1>
                </div>
                {showGeneral ? (
                    <div className="card-body">
                        <ul>
                            <li>Managerial experience in a variety of environments</li>
                            <li>Broad level of knowledge on electronics and computers in general, both self-taught and learned in college</li>
                            <li>Highly ambitious and have a passion for learning</li>
                            <li>Quick to adapt to any working environment</li>
                        </ul>
                    </div>
                ) : null}
                <div className="card-footer">
                    <button onClick={() => setShowGeneral(!showGeneral)} className="btn btn-outline-primary">{showGeneral ? 'Hide Details' : 'Show Details'}</button>
                </div>
            </div>
        </>
    )
}

export default Skills;