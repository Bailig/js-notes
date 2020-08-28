// idempotent -> same input gives the same result

// idempotent but not pure
function a(b) {
  console.log(b);
}
a(1);

// not idempotent
function b(c) {
  return Math.random(c);
}
b(1);

// not idempotent
let c = 1;
function d() {
  c++;
}
d();
