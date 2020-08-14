// scope is function based
// scope is the variable access when a function is invoked
// scope represents what's in the variable environment

// a and b are both in the function local scope
function scope(a) {
  const b = 1;
}

// context is object based
// context is the value of this key word
// context is the object owns the executing code

// this (obj) is the context
const obj = {
  a: 1,
  b() {
    this.a;
  },
};
