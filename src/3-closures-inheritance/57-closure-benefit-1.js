// memory efficient

// bad
function a(index) {
  const heavyComputedArray = new Array(10000).fill("heavy"); // computing and adding data to memory every single time 'a' get called
  return heavyComputedArray[index]; // dirtying the heavyComputedArray every time 'a' gets called
}

console.log(a(100));
console.log(a(100));

// good
function b() {
  const heavyComputedArray = new Array(10000).fill("heavy");
  return (index) => heavyComputedArray[index];
}

const c = b(); // call be once to create heavyComputedArray only once
console.log(c(100));
console.log(c(100));
