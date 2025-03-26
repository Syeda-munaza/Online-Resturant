import React from "react";
import AboutImg from "../assets/Images/about-img (2).jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>ABOUT</span> US
      </h1>
      <div className="row">
        <div className="img">
          <img src={AboutImg} alt="Delicious Food" />
        </div>
        <div className="content">
          <h3>What Makes Our Food Special?</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
            Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae
            Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis
            Cupiditate.
          </p>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet
            Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur
            Obcaecati Sapiente?
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
