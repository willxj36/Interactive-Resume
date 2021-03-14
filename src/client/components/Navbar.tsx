import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
const Navbar = () => {

    const [jumpMenu, setJumpMenu] = useState<boolean>(false);

    return(
        <>
            <nav className="navbar fixed-top" style={{background: 'linear-gradient(#004488, transparent)'}}>
                <Link to='/' onClick={() => setJumpMenu(false)} className="btn btn-darkinfo navbar-brand">Will Seese</Link>
                <div>
                    <button onClick={() => setJumpMenu(!jumpMenu)} className="btn btn-dark dropdown-toggle">Jump to  </button>
                    {jumpMenu ? (
                        <div className="d-flex mr-n3 justify-content-end">
                            <ul className="list-group position-absolute col-xl-2 col-md-4 col-sm-6">
                                <Link to='/portfolio' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Portfolio</li>
                                </Link>
                                <Link to='/resume' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Experience</li>
                                </Link>
                                <Link to='/resume/education' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Education</li>
                                </Link>
                                <Link to='/resume/skills' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Skills</li>
                                </Link>
                                <Link to='/aboutme' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">About Me</li>
                                </Link>
                            </ul>
                        </div>
                    ) : null }
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;