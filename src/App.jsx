import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Review from "./components/Review";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
function App() {
  return (
    <>
     <Navbar/>
     <Home />
     <About/>
     <Menu/>
     <Product/>
     <Review/>
     <ContactUs/>
     <Blogs/>
     <Footer/>
    </>
  );
}

export default App;
