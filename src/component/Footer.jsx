// Footer.js
import React from 'react';
import './Footer.css'; // Create this CSS file for custom footer styles if needed
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h5>History at your fingertips</h5>
            <p>Sign up here to see what happened On This Day, every day in your inbox!</p>
            <form className="subscription-form d-flex justify-content-center">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h5>Pesticides</h5>
            <ul className="list-unstyled">
              <li><Link to="./Fung">Pesticides</Link></li>
              <li><Link to="./pesticides">Fungicides</Link></li>
              <li><Link to="./pesticides">Herbicides</Link></li>
              <li><Link to="./pesticides">Insecticides</Link></li>
             
             
             
            </ul>
          </div>
          <div className="col-md-3">
            <h5><Link to="./Crop">Crops</Link></h5>
          
              <li><Link to="./Crop">Fruits</Link></li>
              <li><Link to="./Crop">Fruit Farming</Link></li>
          </div>
          <div className="col-md-3">
            <h5>INTERNATIONAL</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Details</li>
              <li>Farming</li>
              <li>Pesticides</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>STAY CONNECTED</h5>
            <ul className="list-unstyled social-media">
              <li><a href="#" className="text-white"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#" className="text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-white"><i className="fab fa-youtube"></i> YouTube</a></li>
              <li><a href="#" className="text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
              <button className="login-btn"><Link to="./Contactus">Contact Us</Link></button>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <small>Copyright 2023 AHIRE AGRO. All Rights Reserved</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
