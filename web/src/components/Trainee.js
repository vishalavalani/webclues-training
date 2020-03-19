import React, { Component } from 'react';

class Trainee extends Component {
  state = {
    isDeleteClicked: false
  };
  onDelete = id => {
    this.setState({
      isDeleteClicked: true
    });
    this.props.onDelete(id);
  };
  render() {
    const { index, trainee } = this.props;
    const { name, designation, experience, id } = trainee;
    const { isDeleteClicked } = this.state;
    return (
      <div className={!isDeleteClicked ? 'item' : 'itemDelete'}>
        <span>{index + 1}. </span>
        <div className="name">Name: {name}</div>
        <div className="">Designation: {designation}</div>
        <div className="">Experience: {experience}</div>
        {!isDeleteClicked && (
          <button onClick={() => this.onDelete(id)}>Delete</button>
        )}
      </div>
    );
  }
}

// import React from 'react';

// const Trainee = ({ index, trainee, onDelete }) => {
//   const { name, designation, experience, id } = trainee;

//   return (
//     <div className="item">
//       <span>{index + 1}. </span>
//       <div className="name">Name: {name}</div>
//       <div className="">Designation: {designation}</div>
//       <div className="">Experience: {experience}</div>
//       <button onClick={() => onDelete(id)}>Delete</button>
//     </div>
//   );
// };

export default Trainee;
