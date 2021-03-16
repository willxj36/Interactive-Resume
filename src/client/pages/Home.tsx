import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-start">
            <img src="/img/resume-bg.jpg" alt="" style={{opacity: 0.1, zIndex: -1}} className="position-fixed min-vh-100 min-vw-100" />
            <h1 className="display-1 ml-5">William A. Seese</h1>
            <a href="mailto:willxj36@gmail.com" className="display-4 my-4 ml-5 text-darkinfo">willxj36@gmail.com</a>
            <p className="display-4 my-4 ml-5">(719)659-9062</p>
            <Link to='/portfolio' className="btn btn-outline-darkinfo border-0 mt-4 mb-2 py-2 px-4 ml-5" style={{fontSize: 40}}>Portfolio</Link>
            <Link to='/resume' className="btn btn-outline-dark border-0 my-2 py-2 px-4 ml-5" style={{fontSize: 30}}>{'R\u00E9sum\u00E9'}</Link>
            <Link to='/aboutme' className="btn btn-outline-dark border-0 my-2 py-2 px-4 ml-5" style={{fontSize: 30}}>About Me</Link>
        </div>
    )
}

export default Home;