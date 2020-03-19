import React from 'react';

const Trainee = ({ index, trainee }) => {
  const { name, designation, experience } = trainee;
  return (
    <div className="item">
      <span>{index + 1}. </span>
      <div className="name">Name: {name}</div>
      <div className="">Designation: {designation}</div>
      <div className="">Experience: {experience}</div>
    </div>
  );
};

export default Trainee;
