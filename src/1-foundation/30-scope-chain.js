// each execution context has a link to its outside context that is called scope chain

var greet = "hey"; // global

function a() {
  return function b() {
    console.log(greet); // first goes to function a to check if variable greet is there, if not, go up a scope and check... until finds it at global or throw error
  };
}

a()();
