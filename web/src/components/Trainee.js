import React from 'react';

const Trainee = ({ index, trainee, onDelete }) => {
  const { name, designation, experience, id } = trainee;

  return (
    <div className="item">
      <span>{index + 1}. </span>
      <div className="name">Name: {name}</div>
      <div className="">Designation: {designation}</div>
      <div className="">Experience: {experience}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Trainee;
