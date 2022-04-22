import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="row">
      <div className="container-xxl position-relative p-0">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5
        py-3 py-lg-0 sticky-top"
        >
          {/* Product Brand */}
          <Link to="/" className="navbar-brand p-3">
            <h2 className="text-warning m-0">
              <FontAwesomeIcon icon={faUtensils} className="px-lg-4 px-sm-2" />
              Urbane Foods
            </h2>
          </Link>

          {/* nav content + Links */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 px-3 text-start">
              <NavLink
                to="/"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-item nav-link
                    link-underline link-underline-warning"
              >
                Contact
              </NavLink>
            </div>
            <Link to="/" className="btn btn-warning py-2 px-4 justify-start">
              Book A Table
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
