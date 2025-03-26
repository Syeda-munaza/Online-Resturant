import React from "react";
import blog1 from "../assets/Images/blog-1.jpeg";
import blog2 from "../assets/Images/blog-2.jpeg";
import blog3 from "../assets/Images/blog-3.jpeg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Tasty And Refreshing Spices",
      date: "21st May, 2021",
      img: blog1,
    },
    {
      id: 2,
      title: "Tasty And Refreshing Spices",
      date: "21st May, 2021",
      img: blog2,
    },
    {
      id: 3,
      title: "Tasty And Refreshing Spices",
      date: "21st May, 2021",
      img: blog3,
    },
  ];

  return (
    <section className="blog-section" id="blogs">
      <h1 className="blog-heading">
        OUR <span>BLOGS</span>
      </h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">By Admin / {blog.date}</p>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
                Dicta.
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
