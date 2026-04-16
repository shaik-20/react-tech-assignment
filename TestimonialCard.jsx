import React from "react";

const TestimonialCard = ({ image, name, role, description }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt="testimonial-img" width="200" height="200" />
      <h3 className="name">{name}</h3>
      <p>
        <em>{role}</em>
      </p>
      <p className="home-para">{description}</p>
    </div>
  );
};

export default TestimonialCard;
