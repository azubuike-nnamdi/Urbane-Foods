import React from "react";
import { NavLink } from "react-router-dom";

function AboutBanner() {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-12 text-center text-lg-start">
              <h1 className="display-3 text-white text-center animated slideInLeft">
                About Us
              </h1>
              <div className="d-flex justify-content-center align-items-center breadcrumb">
                <li>
                  <NavLink className="text-decoration-none text-white" to="/">
                    HOME
                    <span className="text-white"> / </span>
                  </NavLink>
                </li>
                <li className="text-white">
                  <NavLink className="text-decoration-none ms-1" to="/about">
                    ABOUT
                    <span className="text-white"> / </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-decoration-none text-white ms-1"
                    to="/contact"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
