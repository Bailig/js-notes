// callback queue - task queue
setTimeout(() => {
  console.log("1. setTimeout");
}, 0);

setTimeout(() => {
  console.log("2. setTimeout");
}, 0);

// job queue - micro task queue
Promise.resolve().then(() => console.log("3. promise"));

console.log("4. log");

// result
// 4. log -> executes
// 3. promise -> goes in job queue
// 1. setTimeout -> goes to web api then task queue
// 2. setTimeout -> goes to web api then task queue

// job queue has higher priority than task queue
// event loop will check job queue first and then task queue
