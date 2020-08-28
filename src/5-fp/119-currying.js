// function takes many arguments -> sequence of functions takes single argument

// not curry
const add = (a, b) => a + b;
add(1, 2);

// curry
const curriedAdd = (a) => (b) => a + b;
// benefit: you can create function based on another function
const addOne = curriedAdd(1);
const addTwo = curriedAdd(2);
addOne(2);
addTwo(3);
