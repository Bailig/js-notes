// all functions using call() when invoking a function
function a() {
  console.log("a");
}

a(); // a
a.call(); // a
a.apply(); // a

const dave = {
  name: "Dave",
  height: 170,
  growBy(height1, height2) {
    return this.height + height1 + height2;
  },
};

console.log(dave.name, dave.growBy(1, 1)); // Dave 172

const mike = {
  name: "Mike",
  height: 175,
};

console.log(mike.name, dave.growBy.call(mike, 2, 2)); // Mike 179
console.log(mike.name, dave.growBy.apply(mike, [2, 2])); // Mike 179
console.log(mike.name, dave.growBy.bind(mike)(2, 2)); // Mike 179
// call, apply, and bind all alow us to override 'this'
