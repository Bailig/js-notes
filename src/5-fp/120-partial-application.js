// partial application

// normal
const add = (a, b, c) => a + b + c;
add(1, 2);

// curry
const curriedAdd = (a) => (b) => (c) => a + b + c;
const addOne = curriedAdd(1);
console.log(addOne(2)(3));

// partial
const partialAddOne = add.bind(null, 1);
console.log(partialAddOne(2, 3));
