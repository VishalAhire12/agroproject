import React, { useState } from 'react';
import './contactus.css'; // Create this CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://localhost:4000/api/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      
      setFormData({ Name: '', Email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <div className="contact-us-content">
        {/* Left side: Contact Information Section */}
        <div className="contact-us-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> At Post Mahalpatne Shiv Pandi <br/>Tal-Deola Nashik Maharashtra </p>
          <p><strong>Phone:</strong> +91 9307506113</p>
          <p><strong>Email:</strong> vishalnahire2019@gmail.com</p>

          {/* Map Icon */}
          <div className="map-icon">
            <a 
              href="https://www.google.com/maps/place/20.512299854580135,74.33361827840928" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> View on Map
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right side: Contact Form Section */}
        <div className="contact-us-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-us-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
