import {
  faCoffee,
  faHamburger,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Product from "../Product";

function ProductsLanding() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row">
            <div className="container py-5 mb-0">
              <div
                className="text-center wow fadeInUp mt-5"
                data-wow-delay="0.1s"
              >
                <h4 className="ff-secondary text-center text-warning fw-semi-bold">
                  Delicious meals from Urbane Foods
                </h4>
                <h1 className="mb-5">Most Popular Delicacies</h1>
              </div>

              <div
                className="tab-class text-center wow fadeInUp mt-5"
                data-wow-delay="0.1s"
              >
                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <FontAwesomeIcon
                        icon={faCoffee}
                        className="fa-3x text-warning"
                      />
                      <div className="ps-3">
                        <small className="text-dark">Popular</small>
                        <h6 className="mt-n1 mb-0 text-dark fw-bold">
                          Breakfast
                        </h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <FontAwesomeIcon
                        icon={faHamburger}
                        className="fa-3x text-warning"
                      />
                      <div className="ps-3">
                        <small className="text-dark">Special</small>
                        <h6 className="mt-n1 mb-0 text-dark fw-bold">Launch</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <FontAwesomeIcon
                        icon={faUtensils}
                        className="fa-3x text-warning"
                      />
                      <div className="ps-3">
                        <small className="text-body">Lovely</small>
                        <h6 className="mt-n1 mb-0 fw-bold text-dark">Dinner</h6>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsLanding;
