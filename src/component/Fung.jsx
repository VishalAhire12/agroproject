import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import product1 from '../img/Fujita.png';
import product2 from '../img/Dhanustin.png';
import product3 from '../img/Delight.png';
import product4 from '../img/Godiwasuper.png';
import product5 from '../img/Fujita.png';
import product6 from '../img/Konika.png';
import product7 from '../img/Zerox.png';
import product8 from '../img/Hexadhanplus.png';
import product13 from '../img/fun.jpg';
import './pesticides.css';  // Ensure this file has all CSS

const fungicides = [
  { name: 'FUJITA', image: product1, rating: 4, description: 'Isoprothiolane 40% EC250 ml, 500 ml, 1 ltr.' },
  { name: 'DHANUSTIN', image: product2, rating: 5, description: 'Carbendazim 50% WP100 gm, 250 gm, 500 gm, 1 kg.' },
  { name: 'DELIGHT', image: product3, rating: 3, description: 'Dithiocarbamate, Broad spectrum contact fungicide 100g, 500 g.' },
  { name: 'GODIWA SUPER', image: product4, rating: 4, description: 'Azoxystrobin 18.2% + Difenoconazole 11.4% w/w SC200 ml, 500 ml, 1 L.' },
  { name: 'SIXER', image: product5, rating: 5, description: 'Carbendazim12% + Mancozeb63% WP20 gm, 100 gm, 250 gm, 500 gm, 1 kg.' },
  { name: 'KONIKA', image: product6, rating: 2, description: 'Kasugamycin 5% + Copper Oxychloride 45% WP50gm, 500gm, 1Kg.' },
  { name: 'ZEROX', image: product7, rating: 4, description: 'Propiconazole 25% EC250 ml, 500 ml, 1 ltr.' },
  { name: 'HEXADHAN PLUS', image: product8, rating: 5, description: 'Hexaconazole 5% SC100, 250, 500, 1, 5lit.' },
];

const Herb = () => (
  <div className="fungicide-page">
    <div className="fungicide-banner">
      <img src={product13} alt="Banner" className="fungicide-banner-image" />
      <div className="fungicide-banner-text">Fungicides Product</div> 
    </div>
    
    <div className="herbicides-header">
      <h1 className="herbicides-title">Fungicides Product</h1>
    </div>

    <div className="fungicide-product-list">
      {fungicides.map((product, index) => (
        <div className="fungicide-product-card" key={index}>
          <div className="fungicide-image-container">
            <img src={product.image} alt={product.name} className="fungicide-product-image" />
            <div className="fungicide-image-overlay">
              <h3 className="fungicide-overlay-title">{product.name}</h3>
            </div>
          </div>
          <h3 className="fungicide-product-name">{product.name}</h3>
          <p className="fungicide-product-description">{product.description}</p>
          <div className="fungicide-product-rating">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </div>
          <Link to="/BuyProductForm" className="fungicide-details-btn">
          Place Order
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Herb;
