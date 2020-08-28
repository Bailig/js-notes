// 1. js is single threaded
//   -> that means js only has one call stack
//   -> can only do one thing at a time

// synchronous programing means code get executed line by line
// stack overflow means the call back stack is overflowing

// 2. js is non-blocking
//   -> asynchronous programing

// below code is asynchronous that does not block the thread (setTimeout is a web api)
setTimeout(() => {
  console.log(1);
}, 1000);
