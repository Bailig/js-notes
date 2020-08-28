setTimeout(() => {
  console.log("1. setTimeout");
}, 0);

setTimeout(() => {
  console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => console.log("3. promise"));

console.log("4. log");

// result
// 4. log
// 3. promise
// 1. setTimeout
// 2. setTimeout
