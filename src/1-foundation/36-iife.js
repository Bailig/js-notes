// IIFE -> immediately invoked function expression

// 1. this is a function expression not declaration because the first item is an opening bracket
(function () {})();

// benefit is no global variables

// 2. function declaration cannot be invoked immediately
// function(){}() // error

// before we have es modules, this is how people solve the problem of global variables
var module1 = (function () {
  function a() {
    return 1;
  }
  return { a };
})();

console.log(module1.a());

// 3. adding modules as parameters has performance benefits
var module2 = (function (m1) {
  // if we use module1 directly it will need to go up the scope chain to look for the module1
  module1.a();

  // if we use the argument m1, it will find it at local scope. this will have better performance because it doesn't need to do the scope chain look up
  m1.a();
})(module1);
