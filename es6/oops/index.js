// function Employee(name, empid) {
//   this.person = name;
//   this.empid = empid;
// }

// const emp1 = new Employee('Vishal', 1);
// const emp2 = new Employee('Suraj', 2);

// console.log(emp1);
// console.log(emp2);

// Employee.prototype.attendance = function() {
//   console.log(`${this.person} is present today`);
// };

class Employee {
  constructor(name, empid) {
    this.name = name;
    this.empid = empid;
  }

  attendance() {
    console.log(`${this.name} is present today`);
  }

  static EmployeeCounter() {
    console.log('EmployeeCounter');
  }

  get nickName() {
    return this.nick;
  }

  set nickName(value) {
    this.nick = value.trim();
  }
}

const emp1 = new Employee('Vishal', 1);
const emp2 = new Employee('Suraj', 2);
emp1.nickName = 'Vis';

console.log(emp1);
console.log(emp2);

console.log(emp1.attendance());

// Employee.EmployeeCounter

class EmployeeReactNative extends Employee {
  constructor(name, empid, age) {
    super(name, empid);
    this.age = age;
  }
  //   attendance() {
  //     console.log(`EmployeeReactNative attendance`);
  //     super.attendance();
  //   }
}

const obj11 = new EmployeeReactNative('Vis', 11, 30);
obj11.attendance();

//Functions
function Person() {
  var that = this;
  that.age = 0;

  setTimeout(function grow() {
    that.age++;
  }, 1000);
}

//Arrow based function
function Person1() {
  age = 0;
  setTimeout(() => {
    this.age++;
  }, 1000);
}
