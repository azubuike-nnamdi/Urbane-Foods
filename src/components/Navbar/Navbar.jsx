import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    return (
    <div className='container-xxl position-relative p-0'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5
        py-3 py-lg-0 sticky-top">
            {/* Product Brand */}
            <Link to="/" className="navbar-brand p-3" >
                <h2 className="text-warning m-0">
                    <FontAwesomeIcon icon={ faUtensils} className="" /> 
                    Urbane Foods
                </h2>
            </Link>

            {/* Toogler */}
            <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* nav content + Links */}
            <div className="collapse navbar-collapse"
            id='navbarCollapse'>
                <div className="navbar-nav ms-auto py-0 px-3 text-start">
                    <Link to="/" className="nav-item nav-link active
                    link-underline link-underline-warning">
                        Home
                    </Link>
                    <Link to="/about" className="nav-item nav-link active
                    link-underline link-underline-warning">
                        About
                    </Link>
                    <Link to="/products" className="nav-item nav-link active
                    link-underline link-underline-warning">
                        Products
                    </Link>
                    <Link to="/contact" className="nav-item nav-link active
                    link-underline link-underline-warning">
                        Contact
                    </Link>
                </div>
                <Link to="/" className="btn btn-warning py-2 px-4 justify-start">
                    Book A Table
                </Link>
            </div>
        </nav>
    </div>
)
}

export default Navbar
