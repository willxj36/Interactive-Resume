import { Button } from "antd";
import * as React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss";
 
export const Navbar = () => {

    const [scrollState, setScrollState] = React.useState<"start" | "scrolled-up" | "scrolled-down">("start");

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollState((prevState) => {
                if (window.scrollY) {
                    return "scrolled-down";
                } else if (prevState === "scrolled-down") {
                    return "scrolled-up";
                } else {
                    return "start"; // really shouldn't get here, but let's be type-safe
                }
            });
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [jumpMenu, setJumpMenu] = React.useState<boolean>(false);

    return(
        <>
            <nav className={`navbar navbar__${scrollState}`}>
                <div className='navbar__background' />
                <div className='navbar__contents'>
                    <div className="navbar__endcap">
                        <Link to="/">
                            <img src="/img/favicon_io/favicon-32x32.png" alt="W-icon" />
                        </Link>
                    </div>
                    <div className="navbar__endcap">
                        <button
                            onClick={() => console.log("yep that's a button alright")}
                            className="navbar__contact-button"
                        >
                            <b>Get In Touch</b>
                        </button>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

// {jumpMenu ? (
//     <div className="d-flex mr-n3 justify-content-end">
//         <ul className="list-group position-absolute col-xl-2 col-md-4 col-sm-6">
//             <Link to='/portfolio' onClick={() => setJumpMenu(false)}>
//                 <li className="list-group-item text-right">Portfolio</li>
//             </Link>
//             <Link to='/resume' onClick={() => setJumpMenu(false)}>
//                 <li className="list-group-item text-right">Experience</li>
//             </Link>
//             <Link to='/resume/education' onClick={() => setJumpMenu(false)}>
//                 <li className="list-group-item text-right">Education</li>
//             </Link>
//             <Link to='/resume/skills' onClick={() => setJumpMenu(false)}>
//                 <li className="list-group-item text-right">Skills</li>
//             </Link>
//             <Link to='/aboutme' onClick={() => setJumpMenu(false)}>
//                 <li className="list-group-item text-right">About Me</li>
//             </Link>
//         </ul>
//     </div>
// ) : null }
