import React from 'react';
import burger from "../assets/Images/menu-1.png";
import chickenFries from "../assets/Images/menu-2.png";
import crispyChicken from "../assets/Images/menu-3.png";
import pizza from "../assets/Images/menu-4.png";
import breakfast from "../assets/Images/menu-5.png";
import coffee from "../assets/Images/menu-6.png";

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Burger Combo', price: 15.99, oldPrice: 20.99, img: burger },
    { id: 2, name: 'Chicken & Fries', price: 15.99, oldPrice: 20.99, img: chickenFries },
    { id: 3, name: 'Crispy Chicken', price: 15.99, oldPrice: 20.99, img: crispyChicken },
    { id: 4, name: 'Pizza', price: 15.99, oldPrice: 20.99, img: pizza },
    { id: 5, name: 'Breakfast Special', price: 15.99, oldPrice: 20.99, img: breakfast },
    { id: 6, name: 'Coffee', price: 15.99, oldPrice: 20.99, img: coffee }
  ];

  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>Our <span>Menu</span></h1>
      <div className='box-container'>
        {menuItems.map((item) => (
          <div className='box' key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className='price'>
              ${item.price} <span className='old-price'>${item.oldPrice}</span>
            </p>
            <button className='btn'>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
