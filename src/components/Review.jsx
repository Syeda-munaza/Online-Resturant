import React from "react";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import profileImg from "../assets/Images/customer.jpg"; // Update with the actual path

const reviews = [
  {
    id: 1,
    name: "John Deo",
    review:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.",
    rating: 4.5,
    img: profileImg,
  },
  {
    id: 2,
    name: "John Deo",
    review:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.",
    rating: 4.5,
    img: profileImg,
  },
  {
    id: 3,
    name: "John Deo",
    review:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.",
    rating: 4.5,
    img: profileImg,
  },
];

const Review = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        CUSTOMER'S <span>REVIEW</span>
      </h1>

      <div className="box-container">
        {reviews.map((review) => (
          <div className="box" key={review.id}>
            <FaQuoteRight className="quote-icon" />
            <p>{review.review}</p>
            <img src={review.img} alt={review.name} className="user-img" />
            <h3>{review.name}</h3>
            <div className="stars">
              ⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
