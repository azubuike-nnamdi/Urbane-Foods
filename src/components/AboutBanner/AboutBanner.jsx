import React from "react";

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
                  <a className="text-decoration-none text-white" href="/">
                    HOME /
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="/">
                    PAGES /{" "}
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="/">
                    ABOUT /{" "}
                  </a>
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
