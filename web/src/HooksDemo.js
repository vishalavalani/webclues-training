import React, { useState } from 'react';

function HooksDemo(props) {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Vishal'
    },
    {
      id: 2,
      name: 'Yash'
    },
    {
      id: 3,
      name: 'Suraj'
    }
  ]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <div>{employee.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default HooksDemo;
