function a() {
  b = 1; // this will be created in global scope. use strict can prevent this
  return b;
}

console.log(a());
console.log(b);

var c = function d() {
  //function d is added to its own variable scope
  return "c?d?";
};

c();
d(); // this will throw error because function d is not in the current scope. It's added to its own variable scope
