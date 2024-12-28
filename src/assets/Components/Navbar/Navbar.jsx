import React from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top`}>
      <div className="container">
        {/* Logo */}
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <h1 className="fw-bold fs-3" to={'/'}>Twinky Market</h1>
        </div>
        
        {/* Centered Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link fw-bold fs-4" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4" to={'/Categories'}>Categories</Link>
            </li>    
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4" to={'/products'}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold fs-4" to={'/createProduct'}>Add Product</Link>
            </li>
          </ul>
        </div>

        {/* Icon links on the right */}
        <div className="d-flex" id="icons">
          {/* Navbar toggler (for mobile view) */}
          <Link className="nav-link" to={'/'}><i className="fa-solid fa-magnifying-glass" /></Link>
          <Link className="nav-link" to={'/'}><i className="fa-solid fa-user" /></Link>
          <Link className="nav-link" to={'/'}><i className="fa-solid fa-cart-shopping" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>     
        </div>
      </div>
    </nav>

  )
}
