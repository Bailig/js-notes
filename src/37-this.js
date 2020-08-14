// 'this' refers to the object that the function belongs to

// benefits
// 1. 'this' gives the methods access to its object
var obj = {
  doSomething() {
    console.log(this === obj); // true
  },
};

obj.doSomething();

// 2. 'this' allows executing the same code for multiple objects
function sayName() {
  console.log(this.name);
}

var obj1 = {
  name: "obj1",
  sayName,
};

var obj2 = {
  name: "obj2",
  sayName,
};

obj1.sayName(); // obj1
obj2.sayName(); // obj2
