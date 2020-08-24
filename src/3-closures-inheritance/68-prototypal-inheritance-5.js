// only functions have the prototype property
function a() {}
console.log(a.prototype);

// we use prototype only when we use a constructor function
// construction functions start with capital letter, and they are functions
console.log(typeof Object === "function"); // true
console.log(typeof Array === "function"); // true
console.log(typeof Function === "function"); // true
console.log(typeof String === "function"); // true
console.log(typeof Date === "function"); // true
