// 1. common js
const module1 = require("module1");
const module2 = require("module2");

function a() {}

module1.exports = { a };

// with common js modules are meant to be loaded synchronously

// if one module is too large, it will take long time to load, so it's only meant to be used on server side

// with webpack or browserify, we can bundle the common js modules to one js file

// 2. amd
define(["module1", "module2"], function (module1, module2) {
  function a() {}

  return { a };
});

// amd is designed for browsers, it loads modules asynchronously

// require js allows amd

// 3. umd
// umd is just a simple if else statement to check which module is uses and then load the common js or amd version of the code
