import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Navbar.css";  // Assuming you have custom styles here
import logo from '../img/logo5.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <img src={logo} alt="Agriculture Logo" className="logo" /> 
        {/* Logo/Heading */}
        <h1 className="navbar-brand">AHIRE <span>A</span>GRO</h1>

        {/* Toggler for smaller screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links including dropdown */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/Home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pesticides
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="./Fung">Fungicides/
                बुरशीनाशक</Link></li>
                <li><Link className="dropdown-item" to="/Herb">herbicides/तणनाशक</Link></li>
                <li><Link className="dropdown-item" to="/Insec">insecticides/
                कीटकनाशक</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Crop">Crops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://www.india.gov.in/spotlight/pradhan-mantri-kisan-sampada-yojana">Government Scheme</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contactus">ContactUS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>

          {/* Right side: Search Bar */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
