// 7 primitive types -> a data only represents a single value
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof "a"); // string
console.log(typeof undefined); // undefined, which means it's not defined
console.log(typeof null); // object, which is a mistake of the js creator. it means there is no value
console.log(typeof Symbol("a")); // symbol

// non-primitive types -> doesn't contain the actual value directly, it contains the reference to the value
console.log(typeof {}); // object
// note array and function are object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// primitives have object wrappers
String();
Number();
Boolean();

// e.g. boolean type acts like a object
console.log(true.toString());
console.log(Boolean(true).toString());
