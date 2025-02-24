import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { GITHUB_BASE_URL, LINKED_IN_URL } from "../../../utils/constants";

import "../pages.scss";
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className="background background__contact">
      <main className="main-layout">
        <div className="contact__container">
          <div className="contact__info-container">
            <a className="contact__link" href="mailto:willxj36@gmail.com">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="3x" />
                </div>
                <strong>
                  <span className="contact__link--text">Email Me</span>
                </strong>
              </div>
            </a>
            <a
              className="contact__link"
              href={GITHUB_BASE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </div>
                <strong>
                  <span className="contact__link--text">
                    Check out my GitHub
                  </span>
                </strong>
              </div>
            </a>
            <a href={LINKED_IN_URL} className="contact__link">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </div>
                <strong>
                  <span className="contact__link--text">
                    Catch me on LinkedIn
                  </span>
                </strong>
              </div>
            </a>
          </div>
          <div className="contact__right-bar">
            <h1 className="contact__text-right">Let's Talk!</h1>
            <p className="contact__text-right contact__invite">
              Questions? Comments? Networking? Think your company and me are a
              great fit? Let's connect!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
