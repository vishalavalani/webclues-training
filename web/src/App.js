import React from 'react';
import './App.css';
import { trainees } from './shared/trainees';
function App() {
  const traineeObj = trainees.map((trainee, index) => {
    const { name } = trainee;
    return (
      <div className="item">
        <span>{index + 1}. </span>
        <span className="name">{name}</span>
      </div>
    );
  });
  console.log('traineeObj', traineeObj);
  return <div className="App">{traineeObj}</div>;
}

export default App;
