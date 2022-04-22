import Background from "../assets/hero.png";

function Hero() {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Our menu offers something for everybody, from excellent client
                benefit to the best quality fixings.
              </p>
              <a
                href="https://"
                className="btn btn-warning py-sm-3
                            px-sm-5 me-3 animated slideInLeft"
              >
                Book A Table
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img src={Background} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
