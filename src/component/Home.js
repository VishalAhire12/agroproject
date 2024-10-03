import React, { useState, useEffect } from 'react';
// Import the animated background
import farmer1 from '../img/55.webp';
import farmer2 from '../img/56.jpg';
import farmer5 from '../img/front8.jpg';

import farmer3 from '../img/front2.png';
import farmer4 from '../img/frontside.webp';
// Import your video file
import videoFile from '../img/vid.mp4';
import videoFile1 from '../img/vid5.mp4';
import videoFile2 from '../img/vid8.mp4';

import './Home.css';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { img: farmer1, description: '“Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.”.' },
    { img: farmer2, description: 'If agriculture goes wrong, nothing else will have a chance to go right' },
    { img: farmer3, description: 'Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.' }
  ];

  // Function to handle automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={slide.img} className="d-block w-100" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block">
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() => handleSlideChange((activeIndex - 1 + slides.length) % slides.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() => handleSlideChange((activeIndex + 1) % slides.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Card Section 1 with Flexbox */}
      <div className="card2">
        <div className="custom-flex-container">
          {/* Video Section */}
          <div className="custom-video-section">
            <video className="custom-video" autoPlay muted loop controls>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Section */}
          <div className="custom-content-section">
            <h5 className="custom-card-title">
              "Pesticides and Crops: Ensuring Food Security in a Changing Environment"
            </h5>
            <p className="custom-card-text">
              Pesticides and crops are central to modern agriculture, playing a key role in
              ensuring food security. Pesticides, which include herbicides, insecticides, and
              fungicides, are used to protect crops from pests, diseases, and weeds. This helps
              increase crop yields and reduce the loss of agricultural produce. Crops, such as
              cereals, vegetables, and fruits, form the basis of human nutrition, providing
              essential vitamins, minerals, and energy. While pesticides can enhance crop
              production, their overuse may harm the environment, leading to soil degradation and
              biodiversity loss. Sustainable agricultural practices balance pesticide use with
              ecological preservation to ensure long-term productivity.
            </p>
            <p className="custom-card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

      {/* Card Section 2 */}
      <div className="card2">
        <div className="custom-flex-container">
          {/* Image Section */}
        

          {/* Content Section */}
          <div className="custom-content-section">
            <h5 className="custom-card-title">
            <div className="custom-image-section">
            <img src={farmer4} alt="Agriculture" className="custom-image" />
          </div>
              "Pesticide residues in food"
            </h5>
            <p className="custom-card-text">
            Pesticides are a critical tool for farmers and agricultural professionals. These substances kill and repel pests or other growths that harm crops. In turn, crops stay healthier and don’t get destroyed by these external forces. With pesticides, farmers can produce higher growth yields and protect their crops more efficiently.<br/><br/>

Each pesticide has its own applications and benefits. And with so many pesticide types available, picking one for your crops can sometimes seem overwhelming. Understanding the most commonly used types for farming can help you make the best selection.<br/>

Here is an overview of choosing the correct pesticide for your farming crops.<br/><br/>
<video className="custom-video" autoPlay muted loop controls>
              <source src={videoFile1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
<h5 className="custom-card-title">Scope of the problem</h5>
Pesticides are among the leading causes of death by self-poisoning, particularly in low- and middle-income countries.<br/>

Since pesticides are intrinsically toxic and deliberately spread in the environment, their production, distribution and use call for strict regulation and control. Regular monitoring of residues in food and the environment is also required.<br/><br/>

WHO has two objectives in relation to pesticides:<br/>

to ban the pesticides that are most toxic to humans, as well as pesticides that remain for the longest time in the environment;
to protect public health by setting maximum limits for pesticide residues in food and water.
<br/><br/><h1>Who is at risk?</h1>

The population most at risk are those who are directly exposed to pesticides. This includes agricultural workers who apply pesticides and anyone else in the immediate area during, and shortly after, pesticides are spread.

The general population – those not in the area where pesticides are used – is exposed to significantly lower levels of pesticide residues through food and water.
            </p>
            <p className="custom-card-text">
              <small className="text-body-secondary">Last updated 5 mins ago</small>
            </p>
          </div>
          <div className="custom-content-section">
            <h5 className="custom-card-title">
            <div className="custom-image-section">
            <img src={farmer5

            } alt="Agriculture" className="custom-image" />
          </div>
              "Major Crops In India"
            </h5>
            <p className="custom-card-text">
            India stands as a pinnacle-producing country in the world. Agriculture is considered the way of life, and farmers are treated as Gods. There are several Major Crops In India like Food grains -Rice, Wheat, Maize, Millets and Pulses, Cash Crops- Cotton, Jute, Sugarcane, Tobacco, and Oilseeds, Plantation Crops-Tea, Coffee, Coconut and, Rubber and Horticulture crops- Fruits and Vegetables. Cotton, which is the natural fibre, grows on plants, and Gujarat is India’s largest cotton producing state. Similarly, the crops are accordingly divided based on seasons and the cultivation suitably.<br/><br/>

India is now the world’s second-largest producer of agricultural products. India is an agricultural country, with agriculture providing a living for more than 60% of the population. While we may not understand the importance of agriculture while living in metropolitan areas, it is a well-known truth that agriculture is the primary source of income for most of our country’s people.<br/><br/>

The population of India is outpacing the country’s ability to produce rice and wheat, which are the  Major Crops In India. The amount of money needed to construct marketing, storage, and cold storage infrastructure is projected to be enormous. Numerous crops, ranging from medicinal to grain crops, are grown throughout the country. These commodities are utilized for various purposes, including human consumption, industry, and animal feed.
<video className="custom-video" autoPlay muted loop controls>
              <source src={videoFile2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            India, with its diverse agro-climatic zones and rich agricultural heritage, is home to a wide range of food and non-food crops. The country’s agricultural landscape is shaped by varying soil types, climatic conditions, and traditional cultivation practices, resulting in the growth of crops that sustain millions of livelihoods. This article aims to study in detail the major crops grown in India, delving into their significance, cultivation practices, and regional distribution.

            </p>
            <p className="custom-card-text">
              <small className="text-body-secondary">Last updated 5 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
