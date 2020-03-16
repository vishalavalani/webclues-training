//The let statement allows you to declare a variable with block scope.
//The const statement allows you to declare a constant (a JavaScript variable with a constant value).
//Constants are similar to let variables, except that the value cannot be changed.
//var – function scoped  (global)
//When to use var vs const vs let?
//Use var for top level variables that are shared across many scopes
//Use const by default and use let only if rebinding is needed. var shouldn't be used in ES6

//Example 1
//var
const key = 'key';
let points = 50;
let winner = false;

if (points < 70) {
  //   console.log('winner', winner);
  let winner = true;
  console.log('winner', winner);
}

console.log('winner', winner);

//Example 2

let person1 = 'harsh';
console.log('person name', person1);

person1 = 'Devanshi';
console.log('person name', person1);

const person = {
  name: 'Harsh',
  age: 24
};

console.log('person name', person.name);
console.log('person age', person.age);

person.name = 'Devanshi';

console.log('person name', person.name);
console.log('person age', person.age);

const config = {
  url: 'https://www.vishalavalani.com',
  googleToken: '123456678'
};

Object.freeze(config);
console.log('config', config);
config.url = 'https://abs.com';

console.log('config', config);

//Example 3 - Trivia

for (let i = 0; i < 10; i++) {
  console.log('counter', i);
  setTimeout(function() {
    console.log('timeout ' + i);
  }, 1000);
}
