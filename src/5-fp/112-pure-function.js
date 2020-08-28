// 1. no side effect
// input -> output

// side effect -> function modifies something outside of itself
const a = [1, 2];
function hasSideEffect(b) {
  b.pop(); // modified something outside of the function
}

hasSideEffect(a);
console.log(a); // [1]

// no side effect
const b = [1, 2];
function noSideEffect(b) {
  const newB = [...b]; // make a new copy
  newB.pop();
  return newB;
}

console.log(noSideEffect(b)); // [1]
console.log(b); // [1, 2]

// this is not pure function because console is window/global specific
function c() {
  console.log("hi");
}
