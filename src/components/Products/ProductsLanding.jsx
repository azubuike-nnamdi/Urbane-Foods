import { faCoffee, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Product from '../Product'

function ProductsLanding() {
  return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row">
                <div className='container py-5 mb-0'>
            <div class="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                    <h4 class="ff-secondary text-center text-warning fw-semi-bold">Delicious meals from Urbane Foods</h4>
                    <h1 class="mb-5">Most Popular Delicacies</h1>
                </div>

          <div class="tab-class text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <FontAwesomeIcon icon={faCoffee} className="fa-3x text-warning" />
                                <div class="ps-3">
                                    <small class="text-dark">Popular</small>
                                    <h6 class="mt-n1 mb-0 text-dark fw-bold">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <FontAwesomeIcon icon = {faHamburger} className="fa-3x text-warning" />
                                <div class="ps-3">
                                    <small class="text-dark">Special</small>
                                    <h6 class="mt-n1 mb-0 text-dark fw-bold">Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <FontAwesomeIcon icon = {faUtensils} className="fa-3x text-warning" />
                                <div class="ps-3">
                                    <small class="text-body">Lovely</small>
                                    <h6 class="mt-n1 mb-0 fw-bold text-dark">Dinner</h6>
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
  )
}

export default ProductsLanding