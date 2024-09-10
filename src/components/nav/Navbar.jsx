import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">
    <img src="./images/clalogo.png" width="50px" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">Computer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">Laptop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="">Producst</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">Contact Us</Link>
        </li>
        <li className='nav-item'>
            <img src="./images/searchicon.png" width="20px" />
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
