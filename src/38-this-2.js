// 'this' in b is also window
console.log("1.");
const a = function () {
  console.log("a", this); // window

  const b = function () {
    console.log("b", this); // window

    const c = {
      hi: function () {
        console.log("c", this); // c
      },
    };

    c.hi();
  };

  b();
};

a();

// 'this' is not lexically scoped, it's dynamically scoped. that means it doesn't matter where it's written, it matters how the function is called. if the function is not called on an object it will default to the global object
console.log("2.");
const obj = {
  a() {
    console.log("a", this); // obj
    var b = function () {
      console.log("b", this); // window
    };
    b();
  },
};

obj.a();

// arrow functions are lexically bounced that means arrow functions have a lexical this behavior.
console.log("3.");
const obj2 = {
  a() {
    console.log("a", this); // obj
    var b = () => {
      console.log("b", this); // obj
    };
    b();
  },
};

obj2.a();

// before es6 arrow function exist, we use bind(this) or assign this to a variable
console.log("4.");
const obj3 = {
  a() {
    console.log("a", this); // obj
    var b = function () {
      console.log("b", this); // obj
    };
    b.bind(this)();
  },
  c() {
    var self = this;
    console.log("c", this); // obj
    var d = function () {
      console.log("d", self); // obj
    };
    d();
  },
};

obj3.a();
obj3.c();
