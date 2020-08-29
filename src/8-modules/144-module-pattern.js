// using an iife to create module

const ModuleA = (() => {
  function a() {
    console.log("a");
  }
  return { a };
})();

const ModuleB = ((moduleA) => {
  moduleA.a();
})(ModuleA);

// drawback of module pattern is
// 1. still adding to the global scope
// 2. we don't know the dependencies, meaning that we don't know the orders of the script tags
