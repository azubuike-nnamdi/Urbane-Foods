/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faArrowUp,
  faMailBulk,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-link footer 
        pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4
                className="section-title ff-secondary text-start
                        text-warning fw-normal mb-4"
              >
                Urbane Foods
              </h4>
              <NavLink to="/about" className="btn btn-link">
                About Us
              </NavLink>
              <NavLink to="/products" className="btn btn-link">
                Producs
              </NavLink>
              <NavLink to="/contact" className="btn btn-link">
                Contact
              </NavLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4
                className="section-title ff-secondary text-start text-warning
                        fw-normal mb-4"
              >
                Contact
              </h4>
              <p className="mb-2 text-light">
                <FontAwesomeIcon icon={faMapMarked} className="me-3" />
                15 Street, Ibadan, Oyo State.
              </p>
              <p className="mb-2 text-light">
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                +2347034947199
              </p>
              <p className="mb-2 text-light">
                <FontAwesomeIcon icon={faMailBulk} className="me-3" />
                info@email.com
              </p>
              <div className="d-flex pt-2">
                {/* <a href="" className="btn btn-outline-light btn-social">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-light">
                <h4
                  className="section-title ff-secondary text-start text-warning
                                fw-normal mb-4"
                >
                  Opening
                </h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>10AM - 9PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>12PM - 4PM</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-light">
                <h4
                  className="section-title ff-secondary text-start text-warning
                                fw-normal mb-4"
                >
                  Newsletter
                </h4>
                <p>
                  Get updated our on new dishes and delicious discounts by
                  subscribing to our newsletter.
                </p>
                <div className="position-relative mx-auto" max-width="400px">
                  <input
                    className="form-control border-warning w-100 py-3
                                ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                  />
                  <button
                    type="button"
                    className="btn btn-warning py-2 position-absolute
                                top-0 end-0 mt-2 me-2"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <hr className="border border-warning " />
          </div>
          <div className="container text-white">
            <div className="copyright">
              <div className="row">
                <div
                  className="col-md-6 text-center text-md-start
                            mb-3 mb-md-0"
                >
                  &copy; SideHustle Restuarant Group 23, All Rights Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <NavLink to="/">Home</NavLink>
                    <Link to="/">FAQs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-warning btn-lg-square back-to-top">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}

export default Footer;
