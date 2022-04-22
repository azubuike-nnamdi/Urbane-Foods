import React from "react";
import Chair from "../../assets/about-1.jpg";
import Chair2 from "../../assets/about-2.jpg";
import Chair3 from "../../assets/about-3.jpg";
import Chair4 from "../../assets/about-4.jpg";
function AboutWelcom() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <div class="row g-3">
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={Chair}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div class="col-6 text-start">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={Chair2}
                    alt="hello"
                    style={{
                      marginTop: "25%",
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={Chair3}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
                <div class="col-6 text-end">
                  <img
                    class="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={Chair4}
                    alt="hello"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "zoomIn",
                    }}
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h5 class="section-title ff-secondary text-start text-warning fw-normal">
                About Us
              </h5>
              <h1 class="mb-4">
                Welcome to <i class="fa fa-utensils text-warning me-2"></i>
                Urbane Foods
              </h1>
              <p class="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis minima voluptatum 
                vero excepturi, inventore nihil.
              </p>
              <p class="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis laudantium eligendi 
                quibusdam totam magni saepe fugiat doloremque possimus dicta. 
                Deserunt, non ea? Fugit, perferendis?
              </p>
              <div class="row g-4 mb-4">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center border-start border-5 border-warning px-3">
                    <h1
                      class="flex-shrink-0 display-5 text-warning mb-0"
                      data-toggle="counter-up"
                    >
                      15
                    </h1>
                    <div class="ps-4">
                      <p class="mb-0">Years of</p>
                      <h6 class="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex align-items-center border-start border-5 border-warning px-3">
                    <h1
                      class="flex-shrink-0 display-5 text-warning mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div class="ps-4">
                      <p class="mb-0">Popular</p>
                      <h6 class="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a class="btn btn-warning py-3 px-5 mt-2" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWelcom;
