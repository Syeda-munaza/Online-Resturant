import React, { useRef } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { product } from "../assets/assets";
import { cartData } from "../Data";

const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  // 🔹 Toggle search and close others
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active"); // Close cart
    navbarRef.current.classList.remove("active"); // Close menu
  };

  // 🔹 Toggle menu and close others
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active"); // Close search
    cartRef.current.classList.remove("active"); // Close cart
  };

  // 🔹 Toggle cart and close others
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active"); // Close search
    navbarRef.current.classList.remove("active"); // Close menu
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={product.logo} alt="Logo" />
        </a>

        {/* 🔹 Navigation Menu */}
        <nav
          className="navbar"
          
          ref={navbarRef}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#reviews">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>

        {/* 🔹 Icons Section */}
        <div className="icons">
          <div className="icon" onClick={searchHandler}>
            <FaSearch />
          </div>
          <div className="icon" onClick={cartHandler}>
            <FaShoppingCart />
          </div>
          <div className="icon" id="menu-btn" onClick={navbarHandler}>
            <FaBars />
          </div>
        </div>

        {/* 🔹 Search Bar */}
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here.." id="search-box" />
          <label htmlFor="search-box">
            <FaSearch className="search-icon" />
          </label>
        </div>

        {/* 🔹 Cart Section */}
        <div className="cart-items-container" ref={cartRef}>
          {cartData.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt={item.name} />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">${item.price}</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            Checkout Now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
