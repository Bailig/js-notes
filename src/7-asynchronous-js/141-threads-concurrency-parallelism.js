// the browser has web workers that work in the background.

// a web worker is a javascript program running on a different thread in parallel to the main thread

// const worker = new Worker("worker.js")
// worker.postMessage("hi")
// addEventListener

// node js has worker threads
// libuv, written in c++, handles worker threads, event queue, and event loop

// Concurrency                 Concurrency + parallelism
// (Single-Core CPU)           (Multi-Core CPU)
//  ___                         ___ ___
// |th1|                       |th1|th2|
// |   |                       |   |___|
// |___|___                    |   |___
//     |th2|                   |___|th2|
//  ___|___|                    ___|___|
// |th1|                       |th1|
// |___|___                    |   |___
//     |th2|                   |   |th2|

// spawn a new process
const { spawn } = require("child_process");
// run this process
const childProcess = spawn("git", ["stuff"]);
console.log(childProcess);
