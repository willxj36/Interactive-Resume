import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {

    return(
        <div>
            <img src="/img/mountain-golf-bg.jpg" alt="" style={{opacity: 0.8, zIndex: -1}} className="position-fixed min-vh-100 min-vw-100" />
            <div style={{height: 50}} />
            <div className="pt-3 main container">
                <p className="display-4">About Me</p>
                <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                    <div className="card-body">
                        <ul className="list-group list-group-flush" style={{fontSize: 20}}>
                            <li className="pb-4 list-group-item" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                                Hello! I'm an aspiring full-stack web/software developer with a diverse work history and educational background. A wealth of experience in different
                                fields has given me a unique skillset. Namely, I can adapt to any working environment and work with a broad spectrum of people whether as 
                                coworkers or clients. I can also work effectively alone, making decisions with autonomy as necessary.
                            </li>
                            <li className="py-4 list-group-item" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                                Perhaps most importantly, I've found I have a passion for learning new things. This is one of the biggest reasons I have gravitated towards development
                                as a career where I can grow my knowledge and skills while keeping up with an ever-changing industry. I also was drawn to development because I have 
                                had many hobbies and interests related to computers and technology throughout my life including dabbling in HTML as early as middle school.
                            </li>
                            <li className="pt-4 list-group-item" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                                I'm an avid lifelong golfer and play competitively in amateur and open-style tournaments. I'm a DIYer who enjoys giving everything a shot. 
                                I also enjoy many different hobbies spending time outdoors such as hiking, biking, and many others.
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/willxj36"><FontAwesomeIcon icon={faGithub} size='3x' /></a>
                        <a href="https://www.linkedin.com/in/william-seese-89aa07209/" className="ml-3"><FontAwesomeIcon icon={faLinkedin} size='3x' /></a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;