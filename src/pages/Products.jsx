import {
  faCoffee,
  faHamburger,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  axios
    .get("products.json")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      throw err;
    });

  const postList =
    products.length !== 0 ? (
      <div className="container-xxl py-5 mt-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-custom-main fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
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
                    className="fa-2x text-custom-main"
                  />
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
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
                    className="fa-2x text-custom-main"
                  />
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Lunch</h6>
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
                    className="fa-2x text-custom-main"
                  />
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {products
                    .slice(0, 0 + 10)
                    .filter((prod) => prod.category.toLowerCase() === "popular")
                    .map((product) => {
                      return (
                        <div key={product.id} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <img
                              className="flex-shrink-0 img-fluid rounded"
                              src={`assets/${product.img}`}
                              alt=""
                              style={{ width: "80px" }}
                            />
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{product.title}</span>
                                {product.discount ? (
                                  <span>
                                    <strike className="text-secondary">
                                      ${product.price.toFixed(2)}
                                    </strike>{" "}
                                    <span className="text-custom-main">
                                      $
                                      {(
                                        product.price -
                                        product.price * (product.discount / 100)
                                      ).toFixed(2)}
                                    </span>
                                  </span>
                                ) : (
                                  <span className="text-custom-main">
                                    ${product.price.toFixed(2)}
                                  </span>
                                )}
                              </h5>
                              <small className="fst-italic">
                                {product.description}
                              </small>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade p-0">
                <div className="row g-4">
                  {products
                    .slice(0, 10)
                    .filter((prod) => prod.category.toLowerCase() === "special")
                    .map((product) => {
                      return (
                        <div key={product.id} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <img
                              className="flex-shrink-0 img-fluid rounded"
                              src={`assets/${product.img}`}
                              alt=""
                              style={{ width: "80px" }}
                            />
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{product.title}</span>
                                {product.discount ? (
                                  <span>
                                    <strike className="text-secondary">
                                      ${product.price.toFixed(2)}
                                    </strike>{" "}
                                    <span className="text-custom-main">
                                      $
                                      {(
                                        product.price -
                                        product.price * (product.discount / 100)
                                      ).toFixed(2)}
                                    </span>
                                  </span>
                                ) : (
                                  <span className="text-custom-main">
                                    ${product.price.toFixed(2)}
                                  </span>
                                )}
                              </h5>
                              <small className="fst-italic">
                                {product.description}
                              </small>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade p-0">
                <div className="row g-4">
                  {products
                    .slice(0, 10)
                    .filter((prod) => prod.category.toLowerCase() === "dinner")
                    .map((product) => {
                      return (
                        <div key={product.id} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <img
                              className="flex-shrink-0 img-fluid rounded"
                              src={`assets/${product.img}`}
                              alt=""
                              style={{ width: "80px" }}
                            />
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>{product.title}</span>
                                {product.discount ? (
                                  <span>
                                    <strike className="text-secondary">
                                      ${product.price.toFixed(2)}
                                    </strike>{" "}
                                    <span className="text-custom-main">
                                      $
                                      {(
                                        product.price -
                                        product.price * (product.discount / 100)
                                      ).toFixed(2)}
                                    </span>
                                  </span>
                                ) : (
                                  <span className="text-custom-main">
                                    ${product.price.toFixed(2)}
                                  </span>
                                )}
                              </h5>
                              <small className="fst-italic">
                                {product.description}
                              </small>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>No products yet...</p>
    );
  return postList;
}

export default Products;
