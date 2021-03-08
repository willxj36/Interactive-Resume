import { urlencoded } from 'express';
import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="mt-5 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src="/resume-bg.jpg" alt="" style={{opacity: 0.1, zIndex: -1}} className="position-fixed min-vh-100 min-vw-100" />
            <h1 className="display-1">William A. Seese</h1>
            <p className="display-4 my-4">willxj36@gmail.com</p>
            <p className="display-4 my-4">(719)659-9062</p>
            <Link to='/overview' className="btn btn-primary my-4 p-3" style={{fontSize: 40}}>{'R\u00E9sum\u00E9'}</Link>
            <a href="#" className="btn btn-secondary my-4 p-3" style={{fontSize: 30}}>Portfolio (Link Coming Soon!)</a>
        </div>
    )
}

export default Home;