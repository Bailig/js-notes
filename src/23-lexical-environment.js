// 1. below all the functions below is part of the global object 'window'; therefore their lexical scope is global
function printName() {
  return "Baylig";
}

function findName() {
  return printName();
}

function sayName() {
  return findName();
}

console.log(sayName === window.sayName);

// 2. the printNameV2 function is lexically inside the findNameV2 function
function findNameV2() {
  function printNameV2() {
    return "Baylig";
  }
  return printNameV2();
}

// execution context tells you which lexical environment are currently running in
// lexical scope -> available data and variables where the function was defined except the 'this'
// dynamic scope -> where the function is called ('this' is dynamically scope)
// lexical scope determines available variables.
// not dynamic scope
