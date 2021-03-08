import * as React from 'react';
import { useState } from 'react';

const Skills = () => {

    const [showLang, setShowLang] = useState<boolean>(false);

    return (
        <>
            <p className="display-4">Skills</p>
            <div className="card border-success">
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
        </>
    )
}

export default Skills;