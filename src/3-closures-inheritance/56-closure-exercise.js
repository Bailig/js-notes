function a() {
  setTimeout(() => {
    console.log(b); // logs 'b'
  }, 1000);
  // console.log(b); // throws error
  const b = "b";
}

a();

// this is not because const 'b' is hoisted cause does not get hoisted.
// it's because when setTimeout gets back on call stack, the const 'b' is already created
// because there is it's been used in the setTimeout callback, it will create a closure
