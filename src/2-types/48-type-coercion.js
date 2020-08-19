// type coercion means the language converting a type to another type for you
console.log(1 == "1"); // true

console.log(-0 === +0); // true

console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true
