import React from "react";

import "../pages.scss";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <div className="background background__contact">
      <div className="contact__container">
        <div className="contact__info-container">
          <div className="contact__info-item">
            <div className="contact__info-icon">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="3x" />
            </div>
            <strong>
              <a className="contact__link" href="mailto:willxj36@gmail.com">
                Email Me
              </a>
            </strong>
          </div>
          <div className="contact__info-item">
            <div className="contact__info-icon">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </div>
            <strong>
              <a className="contact__link" href="https://www.github.com/willxj36" target="_blank" rel="noreferrer">
                Check out my GitHub
              </a>
            </strong>
          </div>
          <div className="contact__info-item">
            <div className="contact__info-icon">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </div>
            <strong>
              <a className="contact__link" href="https://www.linkedin.com/in/william-seese-89aa07209/">
                Catch me on LinkedIn
              </a>
            </strong>
          </div>
        </div>
        <div className="contact__right-bar">
          <h1 className="contact__text-right">Let's Talk!</h1>
          <p className="contact__text-right contact__invite">
            Questions? Comments? Networking? Think your company and me are a great fit? Drop me an email and connect
            with me!
          </p>
        </div>
      </div>
    </div>
  );
};
