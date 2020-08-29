// two ways to catch throw
// 1. try catch block

function tryCatch(callback = () => {}) {
  try {
    callback();
    console.log("it works");
  } catch (error) {
    console.log("it failed");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  } finally {
    console.log("all done");
  }
}

tryCatch(() => {
  throw new Error(hi);
});

// try catch can be nested
try {
  try {
    a();
  } catch (error) {
    throw new Error(`Nested error: ${error.message}`);
  }
} catch (error) {
  console.log(error);
}

// try catch block only works with synchronous code, this means it cannot catch asynchronous error
function asyncError() {
  try {
    setTimeout(() => {
      throw new Error("hi");
    }, 0);
  } catch (error) {
    // this does not get run
    console.log(error);
  }
}
asyncError();
// it's because when the set timeout callback get back to the call stack, the try catch block already ran
