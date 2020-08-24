const array = [];

console.log(array.__proto__); // contains all the methods and properties of array

console.log(array.__proto__.__proto__); // goes up the prototype chain. contains all the methods and properties of object.

console.log(array.toString()); // this is from the base object
