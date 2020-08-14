// js engin will create a global execution context -> basically reads js file
// when executing a function, there is gonna be an execution context created
// this execution context will be added to the call stack
// the function will run in this execution context
// when value is returned, the context will be popped off
// when all js code has run the global execution context will be popped off

// Creation phase
// when the js engin run, the engin creates a execution context which provides
// 1. Global object
window;
// 2. this
this;
console.log(this === window); // true

// when creating a global variable with var, this variable will be added to window
var a = "a";
console.log(window.a === a);

// Execution phase
// run the code
