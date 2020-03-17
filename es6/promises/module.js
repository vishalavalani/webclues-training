import { employee, EmployeeNew } from './models/employee.js';

function addEmployee() {
  const emp1 = new EmployeeNew('Yash', 1001);
  const strEmp = JSON.stringify(emp1);
  console.log('strEmp', strEmp);

  // employee.name = 'Test';
  // employee.age = 20;
  // employee.designation = 'Team Lead';

  // const url = 'http://someurl.com';
  // fetch(url, {
  //   method: 'POST',
  //   body: JSON.stringify(employee),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // });
}

addEmployee();

console.log('module');
