// scope -> what variables we have access to
// block scope -> around any curly bracket
// function scope -> only function's curly bracket

// 1. var is not block scoped
if (true) {
  var a1 = 1;
}
console.log(a1); // 1

// 2. var is functionally scoped
function b() {
  var a2 = 1;
}
// console.log(a2); // error

// 3. const and let both are block scoped
if (true) {
  const a3 = 1;
  let a4 = 1;
}
// console.log(a3); // error
// console.log(a4); // error
