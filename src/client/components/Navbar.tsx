import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
const Navbar = () => {

    const [jumpMenu, setJumpMenu] = useState<boolean>(false);

    return(
        <>
            <nav className="navbar bg-primary position-relative">
                <Link to='/'>
                    <button onClick={() => setJumpMenu(false)} className="btn btn-dark">Home</button>
                </Link>
                <h3 className="mx-auto text-white">Will Seese's Resume</h3>
                <div>
                    <button onClick={() => setJumpMenu(!jumpMenu)} className="btn btn-dark dropdown-toggle">Jump to  </button>
                    {jumpMenu ? (
                        <div className="d-flex mr-n3 justify-content-end">
                            <ul className="list-group position-absolute col-xl-2 col-md-4 col-sm-6">
                                <Link onClick={() => setJumpMenu(false)} to='/education'><li className="list-group-item text-right">Education</li></Link>
                                <Link onClick={() => setJumpMenu(false)} to='/experience'><li className="list-group-item text-right">Experience</li></Link>
                            </ul>
                        </div>
                    ) : null }
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;