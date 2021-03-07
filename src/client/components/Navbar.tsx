import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
const Navbar = () => {

    const [jumpMenu, setJumpMenu] = useState<boolean>(false);

    return(
        <>
            <nav className="navbar bg-primary fixed-top">
                <Link to='/'>
                    <button onClick={() => setJumpMenu(false)} className="btn btn-dark">Home</button>
                </Link>
                <h3 className="mx-auto text-white navbar-brand">Will Seese Resume</h3>
                <div>
                    <button onClick={() => setJumpMenu(!jumpMenu)} className="btn btn-dark dropdown-toggle">Jump to  </button>
                    {jumpMenu ? (
                        <div className="d-flex mr-n3 justify-content-end">
                            <ul className="list-group position-absolute col-xl-2 col-md-4 col-sm-6">
                                <Link to='/overview' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Work Experience</li>
                                </Link>
                                <Link to='/overview/education' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Education</li>
                                </Link>
                                <Link to='/overview/skills' onClick={() => setJumpMenu(false)}>
                                    <li className="list-group-item text-right">Skills</li>
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