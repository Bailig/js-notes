// when calling a function, an execution context of this function will be created, which provides 'this' and 'arguments'
function add(num1, num2) {
  console.log(this);
  console.log(arguments); // do not use this, use rest arguments (e.g. ...args)
  return num1 + num2;
}
add(1, 2);
