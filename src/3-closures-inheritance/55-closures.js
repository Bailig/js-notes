// foundation of closure
// 1. function is first class citizen
// 2. lexical scope

// closure allows a function to access a variable from an enclosing scope even after it leaves the scope in which it was declared
function a() {
  const v = "v"; // when popping off 'a', 'v' will be kept in closure because it's got referenced
  return function b() {
    return v;
  };
}

// 1. at this stage, the function 'a' is popped off the call stack
// when a function popped off of stack, the variable environment normally should be removed
// however, in this case, the variable 'v' will not be removed. instead, it will be moved to closure (memory heap)
// it's because, there is something referencing it.
const b = a();

// 2. at this stage, when 'b' return 'v', it's gonna look into variable environment first, and can't find 'v'.
// and then, instead of look into global scope, it will look to the closure and find the 'v'
const c = b();

console.log(c);

// closure is lexical scoping
// scope chains [[Scopes]] will be created when js engin look through the code
// it will keep the referenced variables
