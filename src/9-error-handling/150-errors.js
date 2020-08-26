// during runtime when a throw statement is encountered, the execution of the current function will stop and control will be passed to the next part of the call stack
// throw new Error();

// anything can be thrown
// throw "hi";
// throw true;

// Error has 3 builtin properties
const e = new Error("oops");
console.log(e.name);
console.log(e.message);
console.log(e.stack);

// build in constructors
new SyntaxError();
new ReferenceError();
new TypeError();

// when an error is thrown on the call stack, we go to the execution context underneath us and check if there is a catch. if not, go under again to check. if it go through all call stack and there is none handling, the onerror() will run and show the red text in the console in browser. in nodejs, process.on("uncaughtException") will run.
