for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log("index:", i); // prints index: 4 four times
  }, 1000);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log("index:", i); // prints index: 0 to 3
  }, 1000);
}

// it's because, let is block scoped that means the let 'i' is part of for block. which means at every iteration there is gonna be a new let 'i' holds the current value

// however, var is function scoped that means var 'i' is part of window. by the time setTimeout callback back to call stack the var 'i' is already 4

// it can be solved via closure
for (var i = 0; i < 4; i++) {
  (function (paramI) {
    setTimeout(() => {
      console.log("index:", paramI); // prints index: 0 to 3
    }, 1000);
  })(i);
}

// because 'i' (number) is passed by value, every time we call the self invoked function there is a new 'i' get copied
