import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Yukio</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                Python Dev
                {/* TODO */}
                {/* {" "}
                  <Typical 
                  loop={Infinity}
                  steps={[
                      "Ethusiastic Dev",
                      5000,
                      "First Gen Dev",
                      5000,
                      "Python Dev",
                      5000
                  ]}/> */}
              </h1>
              <span className="profile-role-tagline">
                Hardworking Dev working towards carrer in healthcare software engineer
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="YR_Resume.pdf" download="My Resume">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-pricture">
          <div className="profile=picture-background"></div>
        </div>
      </div>
    </div>
  );
}
