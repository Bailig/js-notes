// functions are special objects called callable objects
function hi() {
  console.log("hi");
}

hi.there = "hi there";

// pseudocode
const specialHi = {
  name: "hi",
  there: "hi there",
  "()": console.log("hi"),
};

// because functions are objects, we can pass them around
