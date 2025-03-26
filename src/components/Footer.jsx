import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaPinterest /></a>
      </div>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Menu</a>
        <a href="#">Products</a>
        <a href="#">Review</a>
        <a href="#">Contact</a>
        <a href="#">Blogs</a>
      </div>

      <p className="footer-text">
        Created By <span className="highlight">Coding Circulate</span> | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
