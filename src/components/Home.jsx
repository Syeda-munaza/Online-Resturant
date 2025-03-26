import React from "react";
import bgImage from "../assets/Images/backgroun.jpg";

const Home = () => {
  return (
    <section
      className="home"
      id="home"
      style={{
        background: `url(${bgImage}) no-repeat center center/cover`, // Direct background image without overlay
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 10%",
      }}
    >
      <div className="content">
        <h3>
          FRESH <span>FOOD IN THE</span> MORNING
        </h3>
        <p>
          Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat
          Labore, Sint Cupiditate Distinctio Tempora Reiciendis.
        </p>
        <a href="#" className="btn">
          Get Yours Now
        </a>
      </div>
    </section>
  );
};

export default Home;
