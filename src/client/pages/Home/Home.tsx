import { Modal } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

import "../../scss/app.scss";
import "./Home.scss";

export const Home = () => {
    const [progressModalOpen, setProgressModalOpen] = React.useState<boolean>(true);

    return (
        <>
            <Modal
                open={progressModalOpen}
                onOk={() => setProgressModalOpen(false)}
                cancelButtonProps={{ style: { display: "none" } }}
                okText="Take a look"
                closable={false}
                maskClosable={false}
                title="Please excuse my progress..."
            >
                <p>I've come a long way in 4 years but my website hasn't...yet. Please check back soon for a new site, but in the meantime feel free to see what I made as a fresh bootcamp grad!</p>
            </Modal>
            <div className="min-vh-100 d-flex flex-column justify-content-center align-items-start">
                <img src="/img/resume-bg.jpg" alt="" style={{opacity: 0.1, zIndex: -1}} className="page-background" />
                <h1 className="display-2 ml-5">William A. Seese</h1>
                <a href="mailto:willxj36@gmail.com" className="display-4 my-4 ml-5 text-darkinfo">willxj36@gmail.com</a>
                <Link to='/portfolio' className="btn btn-outline-darkinfo border-0 mt-4 mb-2 py-2 px-4 ml-5" style={{fontSize: 40}}>Portfolio</Link>
                <Link to='/resume' className="btn btn-outline-dark border-0 my-2 py-2 px-4 ml-5" style={{fontSize: 30}}>{'R\u00E9sum\u00E9'}</Link>
                <Link to='/aboutme' className="btn btn-outline-dark border-0 my-2 py-2 px-4 ml-5" style={{fontSize: 30}}>About Me</Link>
            </div>
        </>
    );
};
