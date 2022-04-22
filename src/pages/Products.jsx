import React from 'react'
import '../App.css'
import Product from '../components/Product'

function Products() {
  return (
    <div>

            <div class="container-xxl py-5 bg-dark hero-header mb-5">
                <div class="container text-center my-5 pt-5 pb-4">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Urbane Foods Amazing Products</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">About</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
            </div>
      
      
      <div className='container py-5 mb-0'>
            <div class="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                    <h4 class="ff-secondary text-center text-warning fw-semi-bold">Delicious meals from Urbane Foods</h4>
                    <h1 class="mb-5">Most Popular Delicacies</h1>
                </div>

          <div class="tab-class text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
                    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <i class="fa fa-coffee fa-2x text-warning"></i>
                                <div class="ps-3">
                                    <small class="text-dark">Popular</small>
                                    <h6 class="mt-n1 mb-0 text-dark fw-bold">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <i class="fa fa-hamburger fa-2x text-warning"></i>
                                <div class="ps-3">
                                    <small class="text-dark">Special</small>
                                    <h6 class="mt-n1 mb-0 text-dark fw-bold">Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <i class="fa fa-utensils fa-2x text-warning"></i>
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
  )
}

export default Products
