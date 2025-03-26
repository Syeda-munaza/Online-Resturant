import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="heading">
        <span>CONTACT</span> US
      </h1>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.744392850034!2d-73.99410252442594!3d40.75889513593698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854b673cf0f%3A0x8a1f573aad3e1a5a!2sMcDonald%E2%80%99s!5e0!3m2!1sen!2sus!4v1648623428579!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="form-container">
          <h2>GET IN TOUCH</h2>
          <form>
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="name" />
            </div>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="email" />
            </div>
            <div className="input-box">
              <FaPhone className="icon" />
              <input type="text" placeholder="number" />
            </div>
            <button type="submit" className="btn">Contact Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;