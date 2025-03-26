import React from 'react';
import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import burger from "../assets/Images/product-1.png";
import chocolate from "../assets/Images/product-2.png";
import icecream from "../assets/Images/menu-6.png";

const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 15.99,
      oldPrice: 20.99,
      img: burger,
    },
    {
      id: 2,
      name: "Chocolate Dessert",
      price: 15.99,
      oldPrice: 20.99,
      img: chocolate,
    },
    {
      id: 3,
      name: "Chocolate Ice Cream",
      price: 15.99,
      oldPrice: 20.99,
      img: icecream,
    }
];

const Product = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        OUR <span>PRODUCTS</span>
      </h1>

      <div className="box-container">
        {products.map((product) => (
          <div className="box" key={product.id}>
            <div className="icons">
              <button className="icon-btn"><FaShoppingCart /></button>
              <button className="icon-btn"><FaHeart /></button>
              <button className="icon-btn"><FaEye /></button>
            </div>
            <img src={product.img} alt={product.name} />

            <h3>{product.name}</h3>
            <div className="stars">⭐⭐⭐⭐☆</div>
            <p className="price">
              ${product.price.toFixed(2)} <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;

