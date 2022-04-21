import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeadset, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div>
        <div className="container-xxl py-3">
            <div className="container">
                <div className="mb-5 text-center">
                    <h2 className="section-title ff-secondary text-start text-warning
                                fw-normal">
                        Our Services
                    </h2>
                </div>
                <div className="row g-4">
                    {/* card 1 */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FontAwesomeIcon icon={faUserTie} className="fa-3x text-warning mb-3"/>
                                <h5>
                                    Chef
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, deserunt.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.3s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FontAwesomeIcon icon={faUtensils} className="fa-3x text-warning mb-3" />
                                <h5>
                                    Healthy Food
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusanda.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.6s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <FontAwesomeIcon icon={faCartPlus} className="fa-3x text-warning mb-3"  />
                                <h5>
                                    Online Order
                                </h5>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nesciunt.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className="col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="service-item rounded-pt-3">
                            <div className="p-4">
                                <FontAwesomeIcon icon={faHeadset} className="fa-3x text-warning mb-3" />
                                <h5>
                                    Customer Care
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ullam!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services