import React from 'react';
import './App.css';

const trainees = [
  {
    id: 1,
    name: 'Devanshi',
    designation: 'iOS Developer',
    experience: 2,
    skills: ['iOS'],
    hobbies: ['travelling']
  },
  {
    id: 2,
    name: 'Parth',
    designation: 'iOS Team Lead',
    experience: 6,
    skills: ['iOS', 'Leadership'],
    hobbies: ['Cricket']
  },
  {
    id: 3,
    name: 'Yash',
    designation: 'Android Developer',
    experience: 5,
    skills: ['Android', 'React Native'],
    hobbies: ['Football', 'Video Games']
  },
  {
    id: 4,
    name: 'Avinash',
    designation: 'iOS Developer',
    experience: 4,
    skills: ['iOS'],
    hobbies: ['Cricket']
  },
  {
    id: 5,
    name: 'Suraj',
    designation: 'Mobile Team Lead',
    experience: 7,
    skills: ['Android', 'Leadership', 'Python'],
    hobbies: ['Video Games']
  },
  {
    id: 6,
    name: 'Amita',
    designation: 'Android Developer',
    experience: 4,
    skills: ['Android'],
    hobbies: ['Travelling']
  },
  {
    id: 7,
    name: 'Harsh',
    designation: 'iOS Developer',
    experience: 2,
    skills: ['iOS'],
    hobbies: ['Travelling', 'Programming']
  },
  {
    id: 8,
    name: 'Jayesh',
    designation: 'iOS Developer',
    experience: 5,
    skills: ['iOS'],
    hobbies: ['Cricket', 'Travelling', 'Programming']
  },
  {
    id: 9,
    name: 'Pankit',
    designation: 'Tech Lead',
    experience: 11,
    skills: ['PHP', 'MVC Frameworks', 'Leadership'],
    hobbies: ['Cricket']
  }
];
function App() {
  return (
    <div className="App">
      {trainees.map((trainee, index) => {
        const { name } = trainee;
        return (
          <div>
            <span>{index + 1}. </span>
            {name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
