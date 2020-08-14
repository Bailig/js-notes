// function expression
var canada = () => {
  console.log("cold");
};

// function declaration
function india() {
  console.log("hot");
}

// the function is created at runtime
canada();

// the function is created before runtime during compilation (interpretation)
india();
