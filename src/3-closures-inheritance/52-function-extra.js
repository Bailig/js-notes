for (let i = 0; i < 10; i++) {
  function a() {} // bad, it will initialize a function many time in memory
  a();
}

// good
function a() {}
for (let i = 0; i < 10; i++) {
  a();
}
