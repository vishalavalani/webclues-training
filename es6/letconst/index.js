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
