import React from "react";
import { Link } from "react-router-dom";

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
              <div className="d-flex justify-content-center align-items-center">
                <li>
                  <Link className="text-decoration-none text-white" to="/">
                    HOME /
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="/about">
                    ABOUT /{" "}
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white" to="/contact">
                    Contact /{" "}
                  </Link>
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
