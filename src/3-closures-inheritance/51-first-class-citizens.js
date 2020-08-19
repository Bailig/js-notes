// functions are first class citizens that means
// 1. functions can be assigned to variable or properties of objects
const variable1 = function () {};

// 2. we can pass functions as arguments into a function
function func1() {
  console.log("func1");
}
function func2(func) {
  func();
}
func2(func1);

// 3. functions can be returned as values from other functions
function func3() {
  function func4() {
    console.log("func4");
  }
  return func4;
}
func3()();
