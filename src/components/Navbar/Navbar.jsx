import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container-xxl position-relative p-0'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5
        py-3 py-lg-0">
            <Link to="/" className="navbar-brand p-0" >
                <h1 className="text-primary m-0">
                    
                </h1>
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
