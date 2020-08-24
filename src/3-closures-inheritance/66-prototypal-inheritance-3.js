function a() {}
console.log(a.hasOwnProperty("name")); // true
console.log(a.name); // a

console.log(a.hasOwnProperty("call")); // false

// base function has the call method
console.log(a.__proto__.hasOwnProperty("call")); // true
console.log(a.__proto__ === Function.prototype); // true
console.log(a.__proto__.__proto__ === Object.prototype); // true
console.log(a.__proto__.__proto__.__proto__ === null); // true

// __proto__ points to the prototype up the chain
