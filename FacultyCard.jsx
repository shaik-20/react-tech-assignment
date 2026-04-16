import React from "react";

const FacultyCard = ({
  image,
  name,
  role,
  qualifications,
  description,
  specializations,
}) => {
  return (
    <div className="faculty-card">
      <img
        src={image}
        alt="faculty-img"
        className="faculty-photo"
        width="200"
        height="200"
      />
      <h3>{name}</h3>
      <p className="department-italic">{role}</p>
      <p className="qualifications">{qualifications}</p>
      <p>{description}</p>
      <h4>Specializations:</h4>
      <ul className="specializations-list">
        {specializations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyCard;
