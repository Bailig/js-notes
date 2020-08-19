// when executing a function, after the execution context is created, before the code is run, there is a step called hoisting.
// hoisting is the behaviour of moving the variables (var) and function declaration (function) to the top of their respective environments.

// 1 the variable and function will be hoisted
console.log(hoistedVar); // undefined
console.log(hoistedFunction()); // I'm housed function

var hoistedVar = "I'm hoisted, but as undefined";

function hoistedFunction() {
  return "I'm housed function";
}

// 2. after hoisting above code will be like following
var hoistedVar2 = undefined;
function hoistedFunction2() {
  return "I'm housed function";
}

console.log(hoistedVar2); // undefined
console.log(hoistedFunction2()); // I'm housed function

var hoistedVar2 = "I'm hoisted, but as undefined";

// variables are partially hoisted. when hoisting, variables will have their memory space allocated with value undefined
// functions are fully hoisted. when hoisting, functions are stored in memory

// 3. the js engin will not hoist the function because it's in a bracket

// console.log(notHoistedFunction()); // Uncaught ReferenceError: notHoistedFunction is not defined
(function notHoistedFunction() {
  return "I'm not housed function";
});

// 4. let and const will not be hoisted too

// console.log(constVar); // Uncaught ReferenceError: Cannot access 'constVar' before initialization
// console.log(letVar); // Uncaught ReferenceError: Cannot access 'letVar' before initialization
const constVar = "not hoisted";
let letVar = "not hoisted";

// 5. function expression will be partially hoisted
// function declaration will be fully hoisted

// console.log(partiallyHoistedFunction); // undefined
// console.log(partiallyHoistedFunction()); // Uncaught TypeError: partiallyHoistedFunction is not a function
// console.log(fullyHoistedFunction()); //I'm fully housed function
var partiallyHoistedFunction = function () {
  return "I'm partially hoisted, so I'm undefined";
};
function fullyHoistedFunction() {
  return "I'm fully housed function";
}
