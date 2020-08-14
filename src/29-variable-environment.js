// each execution context has its own variable environment where all the variables created inside this function exist

function b() {
  var greet = "hi"; // in b's variable environment
}

function a() {
  var greet = "hello"; // in a's variable environment
  b();
}

var greet = "hey"; // global
a();
